import React from 'react';
import { sampleSalesScript } from '../data/landingData';
import { PageConfig } from '../types';
import { X, MessageSquare, Copy, Check, Sparkles } from 'lucide-react';

interface ScriptPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PageConfig;
}

export const ScriptPreviewModal: React.FC<ScriptPreviewModalProps> = ({ isOpen, onClose, config }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const scriptText = sampleSalesScript.steps[2].text;

  const handleCopy = () => {
    navigator.clipboard.writeText(scriptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 space-y-6 shadow-2xl border-2 border-amber-400 relative">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* MODAL HEADER */}
        <div className="space-y-2 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#0B6E4F] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            Amostra Grátis do Ebook
          </span>
          <h3 className="text-xl font-extrabold text-slate-900">
            {sampleSalesScript.title}
          </h3>
          <p className="text-xs text-slate-500">
            Este é apenas 1 dos mais de 25 scripts de alta conversão incluídos no ebook.
          </p>
        </div>

        {/* SCRIPT STEPS CONTAINER */}
        <div className="space-y-4 text-xs">
          {sampleSalesScript.steps.map((step, idx) => {
            const isSuccess = idx === 2;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border space-y-1.5 ${
                  isSuccess ? 'bg-emerald-50/80 border-[#0B6E4F] shadow-sm' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between font-bold text-slate-800">
                  <span className={isSuccess ? 'text-[#0B6E4F] font-extrabold flex items-center gap-1' : 'text-slate-500'}>
                    <MessageSquare className="w-3.5 h-3.5 inline" />
                    {step.label}
                  </span>
                  {isSuccess && (
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center gap-1 text-[10px] bg-[#0B6E4F] text-white px-2 py-0.5 rounded hover:bg-[#074B36] transition cursor-pointer font-bold"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copiado!' : 'Copiar Script'}</span>
                    </button>
                  )}
                </div>
                <p className="text-slate-700 leading-relaxed italic bg-white p-2.5 rounded-lg border border-slate-200/80">
                  "{step.text}"
                </p>
              </div>
            );
          })}
        </div>

        {/* TIP BOX */}
        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 text-amber-900 text-xs font-medium text-center">
          💡 {sampleSalesScript.tip}
        </div>

        {/* CTA IN MODAL */}
        <div className="text-center pt-2">
          <a
            href={config.paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="w-full inline-block bg-[#0B6E4F] hover:bg-[#074B36] text-white font-extrabold text-sm py-3.5 px-6 rounded-xl shadow-md transition"
          >
            QUERO TODOS OS 25 SCRIPTS (250 MT)
          </a>
        </div>

      </div>
    </div>
  );
};
