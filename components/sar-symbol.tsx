import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SARSymbolProps {
  className?: string;
  size?: number;
}

/**
 * Saudi Riyal Symbol Component
 * Always displays the official SAR symbol regardless of language/locale
 * Uses the SVG from /public/Saudi_Riyal_Symbol.svg
 */
export function SARSymbol({ className, size = 16 }: SARSymbolProps) {
  return (
    <Image
      src="/Saudi_Riyal_Symbol.svg"
      alt="ر.س"
      width={size}
      height={size}
      className={cn('inline-block', className)}
      priority
    />
  );
}
