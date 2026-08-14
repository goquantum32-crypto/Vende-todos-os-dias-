import React from 'react';
import { testimonials } from '../data/landingData';
import { Star, MessageSquareQuote, CheckCircle2, MapPin } from 'lucide-react';

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#052A1E] via-[#0B6E4F] to-[#074B36] text-white">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* SECTION TITLE */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5 border border-amber-300/30">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Depoimentos Reais em Moçambique
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
            Quem Já Comprou e Aplicou Recomenda!
          </h2>
          <p className="text-emerald-100/80 max-w-xl mx-auto text-sm sm:text-base">
            Veja os resultados de quem passou a usar o Método dos 3 Toques no WhatsApp.
          </p>
        </div>

        {/* TESTIMONIALS CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="bg-emerald-950/70 p-6 rounded-2xl border border-emerald-700/60 shadow-xl space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* RATING STARS */}
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: test.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* TESTIMONIAL TEXT */}
                <p className="text-xs sm:text-sm text-emerald-100 italic leading-relaxed">
                  "{test.comment}"
                </p>
              </div>

              {/* AUTHOR FOOTER */}
              <div className="pt-4 border-t border-emerald-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={test.avatar}
                      alt={test.name}
                      className="w-10 h-10 rounded-full object-cover border-2 border-amber-400/80 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-white flex items-center gap-1">
                        <span>{test.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      </h4>
                      <p className="text-[11px] text-emerald-300/90 flex items-center gap-1">
                        <span>{test.role}</span>
                        <span>•</span>
                        <span className="flex items-center text-amber-300"><MapPin className="w-3 h-3 inline mr-0.5" />{test.location}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="inline-block bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded text-[10px] font-bold border border-amber-400/30">
                  ⚡ {test.resultBadge}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BADGE */}
        <div className="text-center pt-2">
          <p className="text-xs text-emerald-200/90">
            🔒 Depoimentos de leitores reais do ebook em Maputo, Matola, Beira, Nampula e Chimoio.
          </p>
        </div>

      </div>
    </section>
  );
};
