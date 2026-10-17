<script setup lang="ts">
const { buildLink } = useWhatsApp()

const steps = [
  {
    number: '01',
    title: 'Escolha o serviço',
    text: 'Navegue pelos serviços e encontre o que seu carro precisa — ou deixe que a equipe indique o ideal.',
  },
  {
    number: '02',
    title: 'Chame no WhatsApp',
    text: 'Toque em qualquer botão da página e caia direto na conversa, com a mensagem já pronta.',
  },
  {
    number: '03',
    title: 'Agende e pronto',
    text: 'A equipe confirma valores, avaliação e o melhor horário. Depois, é só entregar o carro e aguardar o resultado.',
  },
]
</script>

<template>
  <section class="section how" aria-labelledby="how-title">
    <div class="container how-grid">
      <div class="how-intro">
        <p class="section-label reveal">04 · Experiência</p>
        <h2 id="how-title" class="section-title reveal" style="transition-delay: 0.06s">
          Primeiro, entender o seu carro.<br />Depois, <em>escolher o cuidado.</em>
        </h2>
        <p class="section-sub reveal" style="transition-delay: 0.12s">
          Sem formulários complicados e sem espera: todo o atendimento acontece
          direto no WhatsApp, do jeito que você já está acostumado.
        </p>
        <div class="reveal" style="transition-delay: 0.18s">
          <a
            :href="buildLink('Olá, gostaria de saber qual serviço da Infinity é indicado para o meu carro.')"
            target="_blank"
            rel="noopener"
            class="btn btn-gold how-cta"
          >
            <WhatsAppIcon :size="17" />
            <span>Tirar uma dúvida</span>
          </a>
        </div>
      </div>

      <ol class="how-steps">
        <li
          v-for="(step, i) in steps"
          :key="step.number"
          class="how-step reveal"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <span class="how-step-number" aria-hidden="true">{{ step.number }}</span>
          <div>
            <h3 class="how-step-title">{{ step.title }}</h3>
            <p class="how-step-text">{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how {
  background: var(--bg-soft);
  border-block: 1px solid var(--border);
}

.how-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(44px, 7vw, 96px);
  align-items: center;
}

.how-cta {
  margin-top: 34px;
}

.how-steps {
  display: flex;
  flex-direction: column;
}

.how-step {
  display: flex;
  gap: 24px;
  padding: 30px 0;
  border-bottom: 1px solid var(--border);
}

.how-step:first-child {
  padding-top: 0;
}

.how-step:last-child {
  border-bottom: 0;
  padding-bottom: 0;
}

.how-step-number {
  flex: none;
  font-family: var(--font-display);
  font-style: italic;
  font-size: 30px;
  color: var(--gold);
  line-height: 1.1;
  width: 52px;
}

.how-step-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 600;
}

.how-step-text {
  font-size: 14.5px;
  color: var(--text-muted);
  margin-top: 8px;
  max-width: 420px;
}

@media (max-width: 900px) {
  .how-grid {
    grid-template-columns: 1fr;
  }

  .how-step {
    padding: 24px 0;
  }
}
</style>
