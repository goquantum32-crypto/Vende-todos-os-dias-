import React from 'react';
import { benefits } from '../data/landingData';
import { PageConfig } from '../types';
import { Sparkles, FileText, Calendar, Zap, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';

interface SolutionBenefitsProps {
  config: PageConfig;
  onOpenScriptPreview: () => void;
}

export const SolutionBenefits: React.FC<SolutionBenefitsProps> = ({ config, onOpenScriptPreview }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-[#0B6E4F]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#0B6E4F]" />;
      case 'Calendar': return <Calendar className="w-6 h-6 text-[#0B6E4F]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#0B6E4F]" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-[#0B6E4F]" />;
      default: return <CheckCircle className="w-6 h-6 text-[#0B6E4F]" />;
    }
  };

  return (
    <section className="py-16 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* SECTION TITLE */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0B6E4F] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            A Solução Definitiva
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Apresentamos o Ebook <span className="text-[#0B6E4F]">"{config.productName}"</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            O guia prático concebido especificamente para empreendedores, comerciantes e prestadores de serviços em Moçambique.
          </p>
        </div>

        {/* BENEFITS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:border-[#0B6E4F]/50 hover:shadow-md transition duration-200 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-100">
                    {getIcon(benefit.icon)}
                  </div>
                  {benefit.highlightTag && (
                    <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300/60">
                      {benefit.highlightTag}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-slate-900 text-lg leading-snug">
                  {benefit.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {benefit.id === 'ben-2' && (
                <button
                  onClick={onOpenScriptPreview}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B6E4F] hover:text-[#074B36] pt-2 border-t border-slate-100 w-full cursor-pointer"
                >
                  <span>Testar Exemplo de Script</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* HIGHLIGHT CALLOUT */}
        <div className="bg-gradient-to-r from-[#052A1E] via-[#0B6E4F] to-[#074B36] p-6 sm:p-8 rounded-3xl text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-amber-400/30">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-amber-300 text-xs font-bold uppercase tracking-wider">
              🚀 APLICAÇÃO IMEDIATA
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold">
              Não precisas de experiência prévia nem de computador!
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl">
              Podes ler o ebook no teu telemóvel e começar a aplicar os scripts no teu WhatsApp ainda hoje.
            </p>
          </div>
          <a
            href={config.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition duration-200"
          >
            GARANTIR O MEU EBOOK
          </a>
        </div>

      </div>
    </section>
  );
};
