<script setup lang="ts">
import { SERVICES } from '~/utils/constants'

const { buildLink } = useWhatsApp()
</script>

<template>
  <section id="servicos" class="section services" aria-labelledby="services-title">
    <div class="container">
      <header class="services-head">
        <div>
          <p class="section-label reveal">01 · Serviços</p>
          <h2 id="services-title" class="section-title reveal" style="transition-delay: 0.06s">
            O serviço certo<br />para o <em>seu carro.</em>
          </h2>
        </div>
        <p class="section-sub reveal" style="transition-delay: 0.12s">
          Da lavagem detalhada à proteção PPF: cada serviço é indicado após uma conversa
          sobre o estado e o uso do seu veículo. Toque em um serviço para consultar.
        </p>
      </header>

      <ul class="services-grid">
        <li
          v-for="(service, i) in SERVICES"
          :key="service.id"
          class="service-card reveal"
          :style="{ transitionDelay: `${i * 0.07}s` }"
        >
          <span class="service-number" aria-hidden="true">{{ service.number }}</span>
          <h3 class="service-name">{{ service.name }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <a
            :href="buildLink(service.message)"
            target="_blank"
            rel="noopener"
            class="service-cta"
            :aria-label="`Consultar ${service.name} pelo WhatsApp`"
          >
            <WhatsAppIcon :size="15" />
            <span>Consultar este serviço</span>
            <svg class="service-cta-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.services {
  background: var(--bg);
}

.services-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: clamp(44px, 6vw, 72px);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 18px;
}

.service-card {
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  min-height: 300px;
  padding: 30px 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background:
    radial-gradient(120% 100% at 100% 0%, rgba(201, 169, 98, 0.05) 0%, transparent 55%),
    var(--surface);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease, background-color 0.35s ease;
}

.service-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-gold);
}

/* Destaque: últimos dois serviços (premium) em cards maiores */
.service-card:nth-child(4),
.service-card:nth-child(5) {
  grid-column: span 3;
  background:
    radial-gradient(120% 100% at 100% 0%, rgba(201, 169, 98, 0.1) 0%, transparent 60%),
    var(--surface-2);
}

.service-number {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 15px;
  color: var(--gold);
  margin-bottom: auto;
}

.service-name {
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 600;
  line-height: 1.15;
  margin-top: 34px;
}

.service-description {
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--text-muted);
  margin-top: 12px;
  flex: 1;
}

.service-cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 22px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--whatsapp);
  width: fit-content;
  transition: gap 0.25s ease, color 0.2s ease;
}

.service-cta:hover {
  gap: 12px;
  color: #4be387;
}

.service-cta-arrow {
  transition: transform 0.25s ease;
}

.service-cta:hover .service-cta-arrow {
  transform: translateX(3px);
}

@media (max-width: 1023px) {
  .services-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .service-card,
  .service-card:nth-child(4),
  .service-card:nth-child(5) {
    grid-column: span 3;
  }
}

@media (max-width: 719px) {
  .services-grid {
    gap: 14px;
  }

  .service-card,
  .service-card:nth-child(4),
  .service-card:nth-child(5) {
    grid-column: span 6;
    min-height: 0;
  }

  .service-name {
    margin-top: 24px;
  }
}
</style>
