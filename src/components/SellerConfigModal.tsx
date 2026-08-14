import React, { useState } from 'react';
import { PageConfig } from '../types';
import { generateSingleFileHtml } from '../utils/generateSingleFileHtml';
import { X, Settings, Download, Copy, Check, Code2 } from 'lucide-react';

interface SellerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: PageConfig;
  onSaveConfig: (newConfig: PageConfig) => void;
}

export const SellerConfigModal: React.FC<SellerConfigModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig
}) => {
  const [formData, setFormData] = useState<PageConfig>(config);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [activeTab, setActiveTab] = useState<'settings' | 'export'>('settings');

  if (!isOpen) return null;

  const handleChange = (field: keyof PageConfig, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    onClose();
  };

  const htmlCode = generateSingleFileHtml(formData);

  const handleCopyHtml = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopiedHtml(true);
    setTimeout(() => setCopiedHtml(false), 2500);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'vende-todos-os-dias-landing-page.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border-2 border-[#0B6E4F] relative my-8">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* HEADER */}
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[#0B6E4F] font-bold text-sm">
            <Settings className="w-5 h-5" />
            <span>PAINEL DE CONFIGURAÇÃO DO VENDEDOR</span>
          </div>
          <h3 className="text-2xl font-black text-slate-900">
            Personaliza a Tua Landing Page
          </h3>
          <p className="text-xs text-slate-500">
            Ajusta o preço em Meticais (MT), o teu link da EscalePay e o teu contacto de WhatsApp para Moçambique.
          </p>
        </div>

        {/* TABS */}
        <div className="flex border-b border-slate-200 gap-4">
          <button
            onClick={() => setActiveTab('settings')}
            className={`pb-3 font-bold text-sm cursor-pointer border-b-2 transition ${
              activeTab === 'settings'
                ? 'border-[#0B6E4F] text-[#0B6E4F]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            ⚙️ Definições do Produto
          </button>
          <button
            onClick={() => setActiveTab('export')}
            className={`pb-3 font-bold text-sm cursor-pointer border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'export'
                ? 'border-[#0B6E4F] text-[#0B6E4F]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>Baixar Ficheiro HTML Único</span>
          </button>
        </div>

        {activeTab === 'settings' ? (
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Preço Promocional (MT):</label>
                <input
                  type="number"
                  value={formData.priceMT}
                  onChange={(e) => handleChange('priceMT', Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Preço Normal Riscado (MT):</label>
                <input
                  type="number"
                  value={formData.originalPriceMT}
                  onChange={(e) => handleChange('originalPriceMT', Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Link de Pagamento EscalePay:</label>
              <input
                type="url"
                value={formData.paymentUrl}
                onChange={(e) => handleChange('paymentUrl', e.target.value)}
                placeholder="https://escalepay.com/checkout/..."
                className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                required
              />
              <p className="text-[11px] text-slate-400">O botão "COMPRAR AGORA" abrirá este link numa nova aba.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">WhatsApp de Suporte (com código do país):</label>
                <input
                  type="text"
                  value={formData.whatsappNumber}
                  onChange={(e) => handleChange('whatsappNumber', e.target.value)}
                  placeholder="258840000000"
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Nome do Vendedor / Marca:</label>
                <input
                  type="text"
                  value={formData.sellerName}
                  onChange={(e) => handleChange('sellerName', e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-300 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#0B6E4F]"
                  required
                />
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <button
                type="submit"
                className="flex-1 bg-[#0B6E4F] hover:bg-[#074B36] text-white font-extrabold text-sm py-3 px-5 rounded-xl shadow-md transition cursor-pointer"
              >
                Salvar Alterações na Página
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-sm py-3 px-5 rounded-xl transition cursor-pointer"
              >
                Cancelar
              </button>
            </div>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs text-slate-700 space-y-1">
              <p className="font-bold text-[#0B6E4F]">📄 Ficheiro HTML Standalone de 1 Único Ficheiro:</p>
              <p>Este ficheiro inclui todo o HTML, estilos Tailwind CSS e lógica JavaScript num só documento pronto a publicar no teu servidor, cPanel ou GitHub Pages!</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleDownloadHtml}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#0B6E4F] hover:bg-[#074B36] text-white font-black text-sm py-3 px-5 rounded-xl shadow-md transition cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descarregar .html Único</span>
              </button>

              <button
                onClick={handleCopyHtml}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm py-3 px-5 rounded-xl shadow-md transition cursor-pointer"
              >
                {copiedHtml ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedHtml ? 'Código HTML Copiado!' : 'Copiar Código HTML'}</span>
              </button>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700">Pré-visualização do Código HTML:</label>
              <textarea
                readOnly
                value={htmlCode}
                rows={8}
                className="w-full p-3 bg-slate-900 text-emerald-400 font-mono text-[11px] rounded-xl border border-slate-700 focus:outline-none"
              />
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
