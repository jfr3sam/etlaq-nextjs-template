import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format a number as Saudi Riyal currency
 * Note: This returns just the formatted number without the symbol
 * Use the <Price> component for displaying with the SAR symbol
 *
 * @param amount - The amount in SAR
 * @param locale - The locale for number formatting ('ar' or 'en')
 * @param showDecimals - Whether to show decimal places (default: true)
 * @returns Formatted number string
 */
export function formatSAR(
  amount: number,
  locale: 'ar' | 'en' = 'en',
  showDecimals: boolean = true
): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  }).format(amount);
}

/**
 * Parse a formatted SAR string back to a number
 * Handles both Arabic and English numerals
 *
 * @param formattedAmount - The formatted amount string
 * @returns The numeric value
 */
export function parseSAR(formattedAmount: string): number {
  // Remove common formatting characters
  const cleaned = formattedAmount
    .replace(/[٬،,]/g, '') // Remove Arabic and English commas
    .replace(/[٫.]/g, '.') // Normalize decimal separators
    .replace(/[^\d.-]/g, ''); // Remove any non-numeric characters except decimal and minus

  return parseFloat(cleaned) || 0;
}
