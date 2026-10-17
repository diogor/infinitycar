<script setup lang="ts">
const { defaultLink } = useWhatsApp()
</script>

<template>
  <section id="inicio" class="hero" aria-labelledby="hero-title">
    <div class="hero-media" aria-hidden="true">
      <img
        src="/assets/precisao-polimento-4k.webp"
        alt=""
        class="hero-bg"
        fetchpriority="high"
      />
      <div class="hero-overlay" />
      <div class="hero-grain" />
    </div>

    <div class="container hero-content">
      <p class="hero-eyebrow reveal">Estética automotiva · Guará II, Brasília</p>

      <h1 id="hero-title" class="hero-title reveal" style="transition-delay: 0.08s">
        O cuidado aparece<br /><em>em cada detalhe.</em>
      </h1>

      <p class="hero-lede reveal" style="transition-delay: 0.16s">
        Lavagem detalhada, higienização, polimento técnico, vitrificação e proteção PPF.
        Seu carro com o padrão de acabamento que ele merece — a uma mensagem de distância.
      </p>

      <div class="hero-actions reveal" style="transition-delay: 0.24s">
        <a :href="defaultLink" target="_blank" rel="noopener" class="btn btn-whatsapp">
          <WhatsAppIcon :size="18" />
          <span>Agendar pelo WhatsApp</span>
        </a>
        <a href="#servicos" class="btn btn-outline">
          <span>Ver serviços</span>
        </a>
      </div>
    </div>

    <a href="#servicos" class="hero-scroll" aria-label="Rolar para os serviços">
      <span class="hero-scroll-text">Role para explorar</span>
      <span class="hero-scroll-line" />
    </a>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: var(--header-h);
  overflow: hidden;
}

.hero-media {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  transform: scale(1.04);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(10, 10, 11, 0.94) 0%, rgba(10, 10, 11, 0.72) 46%, rgba(10, 10, 11, 0.38) 100%),
    linear-gradient(0deg, var(--bg) 0%, transparent 30%);
}

.hero-grain {
  position: absolute;
  inset: 0;
  opacity: 0.5;
  background-image: radial-gradient(rgba(255, 255, 255, 0.045) 1px, transparent 1px);
  background-size: 3px 3px;
  mix-blend-mode: overlay;
  pointer-events: none;
}

.hero-content {
  padding-block: 80px 120px;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--gold);
  border: 1px solid var(--border-gold);
  border-radius: 999px;
  padding: 9px 18px;
  background: rgba(201, 169, 98, 0.07);
  backdrop-filter: blur(6px);
  margin-bottom: 30px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 7.2vw, 84px);
  font-weight: 600;
  line-height: 1.05;
  letter-spacing: -0.015em;
  max-width: 780px;
}

.hero-title em {
  font-style: italic;
  color: var(--gold-soft);
}

.hero-lede {
  margin-top: 26px;
  font-size: clamp(15.5px, 1.9vw, 18.5px);
  line-height: 1.65;
  color: var(--text-muted);
  max-width: 540px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 40px;
}

.hero-scroll {
  position: absolute;
  bottom: 34px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--text-muted);
}

.hero-scroll-text {
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.26em;
  text-transform: uppercase;
}

.hero-scroll-line {
  width: 1px;
  height: 44px;
  background: linear-gradient(to bottom, var(--gold), transparent);
  position: relative;
  overflow: hidden;
}

.hero-scroll-line::after {
  content: '';
  position: absolute;
  top: -50%;
  left: 0;
  width: 100%;
  height: 50%;
  background: var(--gold-soft);
  animation: scroll-hint 2.2s cubic-bezier(0.65, 0, 0.35, 1) infinite;
}

@keyframes scroll-hint {
  to {
    top: 110%;
  }
}

@media (max-width: 719px) {
  .hero-content {
    padding-block: 60px 140px;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .hero-scroll {
    display: none;
  }
}
</style>
