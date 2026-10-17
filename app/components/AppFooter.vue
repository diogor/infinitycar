<script setup lang="ts">
import { BUSINESS } from '~/utils/constants'

const { defaultLink } = useWhatsApp()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <a href="#inicio" class="footer-logo" aria-label="Infinity Car Studio — voltar ao início">
          <img src="/assets/logo-instagram.jpg" alt="Logo da Infinity Car Studio" width="46" height="46" />
          <span>
            Infinity <span class="footer-logo-sub">Car Studio</span>
          </span>
        </a>
        <p class="footer-tagline">O cuidado aparece em cada detalhe.</p>
      </div>

      <div class="footer-col">
        <p class="footer-col-title">Estúdio</p>
        <p class="footer-text">{{ BUSINESS.address }}</p>
        <a :href="defaultLink" target="_blank" rel="noopener" class="footer-link">WhatsApp: (61) 99171-1524</a>
      </div>

      <div class="footer-col">
        <p class="footer-col-title">Siga a Infinity</p>
        <a :href="BUSINESS.instagram" target="_blank" rel="noopener" class="footer-link footer-instagram">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
          </svg>
          <span>@infinity.carstudio</span>
        </a>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© {{ year }} Infinity Car Studio · Guará II, Brasília/DF</p>
      <p class="footer-note">Atendimento, valores e horários sujeitos à confirmação direta com a Infinity.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  background: var(--bg);
}

.footer-inner {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 40px;
  padding-block: 56px 44px;
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: 13px;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.footer-logo img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-gold);
}

.footer-logo-sub {
  display: block;
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: var(--gold);
}

.footer-tagline {
  margin-top: 16px;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 15.5px;
  color: var(--text-muted);
}

.footer-col-title {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
}

.footer-text {
  font-size: 14px;
  line-height: 1.7;
  color: var(--text-muted);
  max-width: 260px;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 10px;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--gold-soft);
}

.footer-instagram {
  margin-top: 0;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  padding-block: 22px;
  border-top: 1px solid var(--border);
  font-size: 12.5px;
  color: var(--text-muted);
}

@media (max-width: 820px) {
  .footer-inner {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
