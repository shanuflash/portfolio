'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

import ProductCard from './product-card';

export default function ExpandableProductsSection({ products }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const initialCount = 6;
  const visibleProducts = isExpanded
    ? products
    : products.slice(0, initialCount);
  const hasMore = products.length > initialCount;

  return (
    <div
      id="products"
      className="border-b border-border border-gray-200 bg-background"
    >
      <div className="max-w-2xl border-x border-gray-200 mx-auto">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Tools & Utilities
          </h2>

          <div
            className={`transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-96 overflow-y-auto' : 'max-h-none'
            }`}
            style={{
              scrollbarWidth: 'none',
              scrollbarColor: '#e5e7eb #f3f4f6',
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-200 rounded-lg overflow-hidden">
              {visibleProducts.map((product, index) => {
                const isLastRow =
                  Math.floor(index / 2) ===
                  Math.floor((visibleProducts.length - 1) / 2);
                const isRightColumn = index % 2 === 1;
                const isLastItem = index === visibleProducts.length - 1;

                let gridPosition = '';
                if (!isLastRow) {
                  gridPosition += 'border-b ';
                }
                if (!isRightColumn) {
                  gridPosition += 'md:border-r ';
                }
                gridPosition += 'border-gray-200';

                return (
                  <ProductCard
                    key={index}
                    product={{
                      ...product,
                      gridPosition,
                    }}
                  />
                );
              })}
            </div>
          </div>

          {hasMore && (
            <div className="mt-6 flex justify-center">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-foreground hover:bg-gray-100 rounded-lg transition-colors duration-200 border border-gray-200"
              >
                <span>
                  {isExpanded
                    ? 'Show Less'
                    : `Show More (${products.length - initialCount} more tools)`}
                </span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
