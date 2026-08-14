import React from 'react';
import { PageConfig } from '../types';
import { bonuses } from '../data/landingData';
import { ShoppingCart, Gift, ShieldCheck, CheckCircle2, Zap, Smartphone, ArrowRight } from 'lucide-react';

interface PricingOfferProps {
  config: PageConfig;
}

export const PricingOffer: React.FC<PricingOfferProps> = ({ config }) => {
  const formatPrice = (price: number) => `${price.toLocaleString('pt-MZ')} MT`;

  return (
    <section id="comprar" className="py-16 px-4 bg-slate-100/90 relative">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 border border-amber-300">
            <Gift className="w-3.5 h-3.5 text-amber-700" />
            Oferta Especial de Lançamento
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Garante o Teu Ebook + 3 Bónus de Oferta
          </h2>
          <p className="text-slate-600 max-w-lg mx-auto text-sm sm:text-base">
            Ao comprares hoje, recebes o guia completo mais estes 3 materiais complementares totalmente grátis!
          </p>
        </div>

        {/* MAIN PRICING CARD STACK */}
        <div className="bg-white rounded-3xl border-2 border-[#B8860B] shadow-2xl p-6 sm:p-10 space-y-8 relative overflow-hidden">
          
          {/* TOP RIBBON */}
          <div className="absolute top-0 right-0 bg-[#B8860B] text-slate-950 font-black text-[11px] px-5 py-1.5 rounded-bl-2xl uppercase tracking-wider shadow-md">
            Desconto de 75% Ativo
          </div>

          {/* BONUSES LIST BOX */}
          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border border-amber-200/90 space-y-4">
            <h3 className="font-extrabold text-amber-950 text-sm sm:text-base flex items-center gap-2">
              <Gift className="w-5 h-5 text-amber-700" />
              <span>BÓNUS EXCLUSIVOS DE OFERTA HOJE:</span>
            </h3>

            <div className="space-y-3">
              {bonuses.map((bonus) => (
                <div key={bonus.id} className="flex items-start justify-between gap-3 border-b border-amber-200/60 pb-2.5 last:border-0 last:pb-0">
                  <div className="space-y-0.5">
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#0B6E4F] flex-shrink-0" />
                      <span>{bonus.title}</span>
                    </h4>
                    <p className="text-[11px] text-slate-600 pl-5 leading-relaxed">{bonus.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[10px] text-slate-400 line-through block">{formatPrice(bonus.valValueMT)}</span>
                    <span className="text-xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">GRÁTIS</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PRICE ANCHOR & BIG NUMBER */}
          <div className="text-center space-y-2 py-2">
            <div className="text-sm sm:text-base text-slate-400 font-medium line-through">
              Preço Normal: {formatPrice(config.originalPriceMT)}
            </div>
            <div className="text-xs font-extrabold text-[#0B6E4F] uppercase tracking-wider">
              Preço Promocional Especial para Moçambique:
            </div>
            <div className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight">
              {formatPrice(config.priceMT)}
            </div>
            <p className="text-xs text-emerald-800 font-semibold flex items-center justify-center gap-1 pt-1">
              <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
              <span>Pagamento Único • Sem mensalidades • Acesso Vitalício</span>
            </p>
          </div>

          {/* BIG BUY BUTTON LINKED TO ESCALEPAY */}
          <div className="space-y-4">
            <a
              href={config.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-[#0B6E4F] to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-lg sm:text-xl py-5 px-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 animate-pulse-glow relative-shine text-center cursor-pointer border border-emerald-400/30"
            >
              <ShoppingCart className="w-6 h-6 text-amber-300" />
              <span>COMPRAR AGORA COM ESCALEPAY</span>
              <ArrowRight className="w-6 h-6 text-amber-300" />
            </a>

            {/* GUARANTEE & ACCESS NOTES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 pt-2 border-t border-slate-200">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <ShieldCheck className="w-4 h-4 text-[#0B6E4F]" />
                <span>Pagamento 100% Seguro via EscalePay</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-end">
                <Smartphone className="w-4 h-4 text-[#0B6E4F]" />
                <span>Download imediato após pagamento</span>
              </div>
            </div>
          </div>

          {/* MOZAMBICAN PAYMENT BADGES */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-center space-y-2">
            <p className="text-xs font-bold text-slate-700">MÉTODOS DE PAGAMENTO ACEITES EM MOÇAMBIQUE:</p>
            <div className="flex items-center justify-center gap-3 text-xs">
              <span className="px-3 py-1 rounded bg-red-100 text-red-800 font-extrabold border border-red-200">M-PESA</span>
              <span className="px-3 py-1 rounded bg-orange-100 text-orange-800 font-extrabold border border-orange-200">e-MOLA</span>
              <span className="px-3 py-1 rounded bg-blue-100 text-blue-800 font-extrabold border border-blue-200">CARTÃO BANCÁRIO</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
