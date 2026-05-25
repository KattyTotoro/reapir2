<template>
  <section id="services" class="services section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">Что мы делаем</div>
        <h2 class="section-title">Наши услуги</h2>
      </div>

      <div class="services__grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card animate-on-scroll"
          :style="{ transitionDelay: `${index * 0.1}s` }"
        >
          <div class="service-card__icon">
            <component :is="service.icon" />
          </div>
          <h3 class="service-card__title">{{ service.title }}</h3>
          <p class="service-card__description">{{ service.description }}</p>
          <div class="service-card__price">
            <span class="service-card__price-label">от</span>
            <span class="service-card__price-value">{{ service.price }} ₽</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: 'WashingMachineIcon',
    title: 'Стиральные машины',
    description: 'Ремонт стиральных машин всех марок. Замена подшипников, ТЭНов, модулей управления, устранение протечек.',
    price: 500
  },
  {
    icon: 'FridgeIcon',
    title: 'Холодильники',
    description: 'Диагностика и ремонт холодильников. Заправка фреоном, замена компрессора, устранение наледи.',
    price: 600
  },
  {
    icon: 'DishwasherIcon',
    title: 'Посудомоечные машины',
    description: 'Ремонт посудомоечных машин. Замена насосов, ТЭНов, устранение ошибок и протечек.',
    price: 500
  },
  {
    icon: 'OvenIcon',
    title: 'Духовые шкафы',
    description: 'Ремонт электрических и газовых духовых шкафов. Замена нагревательных элементов, термостатов.',
    price: 550
  },
  {
    icon: 'CooktopIcon',
    title: 'Варочные панели',
    description: 'Ремонт варочных панелей и плит. Замена конфорок, сенсорных модулей, стеклокерамики.',
    price: 600
  },
  {
    icon: 'DryerIcon',
    title: 'Сушильные машины',
    description: 'Ремонт сушильных машин. Замена ремней, подшипников, ТЭНов, датчиков влажности.',
    price: 500
  },
  {
    icon: 'MicrowaveIcon',
    title: 'СВЧ-печи',
    description: 'Ремонт микроволновых печей. Замена магнетронов, слюдяных пластин, высоковольтных конденсаторов.',
    price: 450
  },
  {
    icon: 'CoffeeIcon',
    title: 'Кофемашины',
    description: 'Ремонт кофемашин. Деколяция, замена помпы, уплотнителей, ремонт заварочного блока.',
    price: 700
  }
]
</script>

<style scoped>
.services__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.service-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  padding: 32px;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-base);
}

.service-card:hover {
  border-color: var(--color-accent);
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.service-card:hover::before {
  transform: scaleX(1);
}

.service-card__icon {
  width: 56px;
  height: 56px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 28px;
  transition: all var(--transition-base);
}

.service-card:hover .service-card__icon {
  background: var(--color-accent);
  border-color: var(--color-accent);
  transform: scale(1.1);
}

.service-card__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--color-text);
}

.service-card__description {
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1;
}

.service-card__price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding-top: 20px;
  border-top: 1px solid var(--color-border);
}

.service-card__price-label {
  font-size: 12px;
  color: var(--color-text-muted);
  text-transform: uppercase;
}

.service-card__price-value {
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-accent);
}

@media (max-width: 768px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
