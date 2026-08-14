import { PageConfig, BenefitItem, PainPointItem, TargetAudienceItem, TestimonialItem, FAQItem, BonusItem, LiveSaleItem, EbookPart } from '../types';

export const defaultConfig: PageConfig = {
  productName: "Vende Todos os Dias",
  tagline: "O Guia Completo de Vendas pelo WhatsApp e Redes Sociais (Edição Completa)",
  priceMT: 250,
  originalPriceMT: 500,
  paymentUrl: "https://checkout.escalepay.com/3177120",
  whatsappNumber: "258840000000",
  whatsappSupportMsg: "Olá! Tenho dúvidas sobre o Ebook Vende Todos os Dias (Edição Completa).",
  sellerName: "Digital Vendas Moçambique"
};

export const ebookParts: EbookPart[] = [
  {
    id: "part-1",
    partNumber: 1,
    title: "Vendas Orgânicas (Sem Gastar Dinheiro)",
    subtitle: "Aprende a vender todos os dias usando apenas o teu telemóvel e o poder das redes sociais gratuitas.",
    chaptersRange: "Capítulos 1 ao 9",
    iconName: "Smartphone",
    chapters: [
      {
        chapterNumber: "Cap. 1 a 3",
        title: "Transformar o WhatsApp num Negócio Vendedor",
        description: "Como configurar um perfil comercial irresistível, organizar o catálogo e criar links diretos.",
        mentorSecret: "Um perfil amador afasta 80% dos clientes antes mesmo de saberem o preço."
      },
      {
        chapterNumber: "Cap. 4 e 5",
        title: "O Método dos 3 Toques & Status que Vendem Sozinhos",
        description: "Estrutura infalível: Dar valor → Criar conexão → Só depois oferecer. Sequência exata de Status diários.",
        mentorSecret: "Nunca vendas na primeira mensagem. O segredo está na conexão rápida e no toque 2."
      },
      {
        chapterNumber: "Cap. 6 e 7",
        title: "Estratégia de Grupos de WhatsApp & Facebook Orgânico",
        description: "Como usar grupos moçambicanos para atrair compradores qualificados sem fazer SPAM.",
        mentorSecret: "Publicar fotos simples com texto provocativo nos grupos gera 5x mais conversas privadas."
      },
      {
        chapterNumber: "Cap. 8 e 9",
        title: "Atração no Instagram/TikTok, Fecho no Chat & Fidelização",
        description: "Atrair tráfego das redes para a conversa privada, calendário de conteúdo e fazer o cliente comprar sempre.",
        mentorSecret: "O cliente fiel em Moçambique é aquele que recebe atenção pós-venda pelo WhatsApp."
      }
    ]
  },
  {
    id: "part-2",
    partNumber: 2,
    title: "Os Segredos da Persuasão & Psicologia de Vendas",
    subtitle: "Domina a mente do comprador com gatilhos mentais e copywriting adaptados à cultura moçambicana.",
    chaptersRange: "Capítulos 10 ao 12",
    iconName: "Sparkles",
    chapters: [
      {
        chapterNumber: "Cap. 10",
        title: "Os 7 Gatilhos Mentais que Decidem uma Compra",
        description: "Reciprocidade, Prova Social, Escassez, Autoridade, Compromisso, Afeição e Ancoragem aplicados na prática.",
        mentorSecret: "A prova social com comprovativo de pagamento M-Pesa/e-Mola elimina a desconfiança instantaneamente."
      },
      {
        chapterNumber: "Cap. 11",
        title: "Copywriting Avançado: Dor → Amplificação → Solução",
        description: "Como escrever textos que tocam na ferida do cliente, criam urgência e usam storytelling envolvente.",
        mentorSecret: "As pessoas não compram produtos; compram a transformação e a solução rápida para a sua dor."
      },
      {
        chapterNumber: "Cap. 12",
        title: "Guia Completo para Responder a Objeções",
        description: "Scripts exatos para desarmar respostas como 'está caro', 'vou pensar', 'depois te aviso' e 'não tenho dinheiro'.",
        mentorSecret: "Quando o cliente diz 'está caro', ele está a dizer 'ainda não entendi por que vale a pena'."
      }
    ]
  },
  {
    id: "part-3",
    partNumber: 3,
    title: "Tráfego Pago do Zero (Facebook & Instagram Ads)",
    subtitle: "Aprende a investir pouco dinheiro para multiplicar o teu alcance e receber centenas de mensagens no WhatsApp.",
    chaptersRange: "Capítulos 13 ao 18",
    iconName: "Target",
    chapters: [
      {
        chapterNumber: "Cap. 13 e 14",
        title: "Quando Investir em Anúncios & Tua 1ª Campanha Paga",
        description: "A transição do orgânico para o pago. Passo a passo para criar a primeira campanha focada em mensagens no WhatsApp.",
        mentorSecret: "Começa com orçamentos pequenos e foca apenas em campanhas de mensagens diretas para o teu número."
      },
      {
        chapterNumber: "Cap. 15 e 16",
        title: "Segmentação de Público em Moçambique & Métricas Descomplicadas",
        description: "Como encontrar o comprador ideal por província (Maputo, Beira, Nampula) e entender CPM, CTR, CPC e ROAS sem dor de cabeça.",
        mentorSecret: "Segmentar por interesses específicos em Moçambique reduz drasticamente o custo por mensagem."
      },
      {
        chapterNumber: "Cap. 17 e 18",
        title: "Retargeting & Os Erros que Mais Queimam Dinheiro",
        description: "Reimpactar pessoas que já viram o teu produto e evitar os 5 maiores erros de quem começa em tráfego pago.",
        mentorSecret: "O retargeting é onde está o lucro real: lembra quem hesitou de que a oferta vai terminar."
      }
    ]
  },
  {
    id: "part-4",
    partNumber: 4,
    title: "Consistência, Escala & Plano de Ação de 30 Dias",
    subtitle: "A fundação para construir um negócio digital duradouro e lucrativo em Moçambique.",
    chaptersRange: "Capítulos 19 ao 20",
    iconName: "TrendingUp",
    chapters: [
      {
        chapterNumber: "Cap. 19",
        title: "Erros Fatais a Evitar na Venda Online",
        description: "Como proteger o teu número de WhatsApp contra bloqueios, evitar promessas falsas e manter a reputação limpa.",
        mentorSecret: "A consistência diária vence sempre qualquer pico esporádico de vendas."
      },
      {
        chapterNumber: "Cap. 20",
        title: "Plano de Ação Prático de 30 Dias",
        description: "Roteiro diário que combina Tráfego Orgânico + Tráfego Pago para gerares faturamento todos os dias do mês.",
        mentorSecret: "Segue o plano de 30 dias sem pular etapas e verás o teu WhatsApp transformar-se numa máquina de vendas."
      }
    ]
  }
];

export const painPoints: PainPointItem[] = [
  {
    id: "pain-1",
    title: "Postas produtos nos Status do WhatsApp e só recebes visualizações sem vendas?",
    description: "Passas o dia a publicar imagens no Status e grupos de Facebook, gastas megabytes valiosos, mas os clientes só perguntam 'preço?' e desaparecem sem comprar."
  },
  {
    id: "pain-2",
    title: "Não sabes como persuadir o cliente sem parecer chato ou desesperado?",
    description: "Quando o cliente diz 'está caro' ou 'vou pensar', ficas sem saber o que responder e perdes vendas diárias para concorrentes que sabem usar gatilhos mentais."
  },
  {
    id: "pain-3",
    title: "Sentes medo de gastar dinheiro em anúncios pagos (Facebook/Instagram Ads)?",
    description: "Achas que anúncios pagos são complicados ou que vais queimar o teu dinheiro. O ebook ensina tanto a vender sem gastar 1 centavo como a investir do jeito certo."
  }
];

export const benefits: BenefitItem[] = [
  {
    id: "ben-1",
    icon: "Sparkles",
    title: "Método dos 3 Toques (Orgânico)",
    description: "Estratégia comprovada em 3 passos: Dar valor → Criar conexão → Só depois oferecer. Converte contactos frios em compradores ativos.",
    highlightTag: "Capítulos 1 a 9"
  },
  {
    id: "ben-2",
    icon: "Flame",
    title: "Os 7 Gatilhos Mentais da Persuasão",
    description: "Domina a Reciprocidade, Prova Social, Escassez, Autoridade, Compromisso, Afeição e Ancoragem para fechar vendas no chat privado.",
    highlightTag: "Capítulos 10 a 12"
  },
  {
    id: "ben-3",
    icon: "Target",
    title: "Tráfego Pago Descomplicado (Ads)",
    description: "Aprende a criar anúncios no Facebook e Instagram segmentados para Moçambique (Maputo, Beira, Nampula) sem queimar capital.",
    highlightTag: "Capítulos 13 a 18"
  },
  {
    id: "ben-4",
    icon: "CheckSquare",
    title: "Plano de Ação Prático de 30 Dias",
    description: "Roteiro diário passo a passo unindo vendas orgânicas e anúncios pagos para manter fluxo de caixa positivo todos os dias.",
    highlightTag: "Capítulos 19 e 20"
  },
  {
    id: "ben-5",
    icon: "FileText",
    title: "Caixas 'Segredo do Mentor'",
    description: "Dicas de ouro destacadas ao longo do manual com estratégias reais para M-Pesa, e-Mola, EscalePay e grupos de WhatsApp locais.",
    highlightTag: "Exclusivo Moçambique"
  }
];

export const targetAudience: TargetAudienceItem[] = [
  {
    id: "aud-1",
    title: "Revendedores e Comerciantes",
    description: "Para quem vende roupas, sapatos, cosméticos, telemóveis ou produtos físicos em Moçambique e quer esgotar o stock rápido.",
    icon: "ShoppingBag"
  },
  {
    id: "aud-2",
    title: "Prestadores de Serviços",
    description: "Cabeleireiros, mecânicos, fotógrafos, explicadores, eletricistas e consultores que querem agenda cheia todas as semanas.",
    icon: "Briefcase"
  },
  {
    id: "aud-3",
    title: "Iniciantes do Zero sem Capital",
    description: "Quem quer começar a ganhar dinheiro na internet vendendo produtos digitais ou serviços com investimento quase nulo no início.",
    icon: "TrendingUp"
  },
  {
    id: "aud-4",
    title: "Negócios Locais em Moçambique",
    description: "Empresas e empreendedores em Maputo, Matola, Beira, Nampula, Chimoio e restante país que querem escalar vendas pelo WhatsApp.",
    icon: "Store"
  }
];

export const testimonials: TestimonialItem[] = [
  {
    id: "test-1",
    name: "Esperança C.",
    location: "Maputo",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    role: "Revendedora de Roupas",
    rating: 5,
    comment: "Eu postava fotos das roupas no Status do WhatsApp e ninguém comprava. No primeiro dia que apliquei o Script dos 3 Toques do capítulo 4, consegui fechar 4 vendas de uma vez! O livro vale 10x o preço de 250 MT.",
    resultBadge: "Fez 4 vendas no 1º dia"
  },
  {
    id: "test-2",
    name: "Afonso M.",
    location: "Beira",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    role: "Técnico de Informática",
    rating: 5,
    comment: "Eu tinha medo de fazer anúncios pagos no Facebook. A Parte 3 explicou a segmentação para a Beira de forma tão simples que com apenas 100 MT por dia comecei a receber mais de 15 mensagens por dia no WhatsApp!",
    resultBadge: "Campanha paga a gerar 15+ clientes/dia"
  },
  {
    id: "test-3",
    name: "Sheila N.",
    location: "Nampula",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    role: "Vendedora de Cosméticos",
    rating: 5,
    comment: "O capítulo 12 sobre como responder a objeções mudou tudo. Quando o cliente dizia 'está caro', eu ficava calada. Agora uso o script de quebra de objeção do ebook e fecho na hora com M-Pesa!",
    resultBadge: "Triplicou conversões com M-Pesa"
  }
];

export const bonuses: BonusItem[] = [
  {
    id: "bon-1",
    title: "Calendário de Conteúdo de 30 Dias",
    valValueMT: 450,
    description: "Ideias práticas para Facebook, Instagram e Estados do WhatsApp.",
    badge: "BÓNUS #1"
  },
  {
    id: "bon-2",
    title: "Pack de Scripts de Venda",
    valValueMT: 350,
    description: "Mensagens prontas para responder, apresentar preço, lidar com objecções e fazer follow-up.",
    badge: "BÓNUS #2"
  },
  {
    id: "bon-3",
    title: "Checklist do WhatsApp Business",
    valValueMT: 400,
    description: "Lista para configurar perfil, catálogo, respostas rápidas, etiquetas e Estados.",
    badge: "BÓNUS #3"
  },
  {
    id: "bon-4",
    title: "Folha de Acompanhamento de Vendas",
    valValueMT: 200,
    description: "Ficheiro Excel para registar contactos, conversas, follow-ups, pagamentos e resultados.",
    badge: "BÓNUS #4"
  }
];

export const faqs: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como recebo o ebook depois de pagar?",
    answer: "Assim que o teu pagamento for confirmado pela EscalePay (M-Pesa, e-Mola ou Cartão), recebes imediatamente o acesso para descarregar o Ebook completo (PDF com 30 páginas) no teu e-mail e WhatsApp. O processo é 100% automático!"
  },
  {
    id: "faq-2",
    question: "O que tem na Edição Completa dos 20 Capítulos?",
    answer: "A Edição Completa está dividida em 4 Partes essenciais: 1) Vendas Orgânicas sem gastar dinheiro; 2) Os Segredos da Persuasão e 7 Gatilhos Mentais; 3) Tráfego Pago do Zero no Facebook/Instagram Ads; 4) Consistência, Escala e o Plano de Ação de 30 Dias."
  },
  {
    id: "faq-3",
    question: "Preciso de gastar dinheiro em anúncios pagos para começar?",
    answer: "Não! A Parte 1 ensina o Método dos 3 Toques e vendas 100% orgânicas (gratuitas). Podes começar a faturar sem gastar um único Metical em publicidade. Quando quiseres escalar, a Parte 3 ensina como fazer anúncios pagos com orçamentos muito baixos."
  },
  {
    id: "faq-4",
    question: "Funciona em qualquer cidade ou província de Moçambique?",
    answer: "Sim! O livro foi escrito especialmente para o contexto moçambicano, considerando o comportamento dos compradores em Maputo, Matola, Beira, Nampula, Tete, Pemba, Chimoio, Quelimane e restante país, adaptado ao uso de M-Pesa e e-Mola."
  },
  {
    id: "faq-5",
    question: "Nunca vendi nada na internet, vou conseguir acompanhar?",
    answer: "Com certeza! O tom é de mentor: direto, prático e sem termos difíceis. Além disso, terás caixas 'Segredo do Mentor' com dicas práticas e scripts prontos para copiar e colar diretamente no teu WhatsApp."
  }
];

export const sampleSalesScript = {
  title: "Script Exemplo: Resposta Quando o Cliente Diz 'Está Caro' (Gatilho da Ancoragem & Valor)",
  steps: [
    {
      label: "Mensagem do Cliente",
      text: "Achei o preço um bocado caro..."
    },
    {
      label: "Resposta Errada (Que Faz Perder o Cliente)",
      text: "Pois, mas a qualidade custa caro. Não posso baixar."
    },
    {
      label: "Resposta do Mentor (Com Ancoragem & Objeção Quebrada)",
      text: "Compreendo perfeitamente, [Nome]! Quando olhamos apenas para o valor inicial parece um investimento. Mas pensa assim: se este produto te poupar [ou te fizer ganhar] [Benefício/Meticais] já nas primeiras semanas, ele paga-se a si próprio. Além disso, ofereço [Garantia/Bónus]. Quer que te envie por M-Pesa ou e-Mola para aproveitares a promoção de hoje?"
    }
  ],
  tip: "No ebook completo (Capítulo 12 + Bónus 1), recebes mais de 25 scripts para todas as objeções de vendas!"
};

export const recentSales: LiveSaleItem[] = [
  { name: "Nelson M.", city: "Maputo", timeAgo: "há 2 minutos" },
  { name: "Marta S.", city: "Matola", timeAgo: "há 5 minutos" },
  { name: "Joaquim B.", city: "Beira", timeAgo: "há 12 minutos" },
  { name: "Celeste F.", city: "Nampula", timeAgo: "há 18 minutos" },
  { name: "Elias T.", city: "Chimoio", timeAgo: "há 21 minutos" },
  { name: "Sandra P.", city: "Quelimane", timeAgo: "há 28 minutos" },
  { name: "Filipe C.", city: "Tete", timeAgo: "há 34 minutos" },
  { name: "Amélia D.", city: "Maputo", timeAgo: "há 42 minutos" },
  { name: "João N.", city: "Pemba", timeAgo: "há 47 minutos" },
  { name: "Rita A.", city: "Xai-Xai", timeAgo: "há 55 minutos" },
  { name: "Carlos V.", city: "Matola", timeAgo: "há 1 hora" },
  { name: "Inês M.", city: "Lichinga", timeAgo: "há 1 hora" },
  { name: "Hélder J.", city: "Inhambane", timeAgo: "há 2 horas" },
  { name: "Glória R.", city: "Beira", timeAgo: "há 2 horas" }
];
