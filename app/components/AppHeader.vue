<script setup lang="ts">
const { defaultLink } = useWhatsApp()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Trabalhos', href: '#trabalhos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Dúvidas', href: '#duvidas' },
  { label: 'Contato', href: '#contato' },
]

const onScroll = () => {
  isScrolled.value = window.scrollY > 24
}

const closeMenu = () => {
  isMenuOpen.value = false
}

watch(isMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled, 'header--open': isMenuOpen }">
    <div class="container header-inner">
      <a href="#inicio" class="brand" aria-label="Infinity Car Studio — voltar ao início" @click="closeMenu">
        <img src="/assets/logo-instagram.jpg" alt="Logo da Infinity Car Studio" class="brand-logo" width="40" height="40" />
        <span class="brand-text">Infinity <span>Car Studio</span></span>
      </a>

      <nav class="nav" aria-label="Navegação principal">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="nav-link">
          {{ link.label }}
        </a>
      </nav>

      <div class="header-actions">
        <a :href="defaultLink" target="_blank" rel="noopener" class="btn btn-whatsapp header-cta">
          <WhatsAppIcon :size="17" />
          <span>Agendar pelo WhatsApp</span>
        </a>

        <button
          class="menu-toggle"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-nav"
          aria-label="Abrir menu"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="menu-toggle-bar" />
          <span class="menu-toggle-bar" />
        </button>
      </div>
    </div>

    <Transition name="fade">
      <nav v-if="isMenuOpen" id="mobile-nav" class="mobile-nav" aria-label="Navegação móvel">
        <a v-for="link in navLinks" :key="link.href" :href="link.href" class="mobile-nav-link" @click="closeMenu">
          {{ link.label }}
        </a>
        <a :href="defaultLink" target="_blank" rel="noopener" class="btn btn-whatsapp mobile-nav-cta" @click="closeMenu">
          <WhatsAppIcon :size="18" />
          <span>Agendar pelo WhatsApp</span>
        </a>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 100;
  height: var(--header-h);
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  border-bottom: 1px solid transparent;
}

.header--scrolled,
.header--open {
  background: rgba(10, 10, 11, 0.86);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--border);
}

.header-inner {
  height: var(--header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex: none;
}

.brand-logo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border-gold);
}

.brand-text {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  line-height: 1.1;
}

.brand-text span {
  display: block;
  font-family: var(--font-body);
  font-size: 10.5px;
  font-weight: 500;
  letter-spacing: 0.3em;
  color: var(--gold);
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  font-size: 13.5px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  transition: color 0.2s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 1px;
  background: var(--gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.nav-link:hover {
  color: var(--text);
}

.nav-link:hover::after {
  transform: scaleX(1);
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 14px;
}

.header-cta {
  padding: 12px 22px;
  font-size: 13.5px;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  margin-right: -10px;
}

.menu-toggle-bar {
  width: 24px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.header--open .menu-toggle-bar:first-child {
  transform: translateY(3.5px) rotate(45deg);
}

.header--open .menu-toggle-bar:last-child {
  transform: translateY(-3.5px) rotate(-45deg);
}

.mobile-nav {
  position: fixed;
  inset: var(--header-h) 0 0 0;
  background: rgba(10, 10, 11, 0.98);
  backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 24px;
}

.mobile-nav-link {
  font-family: var(--font-display);
  font-size: 30px;
  font-weight: 600;
  padding: 12px 0;
  border-bottom: 1px solid var(--border);
  color: var(--text);
}

.mobile-nav-link:hover {
  color: var(--gold-soft);
}

.mobile-nav-cta {
  margin-top: 28px;
  align-self: stretch;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1023px) {
  .nav {
    display: none;
  }
}

@media (min-width: 720px) and (max-width: 1023px) {
  .menu-toggle {
    display: flex;
  }
}

@media (max-width: 719px) {
  .header-cta span {
    display: none;
  }

  .header-cta {
    padding: 12px;
    border-radius: 50%;
  }

  .menu-toggle {
    display: flex;
  }

  .brand-text {
    font-size: 15px;
  }
}
</style>
