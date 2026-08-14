import React, { useState, useEffect } from 'react';
import { recentSales } from '../data/landingData';
import { LiveSaleItem } from '../types';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export const LiveSalesNotifications: React.FC = () => {
  const [currentSale, setCurrentSale] = useState<LiveSaleItem | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setCurrentSale(recentSales[index]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 4000);

      index = (index + 1) % recentSales.length;
    }, 12000);

    return () => clearInterval(interval);
  }, []);

  if (!currentSale || !visible) return null;

  return (
    <div className="fixed bottom-16 sm:bottom-6 left-4 z-30 max-w-xs bg-slate-900/95 text-white p-3.5 rounded-2xl shadow-2xl border border-amber-400/40 backdrop-blur-md flex items-center gap-3 animate-bounce shadow-amber-500/10">
      <div className="w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-400/30">
        <ShoppingBag className="w-5 h-5 text-amber-300" />
      </div>
      <div className="space-y-0.5 text-xs">
        <div className="font-extrabold text-amber-300 flex items-center gap-1">
          <span>{currentSale.name}</span>
          <span className="text-[10px] text-emerald-300">({currentSale.city})</span>
          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
        </div>
        <p className="text-[11px] text-slate-300">
          Acabou de adquirir o Ebook por 250 MT!
        </p>
        <span className="text-[9px] text-slate-400 block">{currentSale.timeAgo}</span>
      </div>
    </div>
  );
};
