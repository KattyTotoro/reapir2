<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__brand">
          <a href="/" class="footer__logo">
            <span class="footer__logo-icon">⚙</span>
            <span class="footer__logo-text">Ремонт<span class="footer__logo-accent">Быт</span>Сервис</span>
          </a>
          <p class="footer__tagline">Профессиональный ремонт бытовой техники с гарантией качества</p>
        </div>

        <div class="footer__info">
          <div class="footer__contacts">
            <h4 class="footer__title">Контакты</h4>
            <a :href="`tel:${config.public.phone.replace(/[^+\d]/g, '')}`" class="footer__link">{{ config.public.phone }}</a>
            <a :href="`mailto:${config.public.email}`" class="footer__link">{{ config.public.email }}</a>
            <p class="footer__text">{{ config.public.address }}</p>
          </div>

          <div class="footer__hours">
            <h4 class="footer__title">Режим работы</h4>
            <p class="footer__text">Пн-Пт: 8:00 - 21:00</p>
            <p class="footer__text">Сб-Вс: 9:00 - 20:00</p>
          </div>
        </div>

        <div class="footer__bottom">
          <p class="footer__copyright">© {{ new Date().getFullYear() }} РемонтБытСервис. Все права защищены.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const config = useRuntimeConfig()
</script>

<style scoped>
.footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 60px 0 30px;
}

.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
}

.footer__logo-icon {
  font-size: 24px;
  color: var(--color-accent);
}

.footer__logo-accent {
  color: var(--color-accent);
}

.footer__tagline {
  color: var(--color-text-muted);
  font-size: 14px;
  max-width: 400px;
}

.footer__info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  padding-top: 40px;
  border-top: 1px solid var(--color-border);
}

.footer__title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--color-text);
}

.footer__link {
  display: block;
  color: var(--color-text-muted);
  font-size: 15px;
  margin-bottom: 8px;
  transition: color var(--transition-fast);
}

.footer__link:hover {
  color: var(--color-accent);
}

.footer__text {
  color: var(--color-text-muted);
  font-size: 15px;
  margin-bottom: 8px;
}

.footer__bottom {
  padding-top: 30px;
  border-top: 1px solid var(--color-border);
  text-align: center;
}

.footer__copyright {
  color: var(--color-text-muted);
  font-size: 13px;
}
</style>
