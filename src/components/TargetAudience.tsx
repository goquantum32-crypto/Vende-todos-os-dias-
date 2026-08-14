import React from 'react';
import { targetAudience } from '../data/landingData';
import { ShoppingBag, Briefcase, TrendingUp, Store, Users, CheckCircle2 } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#0B6E4F]" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-[#0B6E4F]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#0B6E4F]" />;
      case 'Store': return <Store className="w-6 h-6 text-[#0B6E4F]" />;
      default: return <Users className="w-6 h-6 text-[#0B6E4F]" />;
    }
  };

  return (
    <section className="py-16 px-4 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* SECTION HEADING */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0B6E4F] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            Para Quem É Este Ebook?
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Este Guia Foi Feito Especialmente Para Ti Que És:
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Se te encaixas em qualquer um destes perfis em Moçambique, este ebook vai mudar radicalmente o teu faturamento.
          </p>
        </div>

        {/* TARGET CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {targetAudience.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-emerald-50/40 hover:border-[#0B6E4F]/40 transition duration-200 flex items-start gap-4 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-sm flex-shrink-0">
                {getIcon(item.icon)}
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-[#0B6E4F]" />
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
