<script setup lang="ts">
import { TESTIMONIALS } from '~/utils/constants'
</script>

<template>
  <section id="depoimentos" class="section testimonials" aria-labelledby="testimonials-title">
    <div class="container">
      <header class="testimonials-head">
        <div>
          <p class="section-label reveal">03 · Depoimentos</p>
          <h2 id="testimonials-title" class="section-title reveal" style="transition-delay: 0.06s">
            Quem confia, <em>recomenda.</em>
          </h2>
        </div>
        <div class="testimonials-rating reveal" style="transition-delay: 0.12s">
          <span class="testimonials-stars" aria-label="Avaliação 5 de 5">★★★★★</span>
          <span class="testimonials-rating-text">Clientes satisfeitos em Brasília</span>
        </div>
      </header>

      <ul class="testimonials-grid">
        <li
          v-for="(testimonial, i) in TESTIMONIALS"
          :key="i"
          class="testimonial-card reveal"
          :style="{ transitionDelay: `${i * 0.08}s` }"
        >
          <svg class="testimonial-quote-icon" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M10.7 5.6C6.9 7.3 5 10 5 13.9c0 2.7 1.6 4.5 3.9 4.5 2 0 3.5-1.5 3.5-3.5 0-1.9-1.3-3.3-3.1-3.3-.3 0-.8.1-.9.2.3-1.9 2-3.9 3.9-4.7l-1.6-1.5Zm8.6 0c-3.8 1.7-5.7 4.4-5.7 8.3 0 2.7 1.6 4.5 3.9 4.5 2 0 3.5-1.5 3.5-3.5 0-1.9-1.4-3.3-3.2-3.3-.3 0-.7.1-.8.2.3-1.9 1.9-3.9 3.8-4.7l-1.5-1.5Z" />
          </svg>
          <blockquote class="testimonial-quote">{{ testimonial.quote }}</blockquote>
          <footer class="testimonial-footer">
            <span class="testimonial-avatar" aria-hidden="true">{{ testimonial.car.charAt(0) }}</span>
            <div>
              <p class="testimonial-author">{{ testimonial.author }}</p>
              <p class="testimonial-car">{{ testimonial.car }}</p>
            </div>
          </footer>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.testimonials {
  background: var(--bg);
}

.testimonials-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: clamp(44px, 6vw, 68px);
}

.testimonials-rating {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  flex: none;
}

.testimonials-stars {
  color: var(--gold);
  font-size: 20px;
  letter-spacing: 3px;
}

.testimonials-rating-text {
  font-size: 13px;
  color: var(--text-muted);
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.testimonial-card {
  display: flex;
  flex-direction: column;
  padding: 32px 30px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background:
    radial-gradient(120% 90% at 0% 0%, rgba(201, 169, 98, 0.06) 0%, transparent 55%),
    var(--surface);
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), border-color 0.35s ease;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  border-color: var(--border-gold);
}

.testimonial-quote-icon {
  color: var(--gold);
  opacity: 0.85;
  margin-bottom: 18px;
}

.testimonial-quote {
  font-family: var(--font-display);
  font-size: 18.5px;
  font-style: italic;
  line-height: 1.5;
  flex: 1;
}

.testimonial-footer {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-top: 26px;
  padding-top: 22px;
  border-top: 1px solid var(--border);
}

.testimonial-avatar {
  flex: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-family: var(--font-display);
  font-size: 17px;
  color: #181307;
  background: linear-gradient(135deg, var(--gold-soft), var(--gold));
}

.testimonial-author {
  font-size: 14px;
  font-weight: 600;
}

.testimonial-car {
  font-size: 12.5px;
  color: var(--text-muted);
}

@media (max-width: 900px) {
  .testimonials-head {
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }

  .testimonials-rating {
    align-items: flex-start;
  }

  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>
