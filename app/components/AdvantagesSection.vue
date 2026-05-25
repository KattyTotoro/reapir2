<template>
  <section id="advantages" class="advantages section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">Почему мы</div>
        <h2 class="section-title">Наши преимущества</h2>
      </div>

      <div class="advantages__grid">
        <div 
          v-for="(advantage, index) in advantages" 
          :key="index"
          class="advantage-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.15}s` }"
        >
          <div class="advantage-card__number">{{ String(index + 1).padStart(2, '0') }}</div>
          <h3 class="advantage-card__title">{{ advantage.title }}</h3>
          <p class="advantage-card__text">{{ advantage.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const advantages = [
  {
    title: 'Выезд в день обращения',
    text: 'Мастер приедет к вам в течение 2 часов после оформления заявки. Работаем без выходных.'
  },
  {
    title: 'Бесплатная диагностика',
    text: 'При выполнении ремонта диагностика проводится бесплатно. Вы знаете точную стоимость до начала работ.'
  },
  {
    title: 'Гарантия до 2 лет',
    text: 'На все выполненные работы и установленные запчасти предоставляется официальная гарантия.'
  },
  {
    title: 'Оригинальные запчасти',
    text: 'Используем только сертифицированные запчасти от производителей. Работаем с официальными поставщиками.'
  },
  {
    title: 'Опытные мастера',
    text: 'Наши специалисты имеют стаж от 5 лет и регулярно проходят повышение квалификации.'
  },
  {
    title: 'Честные цены',
    text: 'Фиксированная стоимость работ без скрытых платежей. Оплата только после выполнения ремонта.'
  }
]
</script>

<style scoped>
.advantages__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 32px;
}

.advantage-card {
  padding: 40px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;
  transition: all var(--transition-base);
}

.advantage-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(255, 107, 53, 0.1) 0%, transparent 70%);
  opacity: 0;
  transition: opacity var(--transition-base);
}

.advantage-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-4px);
}

.advantage-card:hover::after {
  opacity: 1;
}

.advantage-card__number {
  font-family: var(--font-display);
  font-size: 48px;
  font-weight: 700;
  color: var(--color-accent);
  opacity: 0.3;
  line-height: 1;
  margin-bottom: 20px;
  transition: opacity var(--transition-base);
}

.advantage-card:hover .advantage-card__number {
  opacity: 0.6;
}

.advantage-card__title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-text);
}

.advantage-card__text {
  font-size: 15px;
  color: var(--color-text-muted);
  line-height: 1.7;
}

@media (max-width: 768px) {
  .advantages__grid {
    grid-template-columns: 1fr;
  }

  .advantage-card {
    padding: 32px;
  }
}
</style>
