import { cn } from '@/lib/utils';
import { SARSymbol } from './sar-symbol';

interface PriceProps {
  amount: number;
  className?: string;
  symbolSize?: number;
  symbolPosition?: 'before' | 'after';
  locale?: 'ar' | 'en';
  showDecimals?: boolean;
}

/**
 * Price Component
 * Displays formatted prices with the Saudi Riyal symbol
 * Always uses the SAR SVG symbol regardless of language
 *
 * @param amount - The price amount in SAR
 * @param symbolPosition - Position of SAR symbol (default: 'after' for English, 'before' for Arabic)
 * @param locale - Locale for number formatting (default: 'en')
 * @param showDecimals - Whether to show decimal places (default: true)
 * @param symbolSize - Size of the SAR symbol in pixels (default: 16)
 */
export function Price({
  amount,
  className,
  symbolSize = 16,
  symbolPosition,
  locale = 'en',
  showDecimals = true,
}: PriceProps) {
  // Auto-determine symbol position based on locale if not specified
  const position = symbolPosition || (locale === 'ar' ? 'before' : 'after');

  // Format the number based on locale
  const formattedAmount = new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount);

  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      {position === 'before' && <SARSymbol size={symbolSize} />}
      <span>{formattedAmount}</span>
      {position === 'after' && <SARSymbol size={symbolSize} />}
    </span>
  );
}
