<script setup lang="ts">
const items = [
  { title: 'Guará II · Brasília/DF', subtitle: 'Estúdio de fácil acesso' },
  { title: 'Padrão premium', subtitle: 'Carros de alto padrão' },
  { title: 'Atendimento direto', subtitle: 'Agilidade pelo WhatsApp' },
  { title: 'Avaliação personalizada', subtitle: 'O serviço certo para o seu carro' },
]
</script>

<template>
  <div class="trustbar" role="region" aria-label="Diferenciais da Infinity Car Studio">
    <div class="container trustbar-grid">
      <div v-for="item in items" :key="item.title" class="trustbar-item reveal">
        <span class="trustbar-dot" aria-hidden="true" />
        <div>
          <p class="trustbar-title">{{ item.title }}</p>
          <p class="trustbar-subtitle">{{ item.subtitle }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trustbar {
  border-block: 1px solid var(--border);
  background: var(--bg-soft);
}

.trustbar-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
  padding-block: 30px;
}

.trustbar-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.trustbar-dot {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
  margin-top: 8px;
  box-shadow: 0 0 12px rgba(201, 169, 98, 0.6);
}

.trustbar-title {
  font-size: 14.5px;
  font-weight: 600;
  letter-spacing: 0.02em;
}

.trustbar-subtitle {
  font-size: 12.5px;
  color: var(--text-muted);
  margin-top: 2px;
}

@media (max-width: 900px) {
  .trustbar-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }
}

@media (max-width: 460px) {
  .trustbar-grid {
    grid-template-columns: 1fr;
    gap: 16px;
    padding-block: 24px;
  }
}
</style>
