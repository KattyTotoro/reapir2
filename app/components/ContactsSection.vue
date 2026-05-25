<template>
  <section id="contacts" class="contacts section">
    <div class="container">
      <div class="section-header animate-on-scroll">
        <div class="section-label">Где нас найти</div>
        <h2 class="section-title">Контакты</h2>
      </div>

      <div class="contacts__grid">
        <div class="contacts__info">
          <div class="contact-item animate-on-scroll">
            <div class="contact-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="contact-item__content">
              <h3 class="contact-item__title">Телефон</h3>
              <a :href="`tel:${config.public.phone.replace(/[^+\d]/g, '')}`" class="contact-item__value">{{ config.public.phone }}</a>
            </div>
          </div>

          <div class="contact-item animate-on-scroll">
            <div class="contact-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="2"/>
                <path d="M22 7l-10 7L2 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="contact-item__content">
              <h3 class="contact-item__title">Email</h3>
              <a :href="`mailto:${config.public.email}`" class="contact-item__value">{{ config.public.email }}</a>
            </div>
          </div>

          <div class="contact-item animate-on-scroll">
            <div class="contact-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
            </div>
            <div class="contact-item__content">
              <h3 class="contact-item__title">Адрес</h3>
              <p class="contact-item__value">{{ config.public.address }}</p>
            </div>
          </div>

          <div class="contact-item animate-on-scroll">
            <div class="contact-item__icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <div class="contact-item__content">
              <h3 class="contact-item__title">Режим работы</h3>
              <p class="contact-item__value">Пн-Пт: 8:00 - 21:00<br>Сб-Вс: 9:00 - 20:00</p>
            </div>
          </div>
        </div>

        <div class="contacts__map animate-on-scroll">
          <div class="map-placeholder">
            <div class="map-placeholder__content">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" stroke-width="2"/>
                <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
              </svg>
              <p>Здесь будет карта</p>
              <p class="map-placeholder__note">Вставьте iframe Яндекс.Карт или Google Maps</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const config = useRuntimeConfig()
</script>

<style scoped>
.contacts__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.contacts__info {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.contact-item {
  display: flex;
  gap: 20px;
  padding: 24px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.contact-item:hover {
  border-color: var(--color-accent);
  transform: translateX(8px);
}

.contact-item__icon {
  width: 56px;
  height: 56px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-accent);
  flex-shrink: 0;
  transition: all var(--transition-base);
}

.contact-item:hover .contact-item__icon {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-bg);
}

.contact-item__title {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  margin-bottom: 8px;
}

.contact-item__value {
  font-size: 18px;
  font-weight: 500;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

a.contact-item__value:hover {
  color: var(--color-accent);
}

.contacts__map {
  position: sticky;
  top: 120px;
}

.map-placeholder {
  width: 100%;
  height: 500px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
}

.map-placeholder__content {
  text-align: center;
  color: var(--color-text-muted);
}

.map-placeholder__content svg {
  margin-bottom: 16px;
  opacity: 0.5;
}

.map-placeholder__content p {
  font-size: 16px;
  margin-bottom: 8px;
}

.map-placeholder__note {
  font-size: 13px;
  opacity: 0.6;
}

@media (max-width: 1024px) {
  .contacts__grid {
    grid-template-columns: 1fr;
  }

  .contacts__map {
    position: static;
  }

  .map-placeholder {
    height: 400px;
  }
}
</style>
