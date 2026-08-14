import React, { useState, useEffect } from 'react';
import { PageConfig } from '../types';
import { ShoppingCart, ShieldCheck, Smartphone, Sparkles, CheckCircle2, Clock, Eye } from 'lucide-react';

interface HeaderHeroProps {
  config: PageConfig;
  onOpenScriptPreview: () => void;
  ebookCoverImage: string;
}

export const HeaderHero: React.FC<HeaderHeroProps> = ({ config, onOpenScriptPreview, ebookCoverImage }) => {
  // Countdown timer state (starts at 14m 52s for urgency)
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 52 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { minutes: 15, seconds: 0 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatPrice = (price: number) => `${price.toLocaleString('pt-MZ')} MT`;

  return (
    <div className="relative">
      {/* TOP URGENCY ANNOUNCEMENT */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-600 text-slate-950 text-center py-2 px-4 text-xs md:text-sm font-extrabold tracking-wide flex items-center justify-center gap-2 shadow-inner">
        <span className="w-2 h-2 rounded-full bg-emerald-900 animate-ping"></span>
        <span>OFERTA LIMITADA PARA MOÇAMBIQUE: 75% DE DESCONTO ENCERRA EM</span>
        <span className="inline-flex items-center gap-1 bg-slate-950 text-amber-300 px-2 py-0.5 rounded font-mono text-xs border border-amber-400/40">
          <Clock className="w-3.5 h-3.5" />
          {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>

      {/* MAIN HERO SECTION */}
      <header className="relative bg-gradient-to-b from-[#052A1E] via-[#0B6E4F] to-[#08523B] text-white pt-8 pb-16 px-4 md:px-8 border-b-4 border-[#B8860B] overflow-hidden">
        {/* Subtle overlay pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10 space-y-8">
          
          {/* TOP BADGES */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/40 text-amber-300 text-xs md:text-sm font-semibold shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Ebook Digital Nº1 em Vendas sem Anúncios em Moçambique</span>
            </div>

            {/* PRODUCT NAME & TAGLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl mx-auto">
              {config.productName}
            </h1>
            <p className="text-lg sm:text-2xl font-bold text-amber-300 max-w-3xl mx-auto leading-relaxed">
              {config.tagline}
            </p>
            <p className="text-sm sm:text-base text-emerald-100/90 max-w-2xl mx-auto font-normal">
              O manual prático de 30 páginas com 20 capítulos em 4 partes. Aprende a vender no orgânico (sem gastar) e no tráfego pago (anúncios), com a psicologia de vendas e os "Segredos do Mentor" para Moçambique.
            </p>
          </div>

          {/* HERO CONTAINER GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
            
            {/* EBOOK COVER IMAGE COLUMN */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-3">
              <div className="relative group max-w-[260px] sm:max-w-[320px]">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <div className="relative bg-emerald-950 p-2 sm:p-3 rounded-2xl shadow-2xl border border-amber-400/50 transform -rotate-1 hover:rotate-0 transition duration-300">
                  <img
                    src={ebookCoverImage}
                    alt="Capa do Ebook Vende Todos os Dias"
                    className="rounded-xl w-full object-cover shadow-md"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-slate-950 font-black text-xs px-3 py-1 rounded-full shadow-lg border border-amber-300">
                    EDITION PRO PDF
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-200/90 pt-1 font-medium">
                <Smartphone className="w-4 h-4 text-emerald-400" />
                <span>30 Páginas de Leitura Prática em PDF</span>
              </div>

              {/* SCRIPT PREVIEW BUTTON */}
              <button
                onClick={onOpenScriptPreview}
                className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4 decoration-amber-400/60 transition cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Ver Script de Objeção ("Está Caro")</span>
              </button>
            </div>

            {/* OFFER HIGHLIGHTS & CTA COLUMN */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <div className="inline-block bg-amber-400/20 text-amber-300 font-bold text-xs px-3 py-1 rounded-md border border-amber-400/30">
                  ⚡ O QUE APRENDES NA EDIÇÃO COMPLETA (20 CAPÍTULOS):
                </div>
                
                <ul className="space-y-2.5 text-sm sm:text-base text-slate-100 font-medium">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-amber-200">Parte 1 (Vendas Orgânicas):</strong> Método dos 3 Toques, WhatsApp, grupos, Facebook e TikTok sem gastar 1 Metical em anúncios.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-amber-200">Parte 2 (Os Segredos da Persuasão):</strong> Os 7 Gatilhos Mentais e como responder ao "está caro" ou "vou pensar".</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span><strong className="text-amber-200">Parte 3 & 4 (Tráfego Pago e Escala):</strong> Tua 1ª campanha no Facebook Ads em Moçambique e o Plano de Ação de 30 Dias.</span>
                  </li>
                </ul>
              </div>

              {/* PRICING CARD */}
              <div className="bg-slate-950/80 p-5 rounded-2xl border border-amber-400/40 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-5 shadow-inner">
                <div className="space-y-1">
                  <div className="text-xs text-slate-400 line-through">De {formatPrice(config.originalPriceMT)}</div>
                  <div className="flex items-baseline justify-center md:justify-start gap-2">
                    <span className="text-xs text-amber-400 uppercase font-bold">Hoje por apenas:</span>
                    <span className="text-3xl sm:text-4xl font-black text-amber-300">{formatPrice(config.priceMT)}</span>
                  </div>
                  <div className="text-[11px] text-emerald-300 font-medium flex items-center gap-1 justify-center md:justify-start">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Acesso imediato no WhatsApp e E-mail</span>
                  </div>
                </div>

                {/* CTA BUTTON LINKED TO ESCALEPAY */}
                <a
                  href={config.paymentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 animate-pulse-glow relative-shine border border-amber-200"
                >
                  <ShoppingCart className="w-5 h-5 text-slate-950" />
                  <span>COMPRAR COM ESCALEPAY</span>
                </a>
              </div>

              {/* MOZAMBICAN PAYMENT BADGES */}
              <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-2.5 text-xs text-slate-300">
                <span className="font-semibold text-amber-200">Formas de Pagamento em Moçambique:</span>
                <span className="px-2.5 py-1 rounded-md bg-red-950/80 border border-red-500/40 font-extrabold text-red-400">M-PESA</span>
                <span className="px-2.5 py-1 rounded-md bg-orange-950/80 border border-orange-500/40 font-extrabold text-orange-400">e-MOLA</span>
                <span className="px-2.5 py-1 rounded-md bg-blue-950/80 border border-blue-500/40 font-extrabold text-blue-300">VISA / MASTERCARD</span>
              </div>

            </div>
          </div>

        </div>
      </header>
    </div>
  );
};
