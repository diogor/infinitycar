<script setup lang="ts">
import { FAQS } from '~/utils/constants'

const { buildLink } = useWhatsApp()

const openIndex = ref<number | null>(0)

const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section id="duvidas" class="section faq" aria-labelledby="faq-title">
    <div class="container faq-grid">
      <div class="faq-intro">
        <p class="section-label reveal">05 · Dúvidas</p>
        <h2 id="faq-title" class="section-title reveal" style="transition-delay: 0.06s">
          Dúvidas antes <em>de agendar?</em>
        </h2>
        <p class="section-sub reveal" style="transition-delay: 0.12s">
          Reunimos as perguntas mais frequentes. Se a sua não estiver aqui,
          a equipe responde direto no WhatsApp.
        </p>
        <div class="reveal" style="transition-delay: 0.18s">
          <a
            :href="buildLink('Olá, gostaria de consultar os serviços e um horário na Infinity Car Studio.')"
            target="_blank"
            rel="noopener"
            class="btn btn-whatsapp faq-cta"
          >
            <WhatsAppIcon :size="17" />
            <span>Consultar a equipe</span>
          </a>
        </div>
      </div>

      <div class="faq-list reveal" style="transition-delay: 0.1s">
        <div
          v-for="(item, i) in FAQS"
          :key="item.question"
          class="faq-item"
          :class="{ 'faq-item--open': openIndex === i }"
        >
          <button
            class="faq-question"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-answer-${i}`"
            @click="toggle(i)"
          >
            <span>{{ item.question }}</span>
            <svg class="faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="m6 9 6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <div
            :id="`faq-answer-${i}`"
            class="faq-answer"
            role="region"
            :aria-hidden="openIndex !== i"
          >
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  background: var(--bg);
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: clamp(44px, 7vw, 96px);
  align-items: start;
}

.faq-intro {
  position: sticky;
  top: calc(var(--header-h) + 40px);
}

.faq-cta {
  margin-top: 34px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.faq-item {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.faq-item--open {
  border-color: var(--border-gold);
  background: var(--surface-2);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  padding: 22px 24px;
  font-size: 15.5px;
  font-weight: 600;
  text-align: left;
  color: var(--text);
}

.faq-chevron {
  flex: none;
  color: var(--gold);
  transition: transform 0.3s ease;
}

.faq-item--open .faq-chevron {
  transform: rotate(180deg);
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.faq-answer > p {
  overflow: hidden;
  padding: 0 24px;
  font-size: 14.5px;
  line-height: 1.7;
  color: var(--text-muted);
  transition: padding 0.35s ease;
}

.faq-item--open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-item--open .faq-answer > p {
  padding-bottom: 24px;
}

@media (max-width: 900px) {
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .faq-intro {
    position: static;
  }
}
</style>
