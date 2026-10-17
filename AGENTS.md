# Infinity Car Studio — Landing Page

Landing page de conversão para WhatsApp da **Infinity Car Studio**, estética automotiva premium no Guará II, Brasília/DF.

## Stack

- **Nuxt 4** (Vue 3 + TypeScript), modo SSG (`nuxt generate`)
- CSS puro com design tokens em `app/assets/css/main.css` (sem framework de UI)
- Fontes: Playfair Display (títulos) + Inter (corpo), via Google Fonts

## Comandos

```bash
npm install        # instala dependências (roda nuxt prepare no postinstall)
npm run dev        # ambiente de desenvolvimento
npm run generate   # build estático em .output/public
npm run preview    # preview do build
```

Deploy: publicar o conteúdo de `.output/public` em qualquer hosting estático (Vercel, Netlify, Cloudflare Pages).

## Estrutura

```
app/
├── assets/css/main.css     # tokens de design, botões, utilitários, scroll-reveal
├── components/             # um componente por seção da página
│   ├── AppHeader.vue       # header fixo + menu mobile + CTA
│   ├── HeroSection.vue
│   ├── TrustBar.vue
│   ├── ServicesSection.vue # 5 serviços, CTA contextual por card
│   ├── GallerySection.vue  # carrossel com vídeos hover-play
│   ├── TestimonialsSection.vue
│   ├── HowItWorksSection.vue
│   ├── FaqSection.vue      # accordion
│   ├── ContactSection.vue  # CTA final + Google Maps embed
│   ├── AppFooter.vue
│   ├── WhatsAppFloat.vue   # botão flutuante (aparece após scroll)
│   └── WhatsAppIcon.vue
├── composables/useWhatsApp.ts  # gera links wa.me com mensagens pré-preenchidas
├── pages/index.vue         # SEO meta + JSON-LD LocalBusiness
├── plugins/reveal.client.ts    # animação scroll-reveal (IntersectionObserver)
└── utils/constants.ts      # ÚNICA fonte de verdade do conteúdo
public/assets/              # imagens e vídeos (originais do site anterior)
```

## Convenções importantes

- **Conteúdo centralizado**: telefone, endereço, serviços, mensagens de WhatsApp, depoimentos e FAQ ficam em `app/utils/constants.ts`. Nunca hardcodar esses dados nos componentes.
- **WhatsApp**: sempre usar `useWhatsApp().buildLink(mensagem)` — nunca montar URL `wa.me` manualmente. Cada CTA tem mensagem contextual ao serviço/seção.
- **Tema dark premium**: usar os tokens CSS (`--bg`, `--gold`, `--whatsapp`, etc.). Verde WhatsApp (`--whatsapp`) é reservado a CTAs de contato; dourado (`--gold`) para acentos da marca.
- **Design responsivo mobile-first**: breakpoints 460 / 719 / 820 / 900 / 1023px.
- **Animações**: classe `.reveal` nos elementos animados; o plugin adiciona `.is-visible` no scroll. Respeitar `prefers-reduced-motion`.

## Pendências conhecidas

- **Depoimentos**: os textos em `TESTIMONIALS` (constants.ts) são placeholders — substituir por avaliações reais (Google/Instagram) antes de publicar.
- **Coordenadas do mapa**: `geo` em constants.ts é aproximado (centro do Guará II); confirmar lat/lng exatos do estúdio para o JSON-LD.
