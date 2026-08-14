import React from 'react';
import { painPoints } from '../data/landingData';
import { XCircle, AlertCircle, HelpCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* SECTION TITLE */}
        <div className="text-center space-y-3">
          <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5" />
            Problemas Reais de Vendas
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            Sentes que <span className="text-red-600 underline decoration-red-300">"Vender Online Não Funciona Para Mim"</span>?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Muitos empreendedores em Moçambique desistem de vender na internet porque estão a cometer estes 3 erros fatais no WhatsApp e Redes Sociais.
          </p>
        </div>

        {/* PAIN CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {painPoints.map((pain) => (
            <div
              key={pain.id}
              className="bg-red-50/60 p-6 rounded-2xl border border-red-200/80 shadow-sm space-y-3 hover:shadow-md transition duration-200 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base leading-snug">
                  {pain.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pain.description}
                </p>
              </div>
              <div className="pt-2 text-[11px] font-semibold text-red-700 flex items-center gap-1">
                <span>Resultado: Perda de tempo e megabytes</span>
              </div>
            </div>
          ))}
        </div>

        {/* REASSURANCE BOX */}
        <div className="bg-amber-50 p-6 sm:p-8 rounded-2xl border border-amber-300 text-center space-y-3 shadow-sm">
          <div className="inline-flex p-2 rounded-full bg-amber-100 text-amber-900">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-amber-950">
            A culpa NÃO é tua e o problema NÃO é o teu produto!
          </h3>
          <p className="text-sm text-amber-900/90 max-w-2xl mx-auto leading-relaxed">
            A verdade é simples: ninguém compra quando sente que estás a tentar "forçar" uma venda. Em Moçambique, os clientes precisam de ver <strong>VALOR E CONFIANÇA</strong> antes de enviarem o dinheiro por M-Pesa ou e-Mola. E é exatamente esse método que vais aprender!
          </p>
        </div>

      </div>
    </section>
  );
};
