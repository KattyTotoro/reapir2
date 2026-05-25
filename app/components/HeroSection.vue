<template>
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__bg-pattern"></div>
      <div class="hero__gradient"></div>
    </div>
    
    <div class="container">
      <div class="hero__content">
        <div class="hero__badge animate-on-scroll">
          <span class="hero__badge-dot"></span>
          Выезд на дом — бесплатно
        </div>
        
        <h1 class="hero__title animate-on-scroll">
          Ремонт бытовой<br>
          <span class="hero__title-accent">техники</span> на дому
        </h1>
        
        <p class="hero__subtitle animate-on-scroll">
          Профессиональный ремонт стиральных машин, холодильников, посудомоечных машин 
          и другой бытовой техники. Быстро, качественно, с гарантией до 2 лет.
        </p>
        
        <div class="hero__actions animate-on-scroll">
          <a href="#contact" class="btn btn-primary">
            Оставить заявку
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#services" class="btn btn-outline">Все услуги</a>
        </div>

        <div class="hero__stats animate-on-scroll">
          <div class="hero__stat">
            <span class="hero__stat-number">12+</span>
            <span class="hero__stat-label">лет опыта</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">5000+</span>
            <span class="hero__stat-label">ремонтов</span>
          </div>
          <div class="hero__stat-divider"></div>
          <div class="hero__stat">
            <span class="hero__stat-number">98%</span>
            <span class="hero__stat-label">довольных клиентов</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero__scroll-indicator">
      <span>Листайте вниз</span>
      <div class="hero__scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible')
        }, index * 100)
      }
    })
  }, { threshold: 0.1 })

  document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el))
})
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  padding: 140px 0 100px;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
}

.hero__bg-pattern {
  position: absolute;
  inset: 0;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 107, 53, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.02) 0%, transparent 50%);
  opacity: 0.8;
}

.hero__bg-pattern::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(255, 107, 53, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 107, 53, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero__gradient {
  position: absolute;
  top: -50%;
  right: -20%;
  width: 80%;
  height: 150%;
  background: radial-gradient(ellipse, rgba(255, 107, 53, 0.08) 0%, transparent 70%);
  animation: pulse-glow 8s ease-in-out infinite;
}

@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

.hero__content {
  max-width: 800px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--color-text-muted);
  margin-bottom: 32px;
}

.hero__badge-dot {
  width: 8px;
  height: 8px;
  background: var(--color-success);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.hero__title {
  font-size: clamp(48px, 8vw, 96px);
  font-weight: 700;
  line-height: 0.95;
  margin-bottom: 32px;
  letter-spacing: -0.02em;
}

.hero__title-accent {
  color: var(--color-accent);
  position: relative;
  display: inline-block;
}

.hero__title-accent::after {
  content: '';
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 6px;
  background: var(--color-accent);
  opacity: 0.3;
}

.hero__subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 48px;
  max-width: 600px;
}

.hero__actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 80px;
}

.hero__stats {
  display: flex;
  align-items: center;
  gap: 32px;
  padding-top: 48px;
  border-top: 1px solid var(--color-border);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.hero__stat-number {
  font-family: var(--font-display);
  font-size: 36px;
  font-weight: 700;
  color: var(--color-accent);
  line-height: 1;
}

.hero__stat-label {
  font-size: 13px;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero__stat-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
}

.hero__scroll-indicator {
  position: absolute;
  bottom: 40px;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: var(--color-text-muted);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: bounce 2s ease-in-out infinite;
}

.hero__scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, var(--color-accent), transparent);
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}

@media (max-width: 768px) {
  .hero {
    padding: 120px 0 80px;
    min-height: auto;
  }

  .hero__actions {
    flex-direction: column;
  }

  .hero__stats {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  .hero__stat-divider {
    width: 100%;
    height: 1px;
  }

  .hero__scroll-indicator {
    display: none;
  }
}
</style>
