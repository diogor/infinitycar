export const WHATSAPP_PHONE = '5561991711524'

export const BUSINESS = {
  name: 'Infinity Car Studio',
  tagline: 'Estética automotiva premium',
  city: 'Guará II · Brasília, DF',
  address: 'QE 40, Conjunto D, Lote 46, Loja 02 — Guará II, Brasília/DF',
  addressShort: 'Guará II, Brasília/DF',
  instagram: 'https://www.instagram.com/infinity.carstudio/',
  mapsQuery: 'Infinity Car Studio, QE 40, Guará II, Brasília, DF',
  geo: { lat: -15.8347, lng: -47.9778 },
}

export interface Service {
  id: string
  number: string
  name: string
  description: string
  message: string
}

export const SERVICES: Service[] = [
  {
    id: 'lavagem-detalhada',
    number: '01',
    name: 'Lavagem detalhada',
    description:
      'Limpeza minuciosa da carroceria, rodas, caixas de roda e detalhes externos para realçar a apresentação do seu veículo.',
    message: 'Olá, vim pelo site da Infinity e gostaria de saber mais sobre a lavagem detalhada para o meu carro.',
  },
  {
    id: 'higienizacao',
    number: '02',
    name: 'Higienização interna',
    description:
      'Limpeza profunda do interior, com atenção a bancos, carpetes, painel e todas as superfícies de uso diário.',
    message: 'Olá, vim pelo site da Infinity e gostaria de saber mais sobre a higienização interna do meu carro.',
  },
  {
    id: 'polimento-tecnico',
    number: '03',
    name: 'Polimento técnico',
    description:
      'Tratamento da pintura para remover riscos superficiais, hologramas e devolver o brilho original, conforme avaliação do veículo.',
    message: 'Olá, vim pelo site da Infinity e gostaria de consultar o polimento técnico para o meu carro.',
  },
  {
    id: 'vitrificacao',
    number: '04',
    name: 'Vitrificação de pintura',
    description:
      'Camada de proteção cerâmica aplicada sobre a pintura para preservar o acabamento e facilitar a manutenção por muito mais tempo.',
    message: 'Olá, vim pelo site da Infinity e gostaria de saber mais sobre a vitrificação de pintura.',
  },
  {
    id: 'protecao-ppf',
    number: '05',
    name: 'Proteção PPF',
    description:
      'Película transparente de alta performance para proteger as áreas mais expostas da carroceria contra atritos, pedras e pequenos impactos.',
    message: 'Olá, vim pelo site da Infinity e gostaria de saber mais sobre a proteção PPF para o meu carro.',
  },
]

export interface Work {
  image: string
  video: string
  label: string
  car: string
  alt: string
}

export const WORKS: Work[] = [
  {
    image: '/assets/jaguar-ipace.jpg',
    video: '/assets/jaguar-ipace.web.mp4',
    label: 'Vitrificação',
    car: 'Jaguar I-Pace',
    alt: 'Jaguar I-Pace no estúdio após vitrificação',
  },
  {
    image: '/assets/porsche-macan.jpg',
    video: '/assets/porsche-macan.web.mp4',
    label: 'Portfólio',
    car: 'Porsche Macan GTS',
    alt: 'Porsche Macan GTS no estúdio',
  },
  {
    image: '/assets/bmw-m2.jpg',
    video: '/assets/bmw-m2.web.mp4',
    label: 'Lavagem detalhada',
    car: 'BMW M2',
    alt: 'BMW M2 após lavagem detalhada',
  },
  {
    image: '/assets/mercedes-glc.jpg',
    video: '/assets/mercedes-glc.web.mp4',
    label: 'Lavagem técnica',
    car: 'Mercedes GLC 300',
    alt: 'Mercedes GLC 300 no estúdio',
  },
  {
    image: '/assets/civic-si.jpg',
    video: '/assets/civic-si.web.mp4',
    label: 'Polimento',
    car: 'Civic Si',
    alt: 'Civic Si vermelho após polimento técnico',
  },
]

// ATENÇÃO: depoimentos ilustrativos — substituir por avaliações reais
// (Google Meu Negócio / Instagram) antes da publicação final.
export interface Testimonial {
  quote: string
  author: string
  car: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'O nível de detalhe é impressionante. O carro saiu do estúdio melhor do que quando saiu da concessionária.',
    author: 'Cliente Infinity',
    car: 'Porsche Macan GTS',
  },
  {
    quote:
      'Atendimento impecável do início ao fim. Explicaram cada etapa do polimento e o resultado superou qualquer expectativa.',
    author: 'Cliente Infinity',
    car: 'BMW M2',
  },
  {
    quote:
      'Fiz a vitrificação e a diferença no brilho e na facilidade de lavar o carro é absurda. Recomendo de olhos fechados.',
    author: 'Cliente Infinity',
    car: 'Jaguar I-Pace',
  },
]

export interface Faq {
  question: string
  answer: string
}

export const FAQS: Faq[] = [
  {
    question: 'Onde fica a Infinity Car Studio?',
    answer:
      'Na QE 40, Conjunto D, Lote 46, Loja 02 — Guará II, Brasília/DF. Estúdio de fácil acesso, com estrutura preparada para receber o seu carro com total segurança.',
  },
  {
    question: 'Quais serviços a Infinity oferece?',
    answer:
      'Lavagem detalhada, higienização interna, polimento técnico, vitrificação de pintura e proteção PPF. Cada serviço é indicado após uma conversa sobre o estado e o uso do seu veículo.',
  },
  {
    question: 'Como consulto preços e prazos?',
    answer:
      'Os valores variam conforme o porte do veículo e o serviço escolhido. Fale com a equipe pelo WhatsApp para receber uma avaliação personalizada, sem compromisso.',
  },
  {
    question: 'Como solicito um horário?',
    answer:
      'Basta chamar no WhatsApp. A equipe confirma a disponibilidade e agenda o melhor horário para você — rápido e sem burocracia.',
  },
]
