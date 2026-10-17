<script setup lang="ts">
import { BUSINESS } from '~/utils/constants'

const { defaultLink } = useWhatsApp()

useSeoMeta({
  title: 'Infinity Car Studio — Estética Automotiva Premium no Guará II, Brasília',
  description:
    'Lavagem detalhada, higienização, polimento técnico, vitrificação e proteção PPF no Guará II, Brasília/DF. Agende pelo WhatsApp e devolva ao seu carro o cuidado que ele merece.',
  ogTitle: 'Infinity Car Studio — O cuidado aparece em cada detalhe',
  ogDescription:
    'Estética automotiva premium no Guará II, Brasília. Lavagem detalhada, polimento, vitrificação e PPF. Agende pelo WhatsApp.',
  ogImage: 'https://infinitycarstudio.com.br/assets/precisao-polimento-4k.webp',
  ogType: 'website',
  ogLocale: 'pt_BR',
  twitterCard: 'summary_large_image',
  robots: 'index, follow',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AutoWash',
        name: BUSINESS.name,
        description: 'Estética automotiva premium: lavagem detalhada, higienização, polimento técnico, vitrificação e proteção PPF.',
        url: 'https://infinitycarstudio.com.br',
        telephone: '+55-61-99171-1524',
        image: 'https://infinitycarstudio.com.br/assets/precisao-polimento-4k.webp',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'QE 40, Conjunto D, Lote 46, Loja 02',
          addressLocality: 'Guará II',
          addressRegion: 'DF',
          addressCountry: 'BR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: BUSINESS.geo.lat,
          longitude: BUSINESS.geo.lng,
        },
        sameAs: [BUSINESS.instagram, defaultLink],
      }),
    },
  ],
})
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FaqSection />
      <ContactSection />
    </main>
    <AppFooter />
    <WhatsAppFloat />
  </div>
</template>
