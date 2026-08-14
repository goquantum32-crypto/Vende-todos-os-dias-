import React from 'react';
import { PageConfig } from '../types';
import { ShoppingCart, Zap } from 'lucide-react';

interface StickyMobileCTAProps {
  config: PageConfig;
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ config }) => {
  const formatPrice = (price: number) => `${price.toLocaleString('pt-MZ')} MT`;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-slate-900/95 backdrop-blur-md border-t border-amber-500/30 shadow-2xl md:hidden z-40 flex items-center justify-between gap-3">
      <div className="space-y-0.5">
        <div className="text-[10px] text-slate-400 line-through">De {formatPrice(config.originalPriceMT)}</div>
        <div className="text-lg font-black text-amber-300 flex items-center gap-1">
          <span>{formatPrice(config.priceMT)}</span>
          <span className="text-[10px] bg-emerald-800 text-emerald-200 px-1.5 py-0.2 rounded font-bold">PDF</span>
        </div>
      </div>

      <a
        href={config.paymentUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 font-black text-xs sm:text-sm py-3 px-3 rounded-xl shadow-lg border border-amber-300 animate-pulse-glow"
      >
        <ShoppingCart className="w-4 h-4 text-slate-950" />
        <span>COMPRAR (ESCALEPAY)</span>
      </a>
    </div>
  );
};
