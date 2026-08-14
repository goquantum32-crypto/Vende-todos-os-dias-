import { PageConfig } from '../types';
import { benefits, painPoints, targetAudience, testimonials, bonuses, faqs } from '../data/landingData';
import { coverBase64 } from '../assets/images/coverBase64';

export function generateSingleFileHtml(config: PageConfig): string {
  const formatPrice = (p: number) => `${p.toLocaleString('pt-MZ')} MT`;

  return `<!DOCTYPE html>
<html lang="pt-MZ" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${config.productName} — ${config.tagline}</title>
  <meta name="description" content="Aprende a vender todos os dias pelo WhatsApp e Redes Sociais em Moçambique sem gastar dinheiro em anúncios. Ebook prático com scripts prontos.">
  
  <!-- Tailwind CSS via CDN for standalone fast rendering -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              green: '#0B6E4F',
              'green-dark': '#074B36',
              'green-light': '#128C67',
              gold: '#B8860B',
              'gold-light': '#D4AF37',
              'gold-glow': '#E5C158'
            }
          }
        }
      }
    }
  </script>
  <style>
    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 0 0 rgba(184, 134, 11, 0.4); }
      50% { box-shadow: 0 0 0 14px rgba(184, 134, 11, 0); }
    }
    .animate-pulse-glow { animation: pulse-glow 2s infinite; }
    
    @keyframes shine {
      100% { left: 125%; }
    }
    .relative-shine { position: relative; overflow: hidden; }
    .relative-shine::after {
      content: ''; position: absolute; top: -50%; left: -75%; width: 50%; height: 200%;
      opacity: 0.25; transform: rotate(30deg);
      background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 100%);
      animation: shine 4s infinite;
    }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased font-sans pb-24 md:pb-0">

  <!-- TOP ANNOUNCEMENT BANNER -->
  <div class="bg-gradient-to-r from-amber-600 via-brand-gold to-amber-700 text-white text-center py-2.5 px-4 text-xs md:text-sm font-semibold tracking-wide shadow-md flex items-center justify-center gap-2">
    <span class="inline-block w-2 h-2 rounded-full bg-emerald-300 animate-ping"></span>
    <span>OFERTA ESPECIAL PARA MOÇAMBIQUE — DESCONTO EXCLUSIVO DE HOJE DE 75%</span>
  </div>

  <!-- HEADER & HERO SECTION -->
  <header class="relative bg-gradient-to-b from-[#063325] via-brand-green to-[#08523b] text-white pt-8 pb-16 px-4 overflow-hidden border-b-4 border-brand-gold">
    <!-- Background subtle mesh -->
    <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
    
    <div class="max-w-5xl mx-auto relative z-10">
      <div class="text-center space-y-4">
        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-300/30 text-amber-300 text-xs md:text-sm font-medium">
          <svg class="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          Ebook Digital Nº1 em Vendas Organicas em Moçambique
        </div>

        <h1 class="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          ${config.productName}
        </h1>
        <p class="text-lg md:text-2xl font-medium text-amber-200 max-w-3xl mx-auto leading-relaxed">
          ${config.tagline}
        </p>
        <p class="text-sm md:text-base text-emerald-100/90 max-w-2xl mx-auto">
          O método prático para transformar o teu WhatsApp, Facebook e TikTok numa máquina diária de vendas sem precisares de investir 1 Metical em anúncios pagos!
        </p>
      </div>

      <!-- HERO GRID: EBOOK COVER & OFFER BOX -->
      <div class="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
        <div class="lg:col-span-5 flex flex-col items-center justify-center">
          <div class="relative group max-w-[280px] md:max-w-[320px]">
            <div class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-brand-gold rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div class="relative bg-emerald-950 p-2 rounded-2xl shadow-2xl border border-amber-400/40 transform -rotate-1 hover:rotate-0 transition duration-300">
              <img src="${coverBase64}" alt="Capa do Ebook Vende Todos os Dias" class="rounded-xl w-full object-cover shadow-md" />
              <div class="absolute top-4 right-4 bg-amber-500 text-slate-900 font-extrabold text-xs px-3 py-1 rounded-full shadow-lg">
                FORMATO PDF
              </div>
            </div>
          </div>
          <div class="mt-4 flex items-center gap-2 text-xs text-emerald-200/90">
            <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            <span>Leitura fácil no telemóvel Android ou iPhone</span>
          </div>
        </div>

        <div class="lg:col-span-7 space-y-6">
          <div class="space-y-3">
            <div class="flex items-center gap-2 text-amber-300 text-sm font-semibold">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
              <span>Sem mensalidades, pagamento único de acesso vitalício</span>
            </div>
            
            <ul class="space-y-2 text-sm md:text-base text-slate-100">
              <li class="flex items-start gap-2.5">
                <span class="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">✓</span>
                <span><strong>Método dos 3 Toques:</strong> Fecha vendas em 3 mensagens diretas.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">✓</span>
                <span><strong>Scripts Prontos:</strong> Respostas prontas para copiar e colar no WhatsApp.</span>
              </li>
              <li class="flex items-start gap-2.5">
                <span class="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">✓</span>
                <span><strong>Calendário de Conteúdo:</strong> O que publicar nos Status para gerar pedidos.</span>
              </li>
            </ul>
          </div>

          <!-- PRICE BOX -->
          <div class="bg-slate-900/80 p-5 rounded-2xl border border-amber-400/30 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div class="text-xs text-slate-400 line-through">De ${formatPrice(config.originalPriceMT)}</div>
              <div class="flex items-baseline gap-2">
                <span class="text-xs text-amber-400 uppercase font-semibold">Por apenas:</span>
                <span class="text-3xl md:text-4xl font-extrabold text-amber-300">${formatPrice(config.priceMT)}</span>
              </div>
              <div class="text-[11px] text-emerald-300">Pagamento seguro via EscalePay (M-Pesa / e-Mola)</div>
            </div>

            <a href="${config.paymentUrl}" target="_blank" rel="noopener noreferrer" class="w-full md:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 via-brand-gold to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 animate-pulse-glow relative-shine">
              <span>COMPRAR AGORA</span>
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
          </div>

          <!-- PAYMENT METHODS BADGE -->
          <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs text-slate-300">
            <span class="font-semibold text-amber-200">Aceitamos:</span>
            <span class="px-2.5 py-1 rounded bg-white/10 border border-white/10 font-bold text-red-300">M-PESA</span>
            <span class="px-2.5 py-1 rounded bg-white/10 border border-white/10 font-bold text-orange-300">e-MOLA</span>
            <span class="px-2.5 py-1 rounded bg-white/10 border border-white/10 font-bold text-blue-300">CARTÃO</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- PROBLEM / PAIN POINTS SECTION -->
  <section class="py-16 px-4 bg-white">
    <div class="max-w-4xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-red-100 text-red-800 text-xs font-bold uppercase tracking-wider">Identificas-te com isto?</span>
        <h2 class="text-2xl md:text-4xl font-extrabold text-slate-900">
          Identificas-te com algum destes problemas nas tuas vendas online?
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          Muitos empreendedores em Moçambique desistem de vender na internet porque tentam os métodos errados.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${painPoints.map(pain => `
          <div class="bg-red-50/50 p-6 rounded-2xl border border-red-200/60 shadow-sm space-y-3 hover:shadow-md transition">
            <div class="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-lg">✕</div>
            <h3 class="font-bold text-slate-900 text-base">${pain.title}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">${pain.description}</p>
          </div>
        `).join('')}
      </div>

      <!-- PROBLEM CONCLUSION BANNER -->
      <div class="bg-amber-50 p-6 rounded-2xl border border-amber-200 text-center space-y-2">
        <h3 class="text-lg font-bold text-amber-900">O problema NÃO é o teu produto nem a falta de clientes!</h3>
        <p class="text-sm text-amber-800">
          O verdadeiro problema é não teres um <strong>MÉTODO PASSO A PASSO DE ATENDIMENTO E CONVERSÃO</strong> testado para o público moçambicano.
        </p>
      </div>
    </div>
  </section>

  <!-- SOLUTION & BENEFITS SECTION -->
  <section class="py-16 px-4 bg-slate-100/80">
    <div class="max-w-5xl mx-auto space-y-12">
      <div class="text-center space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-emerald-100 text-brand-green text-xs font-bold uppercase tracking-wider">A Solução Definitiva</span>
        <h2 class="text-2xl md:text-4xl font-extrabold text-slate-900">
          O Que Vais Aprender no Ebook "${config.productName}"
        </h2>
        <p class="text-slate-600 max-w-2xl mx-auto">
          30 páginas de manual prático dividido em 4 Partes essenciais e 20 capítulos com os "Segredos do Mentor".
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${benefits.map(b => `
          <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-brand-green/40 hover:shadow-md transition space-y-3">
            <div class="flex items-center justify-between">
              <div class="w-10 h-10 rounded-xl bg-emerald-100 text-brand-green flex items-center justify-center font-bold">★</div>
              ${b.highlightTag ? `<span class="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800">${b.highlightTag}</span>` : ''}
            </div>
            <h3 class="font-bold text-slate-900 text-lg">${b.title}</h3>
            <p class="text-xs text-slate-600 leading-relaxed">${b.description}</p>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- 4-PART EBOOK CHAPTER INDEX -->
  <section class="py-16 px-4 bg-slate-900 text-white">
    <div class="max-w-5xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <span class="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase border border-amber-400/30">Manual Completo em 4 Partes</span>
        <h2 class="text-2xl md:text-4xl font-extrabold text-white">Índice dos 20 Capítulos Práticos</h2>
        <p class="text-slate-300 text-sm max-w-xl mx-auto">Combinação perfeita de Vendas Orgânicas + Tráfego Pago + Psicologia de Vendas.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
          <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">PARTE 1 • CAPÍULOS 1-9</span>
          <h3 class="text-lg font-bold text-white">Vendas Orgânicas (Sem Gastar)</h3>
          <p class="text-xs text-slate-300">WhatsApp como negócio, Método dos 3 Toques, Status, Grupos de Facebook/WhatsApp, Instagram e fidelização.</p>
        </div>
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
          <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">PARTE 2 • CAPÍTULOS 10-12</span>
          <h3 class="text-lg font-bold text-white">Os Segredos da Persuasão</h3>
          <p class="text-xs text-slate-300">Os 7 Gatilhos Mentais, Copywriting Dor → Solução e respostas exatas para objeções ("está caro", "vou pensar").</p>
        </div>
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
          <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">PARTE 3 • CAPÍTULOS 13-18</span>
          <h3 class="text-lg font-bold text-white">Tráfego Pago do Zero (Ads)</h3>
          <p class="text-xs text-slate-300">1ª campanha no Facebook/Instagram Ads para Moçambique, segmentação por província, métricas simples e retargeting.</p>
        </div>
        <div class="bg-slate-800 p-6 rounded-2xl border border-slate-700 space-y-3">
          <span class="text-xs font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded">PARTE 4 • CAPÍTULOS 19-20</span>
          <h3 class="text-lg font-bold text-white">Consistência & Plano de 30 Dias</h3>
          <p class="text-xs text-slate-300">Como evitar bloqueios no número e o roteiro diário passo a passo unindo tráfego orgânico e tráfego pago.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- PARA QUEM É SECTION -->
  <section class="py-16 px-4 bg-white">
    <div class="max-w-4xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider">Público-Alvo</span>
        <h2 class="text-2xl md:text-4xl font-extrabold text-slate-900">Para Quem É Este Ebook?</h2>
        <p class="text-slate-600">Desenvolvido sob medida para a realidade do mercado moçambicano.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${targetAudience.map(item => `
          <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-4">
            <div class="w-12 h-12 rounded-xl bg-brand-green text-white flex-shrink-0 flex items-center justify-center font-extrabold text-lg">✓</div>
            <div>
              <h3 class="font-bold text-slate-900 text-base">${item.title}</h3>
              <p class="text-xs text-slate-600 mt-1 leading-relaxed">${item.description}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS / PROVA SOCIAL -->
  <section class="py-16 px-4 bg-emerald-950 text-white">
    <div class="max-w-5xl mx-auto space-y-10">
      <div class="text-center space-y-3">
        <span class="px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">Prova Social em Moçambique</span>
        <h2 class="text-2xl md:text-4xl font-extrabold">O Que Diz Quem Já Está A Vender Todos os Dias</h2>
        <p class="text-emerald-200/80 max-w-xl mx-auto text-sm">Pessoas reais de Maputo, Beira e Nampula que aplicaram o método.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        ${testimonials.map(t => `
          <div class="bg-emerald-900/60 p-6 rounded-2xl border border-emerald-700/50 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center gap-1 text-amber-400">
                ★★★★★
              </div>
              <p class="text-xs text-emerald-100 italic leading-relaxed">"${t.comment}"</p>
            </div>
            
            <div class="pt-4 border-t border-emerald-800/80 flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-amber-400" />
                <div>
                  <h4 class="font-bold text-sm text-white">${t.name}</h4>
                  <p class="text-[11px] text-emerald-300">${t.role} • ${t.location}</p>
                </div>
              </div>
              <span class="text-[10px] bg-amber-400/20 text-amber-300 px-2 py-1 rounded font-semibold">${t.resultBadge}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- OFFER & PRICING SECTION -->
  <section id="comprar" class="py-16 px-4 bg-slate-50">
    <div class="max-w-3xl mx-auto bg-white p-6 md:p-10 rounded-3xl border-2 border-brand-gold shadow-2xl space-y-8 text-center relative overflow-hidden">
      <div class="absolute top-0 right-0 bg-brand-gold text-slate-950 font-extrabold text-xs px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">
        Super Oferta Limitada
      </div>

      <div class="space-y-3">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900">Garanta o Teu Acesso Hoje Mesmo</h2>
        <p class="text-slate-600 text-sm">Recebe o Ebook Completo + 3 Bónus Exclusivos de Oferta!</p>
      </div>

      <!-- BONUSES LIST -->
      <div class="bg-amber-50/60 p-5 rounded-2xl border border-amber-200 text-left space-y-3">
        <h3 class="font-bold text-amber-900 text-sm uppercase tracking-wide">🎁 Bónus Gratuitos Incluídos Hoje:</h3>
        <ul class="space-y-2 text-xs text-slate-700">
          ${bonuses.map(bon => `
            <li class="flex items-start justify-between gap-2 border-b border-amber-200/50 pb-1.5">
              <span><strong>${bon.title}:</strong> ${bon.description}</span>
              <span class="text-amber-800 font-bold text-right flex-shrink-0">Grátis</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <!-- PRICE STACK -->
      <div class="space-y-2">
        <div class="text-sm text-slate-400 line-through">Valor Total Normal: 2.050 MT</div>
        <div class="text-xs text-brand-green font-bold uppercase">Preço Promocional Especial Hoje:</div>
        <div class="text-4xl md:text-5xl font-black text-slate-900">${formatPrice(config.priceMT)}</div>
        <p class="text-xs text-emerald-700 font-medium">Pagamento Único • Sem Taxas Ocultas • Acesso Para Sempre</p>
      </div>

      <!-- BUY BUTTON -->
      <div class="space-y-4">
        <a href="${config.paymentUrl}" target="_blank" rel="noopener noreferrer" class="w-full inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 via-brand-green to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-lg px-8 py-5 rounded-2xl shadow-xl transition duration-300 animate-pulse-glow relative-shine">
          <span>COMPRAR COM ESCALEPAY (M-PESA / e-MOLA)</span>
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
        </a>

        <div class="flex items-center justify-center gap-2 text-xs text-slate-500">
          <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
          <span>Acesso enviado imediatamente para o teu e-mail e WhatsApp</span>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ SECTION -->
  <section class="py-16 px-4 bg-white">
    <div class="max-w-3xl mx-auto space-y-8">
      <div class="text-center space-y-2">
        <h2 class="text-2xl md:text-3xl font-extrabold text-slate-900">Perguntas Frequentes (FAQ)</h2>
        <p class="text-slate-600 text-sm">Esclarece aqui todas as tuas dúvidas antes de comprar.</p>
      </div>

      <div class="space-y-3">
        ${faqs.map(faq => `
          <details class="group bg-slate-50 p-4 rounded-xl border border-slate-200 transition">
            <summary class="font-bold text-slate-900 text-sm md:text-base cursor-pointer flex justify-between items-center list-none">
              <span>${faq.question}</span>
              <span class="transition group-open:rotate-180 text-brand-green">▼</span>
            </summary>
            <p class="text-xs md:text-sm text-slate-600 mt-3 leading-relaxed border-t border-slate-200/60 pt-2">
              ${faq.answer}
            </p>
          </details>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="bg-slate-900 text-slate-400 text-xs py-8 px-4 text-center space-y-3">
    <p class="font-semibold text-slate-300">${config.productName} — ${config.sellerName}</p>
    <p>© ${new Date().getFullYear()} Todos os direitos reservados. Moçambique.</p>
    <p class="text-[10px] text-slate-500">Aviso: Este produto não garante ganhos sem esforço. Os resultados dependem da dedicação e aplicação prática de cada utilizador.</p>
  </footer>

  <!-- MOBILE STICKY BUY BUTTON -->
  <div class="fixed bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl md:hidden z-50 flex items-center justify-between gap-3">
    <div>
      <div class="text-[10px] text-slate-500 line-through">${formatPrice(config.originalPriceMT)}</div>
      <div class="text-lg font-black text-brand-green">${formatPrice(config.priceMT)}</div>
    </div>
    <a href="${config.paymentUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 text-center bg-gradient-to-r from-brand-gold to-amber-600 text-slate-950 font-extrabold text-sm py-3 px-4 rounded-xl shadow-lg">
      COMPRAR AGORA (ESCALEPAY)
    </a>
  </div>

</body>
</html>`;
}
