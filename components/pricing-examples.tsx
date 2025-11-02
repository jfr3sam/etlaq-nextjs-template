"use client"

import { Price } from './price';
import { SARSymbol } from './sar-symbol';
import { formatSAR, parseSAR } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Pricing Examples Component
 * Demonstrates all the ways to use the SAR currency system
 *
 * This file serves as both documentation and a visual reference
 * for implementing pricing throughout your application.
 *
 * IMPORTANT: The SAR symbol will ALWAYS use the official SVG
 * from /public/Saudi_Riyal_Symbol.svg regardless of language settings.
 */
export function PricingExamples() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">Saudi Riyal Currency System</h1>
        <p className="text-muted-foreground">
          Examples of displaying prices with the official SAR symbol
        </p>
      </div>

      {/* Basic Usage */}
      <Card>
        <CardHeader>
          <CardTitle>1. Basic Usage - Price Component</CardTitle>
          <CardDescription>
            The simplest way to display prices. Uses the SAR symbol SVG automatically.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">English (default):</p>
            <p className="text-2xl font-semibold">
              <Price amount={1234.56} />
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Arabic locale:</p>
            <p className="text-2xl font-semibold">
              <Price amount={1234.56} locale="ar" />
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Symbol Positioning */}
      <Card>
        <CardHeader>
          <CardTitle>2. Symbol Position</CardTitle>
          <CardDescription>
            Control whether the SAR symbol appears before or after the amount
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Symbol before (Arabic style):</p>
            <p className="text-2xl font-semibold">
              <Price amount={999.99} symbolPosition="before" />
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Symbol after (English style):</p>
            <p className="text-2xl font-semibold">
              <Price amount={999.99} symbolPosition="after" />
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Symbol Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>3. Symbol Sizes</CardTitle>
          <CardDescription>
            Adjust the SAR symbol size to match your text
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Small (12px):</p>
            <p className="text-sm">
              <Price amount={49.99} symbolSize={12} />
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Medium (16px - default):</p>
            <p className="text-base">
              <Price amount={149.99} symbolSize={16} />
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Large (24px):</p>
            <p className="text-2xl">
              <Price amount={599.99} symbolSize={24} />
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Extra Large (32px):</p>
            <p className="text-4xl">
              <Price amount={2999.99} symbolSize={32} />
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Decimal Options */}
      <Card>
        <CardHeader>
          <CardTitle>4. Decimal Display</CardTitle>
          <CardDescription>
            Control whether to show decimal places
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">With decimals (default):</p>
            <p className="text-2xl font-semibold">
              <Price amount={1500} showDecimals={true} />
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Without decimals (whole numbers):</p>
            <p className="text-2xl font-semibold">
              <Price amount={1500} showDecimals={false} />
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Standalone Symbol */}
      <Card>
        <CardHeader>
          <CardTitle>5. Standalone SAR Symbol</CardTitle>
          <CardDescription>
            Use the SAR symbol independently when needed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Small symbol (12px):</p>
            <div className="flex items-center gap-2">
              <SARSymbol size={12} />
              <span className="text-sm">Prices in Saudi Riyals</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Medium symbol (24px):</p>
            <div className="flex items-center gap-2">
              <SARSymbol size={24} />
              <span className="text-base">All prices in SAR</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Large symbol (48px):</p>
            <SARSymbol size={48} />
          </div>
        </CardContent>
      </Card>

      {/* Utility Functions */}
      <Card>
        <CardHeader>
          <CardTitle>6. Utility Functions</CardTitle>
          <CardDescription>
            Format and parse SAR amounts programmatically
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">formatSAR() - English:</p>
            <code className="block bg-muted p-2 rounded">
              formatSAR(1234.56) = &quot;{formatSAR(1234.56)}&quot;
            </code>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">formatSAR() - Arabic:</p>
            <code className="block bg-muted p-2 rounded">
              formatSAR(1234.56, &apos;ar&apos;) = &quot;{formatSAR(1234.56, 'ar')}&quot;
            </code>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">formatSAR() - No decimals:</p>
            <code className="block bg-muted p-2 rounded">
              formatSAR(1234.56, &apos;en&apos;, false) = &quot;{formatSAR(1234.56, 'en', false)}&quot;
            </code>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">parseSAR() - Parse formatted string:</p>
            <code className="block bg-muted p-2 rounded">
              parseSAR(&quot;1,234.56&quot;) = {parseSAR('1,234.56')}
            </code>
          </div>
        </CardContent>
      </Card>

      {/* Real-World Examples */}
      <Card>
        <CardHeader>
          <CardTitle>7. Real-World Examples</CardTitle>
          <CardDescription>
            Common pricing patterns in applications
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Product Card */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-2">Premium Plan</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Full access to all features
            </p>
            <div className="flex items-baseline gap-1">
              <Price amount={299} symbolSize={20} className="text-3xl font-bold" />
              <span className="text-sm text-muted-foreground">/month</span>
            </div>
          </div>

          {/* Shopping Cart Item */}
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Product Name</span>
              <Price amount={149.99} />
            </div>
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>Quantity: 3</span>
              <Price amount={449.97} symbolSize={14} />
            </div>
            <div className="border-t mt-2 pt-2 flex justify-between items-center font-semibold">
              <span>Total:</span>
              <Price amount={449.97} symbolSize={18} className="text-lg" />
            </div>
          </div>

          {/* Pricing Table Row */}
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3 text-sm font-medium">Item</th>
                  <th className="text-right p-3 text-sm font-medium">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Basic Package</td>
                  <td className="p-3 text-right">
                    <Price amount={99.00} />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Professional Package</td>
                  <td className="p-3 text-right">
                    <Price amount={299.00} />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Enterprise Package</td>
                  <td className="p-3 text-right">
                    <Price amount={999.00} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>8. Code Examples</CardTitle>
          <CardDescription>
            Copy and paste these examples into your code
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-sm font-medium mb-2">Import statements:</p>
            <code className="block bg-muted p-3 rounded text-xs overflow-x-auto">
              {`import { Price } from '@/components/price';
import { SARSymbol } from '@/components/sar-symbol';
import { formatSAR, parseSAR } from '@/lib/utils';`}
            </code>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Basic usage:</p>
            <code className="block bg-muted p-3 rounded text-xs overflow-x-auto">
              {`<Price amount={299.99} />`}
            </code>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Arabic locale with symbol before:</p>
            <code className="block bg-muted p-3 rounded text-xs overflow-x-auto">
              {`<Price amount={299.99} locale="ar" symbolPosition="before" />`}
            </code>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Large price with custom symbol size:</p>
            <code className="block bg-muted p-3 rounded text-xs overflow-x-auto">
              {`<Price
  amount={1999.99}
  symbolSize={24}
  className="text-3xl font-bold"
/>`}
            </code>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Format price in JavaScript:</p>
            <code className="block bg-muted p-3 rounded text-xs overflow-x-auto">
              {`const formatted = formatSAR(1234.56, 'en');
// Returns: "1,234.56"

const parsed = parseSAR("1,234.56");
// Returns: 1234.56`}
            </code>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
