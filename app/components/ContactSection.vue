<script setup lang="ts">
import { BUSINESS } from '~/utils/constants'

const { defaultLink } = useWhatsApp()

const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(BUSINESS.mapsQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`
const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.mapsQuery)}`
</script>

<template>
  <section id="contato" class="section contact" aria-labelledby="contact-title">
    <div class="container">
      <div class="contact-card reveal">
        <div class="contact-info">
          <p class="section-label">06 · Contato</p>
          <h2 id="contact-title" class="section-title">
            Seu próximo cuidado<br /><em>começa aqui.</em>
          </h2>
          <p class="section-sub">
            Chame no WhatsApp e receba atendimento direto da equipe — avaliação,
            valores e horários confirmados na hora.
          </p>

          <a :href="defaultLink" target="_blank" rel="noopener" class="btn btn-whatsapp contact-cta">
            <WhatsAppIcon :size="19" />
            <span>Falar com a Infinity</span>
          </a>

          <address class="contact-address">
            <div class="contact-address-row">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="10" r="2.6" />
              </svg>
              <span>{{ BUSINESS.address }}</span>
            </div>
            <a :href="mapsLink" target="_blank" rel="noopener" class="contact-maps-link">
              <span>Como chegar</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </address>
        </div>

        <div class="contact-map">
          <iframe
            :src="mapsEmbedUrl"
            title="Mapa com a localização da Infinity Car Studio no Guará II, Brasília"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: var(--bg-soft);
  border-top: 1px solid var(--border);
}

.contact-card {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  border: 1px solid var(--border-gold);
  border-radius: calc(var(--radius) + 6px);
  overflow: hidden;
  background:
    radial-gradient(90% 120% at 0% 0%, rgba(201, 169, 98, 0.09) 0%, transparent 55%),
    var(--surface);
}

.contact-info {
  padding: clamp(32px, 5vw, 60px);
}

.contact-cta {
  margin-top: 34px;
}

.contact-address {
  margin-top: 34px;
  padding-top: 26px;
  border-top: 1px solid var(--border);
  font-style: normal;
}

.contact-address-row {
  display: flex;
  align-items: flex-start;
  gap: 11px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--text-muted);
}

.contact-address-row svg {
  flex: none;
  margin-top: 3px;
  color: var(--gold);
}

.contact-maps-link {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  margin-top: 12px;
  margin-left: 28px;
  font-size: 13.5px;
  font-weight: 600;
  color: var(--gold-soft);
  transition: color 0.2s ease;
}

.contact-maps-link:hover {
  color: var(--gold);
}

.contact-map {
  position: relative;
  min-height: 380px;
}

.contact-map iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
  filter: grayscale(1) invert(0.92) contrast(0.9) brightness(0.9);
}

@media (max-width: 900px) {
  .contact-card {
    grid-template-columns: 1fr;
  }

  .contact-map {
    min-height: 300px;
    order: -1;
  }
}
</style>
