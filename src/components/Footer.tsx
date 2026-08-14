import React from 'react';
import { PageConfig } from '../types';
import { Shield, Lock } from 'lucide-react';

interface FooterProps {
  config: PageConfig;
  onOpenSellerConfig: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenSellerConfig }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs py-10 px-4 border-t border-slate-800 text-center space-y-4">
      <div className="max-w-3xl mx-auto space-y-3">
        
        <div className="flex items-center justify-center gap-2 text-slate-300 font-bold text-sm">
          <Shield className="w-4 h-4 text-[#0B6E4F]" />
          <span>{config.productName}</span>
        </div>

        <p className="text-slate-400 text-xs max-w-lg mx-auto">
          {config.tagline} • Vendido e distribuído em Moçambique por {config.sellerName}.
        </p>

        <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500 pt-2 border-t border-slate-900">
          <span className="flex items-center gap-1"><Lock className="w-3 h-3 text-emerald-500" /> Pagamento Seguro via EscalePay</span>
          <span>•</span>
          <span>M-Pesa / e-Mola</span>
          <span>•</span>
          <span>Acesso Imediato em PDF</span>
        </div>

        <p className="text-[10px] text-slate-600 max-w-xl mx-auto pt-2">
          © {new Date().getFullYear()} {config.productName}. Todos os direitos reservados.
          Este produto digital destina-se a fins educativos. Os resultados nas tuas vendas podem variar com base na tua dedicação e aplicação prática das estratégias.
        </p>

        {/* SELLER CONFIGURATION TRIGGER BUTTON */}
        <div className="pt-4">
          <button
            onClick={onOpenSellerConfig}
            className="text-[11px] text-slate-500 hover:text-amber-400 underline decoration-slate-700 hover:decoration-amber-400 cursor-pointer transition"
          >
            ⚙️ Painel do Vendedor: Personalizar Preço, Link EscalePay e Baixar HTML Standalone
          </button>
        </div>

      </div>
    </footer>
  );
};
