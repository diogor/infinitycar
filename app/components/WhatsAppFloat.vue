<script setup lang="ts">
const { defaultLink } = useWhatsApp()

const isVisible = ref(false)

const onScroll = () => {
  isVisible.value = window.scrollY > 320
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition name="pop">
    <a
      v-show="isVisible"
      :href="defaultLink"
      target="_blank"
      rel="noopener"
      class="float"
      aria-label="Falar com a Infinity Car Studio pelo WhatsApp"
    >
      <span class="float-pulse" aria-hidden="true" />
      <WhatsAppIcon :size="30" />
      <span class="float-label">WhatsApp</span>
    </a>
  </Transition>
</template>

<style scoped>
.float {
  position: fixed;
  right: 22px;
  bottom: 22px;
  z-index: 90;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 20px;
  border-radius: 999px;
  background: var(--whatsapp);
  color: #07130b;
  font-weight: 700;
  font-size: 14.5px;
  box-shadow: 0 10px 32px rgba(37, 211, 102, 0.4);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.float:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 16px 40px rgba(37, 211, 102, 0.5);
}

.float-pulse {
  position: absolute;
  inset: -4px;
  border-radius: inherit;
  border: 2px solid var(--whatsapp);
  animation: pulse 2.4s ease-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0% {
    opacity: 0.8;
    transform: scale(1);
  }
  70%,
  100% {
    opacity: 0;
    transform: scale(1.16);
  }
}

.pop-enter-active,
.pop-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.pop-enter-from,
.pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.9);
}

@media (max-width: 719px) {
  .float {
    right: 16px;
    bottom: 16px;
    padding: 15px;
  }

  .float-label {
    display: none;
  }
}
</style>
