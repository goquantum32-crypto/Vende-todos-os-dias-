import React, { useState } from 'react';
import { ebookParts } from '../data/landingData';
import { EbookPart } from '../types';
import { BookOpen, Smartphone, Sparkles, Target, TrendingUp, Lightbulb, CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const EbookStructure: React.FC = () => {
  const [activePartId, setActivePartId] = useState<string>('part-1');

  const getPartIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-[#0B6E4F]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
      case 'Target': return <Target className="w-5 h-5 text-emerald-600" />;
      default: return <TrendingUp className="w-5 h-5 text-[#0B6E4F]" />;
    }
  };

  const currentPart = ebookParts.find(p => p.id === activePartId) || ebookParts[0];

  return (
    <section className="py-16 px-4 bg-slate-900 text-white border-y border-slate-800">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* SECTION TITLE */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold uppercase tracking-wider inline-flex items-center gap-1.5 border border-amber-400/30">
            <BookOpen className="w-3.5 h-3.5" />
            Índice Completo de 20 Capítulos
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Estrutura Completa do Manual em 4 Partes
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            30 páginas de puro conteúdo prático sem enrolação. Clica em cada parte para explorar os capítulos e os <span className="text-amber-300 font-bold">"Segredos do Mentor"</span> de Moçambique.
          </p>
        </div>

        {/* PARTS TABS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {ebookParts.map((part) => {
            const isActive = part.id === activePartId;
            return (
              <button
                key={part.id}
                onClick={() => setActivePartId(part.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-left transition duration-200 cursor-pointer flex flex-col justify-between space-y-2 relative overflow-hidden ${
                  isActive
                    ? 'bg-gradient-to-b from-[#0B6E4F] to-[#064230] border-amber-400 text-white shadow-xl scale-[1.02]'
                    : 'bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] sm:text-xs font-black uppercase px-2 py-0.5 rounded ${
                    isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-700 text-slate-300'
                  }`}>
                    Parte {part.partNumber}
                  </span>
                  {getPartIcon(part.iconName)}
                </div>

                <div>
                  <h3 className="font-bold text-xs sm:text-sm line-clamp-2 leading-snug">
                    {part.title}
                  </h3>
                  <p className="text-[10px] text-emerald-300/80 pt-1 font-mono">
                    {part.chaptersRange}
                  </p>
                </div>

                {isActive && (
                  <div className="absolute bottom-0 inset-x-0 h-1 bg-amber-400"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* ACTIVE PART DETAIL CONTAINER */}
        <div className="bg-slate-800/90 rounded-3xl border-2 border-[#0B6E4F] p-6 sm:p-8 space-y-6 shadow-2xl relative">
          
          {/* HEADER OF ACTIVE PART */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-700/80">
            <div className="space-y-1">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Parte {currentPart.partNumber} • {currentPart.chaptersRange}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {currentPart.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {currentPart.subtitle}
              </p>
            </div>

            <div className="flex-shrink-0 bg-emerald-950/80 px-4 py-2 rounded-xl border border-emerald-500/30 text-center">
              <span className="text-[11px] text-emerald-300 block font-semibold">Total da Parte</span>
              <span className="text-sm font-extrabold text-white">{currentPart.chapters.length} Módulos Práticos</span>
            </div>
          </div>

          {/* CHAPTERS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentPart.chapters.map((ch, idx) => (
              <div
                key={idx}
                className="bg-slate-900/90 p-5 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition duration-200 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/30">
                      {ch.chapterNumber}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>

                  <h4 className="font-extrabold text-sm sm:text-base text-white">
                    {ch.title}
                  </h4>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                {/* MENTOR SECRET BOX */}
                {ch.mentorSecret && (
                  <div className="mt-3 p-3 rounded-xl bg-gradient-to-r from-amber-950/60 to-emerald-950/60 border border-amber-500/40 text-amber-200 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-amber-300 text-[11px] uppercase tracking-wider">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      <span>Segredo do Mentor</span>
                    </div>
                    <p className="italic text-[11px] text-slate-200 leading-snug">
                      "{ch.mentorSecret}"
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM CTA PROMPT */}
          <div className="pt-4 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs text-slate-300">
              💡 Tudo isto estruturado em <strong className="text-white">30 páginas diretas ao ponto</strong> para aplicares hoje no teu telemóvel.
            </p>
            <a
              href="#comprar"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl transition shadow-lg flex-shrink-0"
            >
              <span>GARANTIR MINHA CÓPIA COMPLETA (250 MT)</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
