import React, { useState } from 'react';
import { faqs } from '../data/landingData';
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { PageConfig } from '../types';

interface FAQSectionProps {
  config: PageConfig;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ config }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const whatsappSupportUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(config.whatsappSupportMsg)}`;

  return (
    <section className="py-16 px-4 bg-white border-t border-slate-200">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* SECTION HEADING */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#0B6E4F] text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            Perguntas Frequentes
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Tens Alguma Dúvida?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Aqui estão as respostas para as dúvidas mais comuns dos nossos leitores em Moçambique.
          </p>
        </div>

        {/* ACCORDIONS */}
        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition duration-200 overflow-hidden ${
                  isOpen ? 'border-[#0B6E4F] bg-emerald-50/30 shadow-sm' : 'border-slate-200 bg-slate-50/80 hover:bg-slate-100/80'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#0B6E4F] flex-shrink-0"></span>
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#0B6E4F] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-emerald-100/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DIRECT WHATSAPP SUPPORT LINK */}
        <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 text-center space-y-3">
          <p className="text-xs sm:text-sm text-slate-700 font-medium">
            Ainda tens alguma pergunta que não está listada aqui?
          </p>
          <a
            href={whatsappSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0B6E4F] hover:bg-[#074B36] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl shadow-md transition duration-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-300" />
            <span>FALAR DIRETAMENTE COM SUPORTE NO WHATSAPP</span>
          </a>
        </div>

      </div>
    </section>
  );
};
