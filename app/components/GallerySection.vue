<script setup lang="ts">
import { BUSINESS, WORKS } from '~/utils/constants'

const activeIndex = ref(0)
const playing = ref<boolean[]>(WORKS.map(() => false))
const videoRefs = ref<(HTMLVideoElement | null)[]>([])

const track = ref<HTMLElement | null>(null)

const setVideoRef = (el: Element | ComponentPublicInstance | null, i: number) => {
  videoRefs.value[i] = el as HTMLVideoElement | null
}

const play = async (i: number) => {
  const video = videoRefs.value[i]
  if (!video) return
  try {
    await video.play()
    playing.value[i] = true
  } catch {
    /* autoplay bloqueado: ignora */
  }
}

const pause = (i: number) => {
  const video = videoRefs.value[i]
  if (!video) return
  video.pause()
  video.currentTime = 0
  playing.value[i] = false
}

const scrollTo = (i: number) => {
  const el = track.value
  if (!el) return
  const card = el.children[i] as HTMLElement | undefined
  card?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
}

const onScroll = () => {
  const el = track.value
  if (!el) return
  const cards = Array.from(el.children) as HTMLElement[]
  const center = el.scrollLeft + el.clientWidth / 2
  let best = 0
  let bestDist = Infinity
  cards.forEach((card, i) => {
    const cardCenter = card.offsetLeft + card.offsetWidth / 2
    const dist = Math.abs(center - cardCenter)
    if (dist < bestDist) {
      bestDist = dist
      best = i
    }
  })
  activeIndex.value = best
}
</script>

<template>
  <section id="trabalhos" class="section gallery" aria-labelledby="gallery-title">
    <div class="container gallery-head">
      <div>
        <p class="section-label reveal">02 · Trabalhos</p>
        <h2 id="gallery-title" class="section-title reveal" style="transition-delay: 0.06s">
          O resultado <em>fala de perto.</em>
        </h2>
      </div>
      <p class="section-sub reveal" style="transition-delay: 0.12s">
        Trabalhos reais do estúdio. Passe o mouse para ver os vídeos —
        e confira muito mais no nosso Instagram.
      </p>
    </div>

    <div class="container">
      <div ref="track" class="gallery-track reveal" @scroll.passive="onScroll">
        <figure
          v-for="(work, i) in WORKS"
          :key="work.car"
          class="gallery-card"
          @mouseenter="play(i)"
          @mouseleave="pause(i)"
          @focusin="play(i)"
          @focusout="pause(i)"
        >
          <div class="gallery-media">
            <img :src="work.image" :alt="work.alt" loading="lazy" width="640" height="800" />
            <video
              :ref="(el) => setVideoRef(el, i)"
              :src="work.video"
              :poster="work.image"
              muted
              loop
              playsinline
              preload="none"
              class="gallery-video"
              :class="{ 'gallery-video--playing': playing[i] }"
              :aria-hidden="true"
            />
            <span class="gallery-index">{{ String(i + 1).padStart(2, '0') }} / {{ work.label }}</span>
          </div>
          <figcaption class="gallery-caption">
            <strong>{{ work.car }}</strong>
          </figcaption>
        </figure>
      </div>

      <div class="gallery-footer reveal">
        <div class="gallery-dots" role="tablist" aria-label="Navegar pela galeria">
          <button
            v-for="(work, i) in WORKS"
            :key="work.car"
            class="gallery-dot"
            :class="{ 'gallery-dot--active': activeIndex === i }"
            :aria-label="`Ir para ${work.car}`"
            :aria-selected="activeIndex === i"
            role="tab"
            @click="scrollTo(i)"
          />
        </div>

        <a :href="BUSINESS.instagram" target="_blank" rel="noopener" class="gallery-instagram">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
          </svg>
          <span>Mais trabalhos no Instagram</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M7 17 17 7M8 7h9v9" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery {
  background: var(--bg-soft);
  border-block: 1px solid var(--border);
}

.gallery-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: clamp(40px, 6vw, 64px);
}

.gallery-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(260px, 30%);
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 12px;
  scrollbar-width: none;
}

.gallery-track::-webkit-scrollbar {
  display: none;
}

.gallery-card {
  scroll-snap-align: center;
  margin: 0;
}

.gallery-media {
  position: relative;
  aspect-ratio: 4 / 5;
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--surface);
}

.gallery-media img,
.gallery-video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.4s ease;
}

.gallery-card:hover .gallery-media img {
  transform: scale(1.05);
}

.gallery-video {
  opacity: 0;
}

.gallery-video--playing {
  opacity: 1;
}

.gallery-index {
  position: absolute;
  left: 14px;
  bottom: 12px;
  z-index: 2;
  font-size: 10.5px;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(10, 10, 11, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.16);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  padding: 6px 12px;
}

.gallery-caption {
  margin-top: 14px;
  font-size: 15px;
  letter-spacing: 0.01em;
}

.gallery-caption strong {
  font-weight: 600;
}

.gallery-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-top: 26px;
  flex-wrap: wrap;
}

.gallery-dots {
  display: flex;
  gap: 8px;
}

.gallery-dot {
  width: 26px;
  height: 4px;
  border-radius: 999px;
  background: var(--surface-2);
  border: 1px solid var(--border);
  transition: background 0.25s ease, width 0.25s ease;
  padding: 0;
}

.gallery-dot--active {
  background: var(--gold);
  width: 40px;
}

.gallery-instagram {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  font-weight: 600;
  color: var(--gold-soft);
  transition: color 0.2s ease, gap 0.25s ease;
}

.gallery-instagram:hover {
  color: var(--gold);
  gap: 12px;
}

@media (max-width: 1023px) {
  .gallery-track {
    grid-auto-columns: minmax(240px, 44%);
  }
}

@media (max-width: 719px) {
  .gallery-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }

  .gallery-track {
    grid-auto-columns: 78%;
  }
}
</style>
