<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container">
      <div class="header__inner">
        <a href="/" class="header__logo">
          <span class="header__logo-icon">⚙</span>
          <span class="header__logo-text">Ремонт<span class="header__logo-accent">Быт</span>Сервис</span>
        </a>
        
        <nav class="header__nav" :class="{ 'header__nav--open': mobileMenuOpen }">
          <a href="#services" class="header__nav-link" @click="closeMobileMenu">Услуги</a>
          <a href="#advantages" class="header__nav-link" @click="closeMobileMenu">Преимущества</a>
          <a href="#contact" class="header__nav-link" @click="closeMobileMenu">Заявка</a>
          <a href="#contacts" class="header__nav-link" @click="closeMobileMenu">Контакты</a>
        </nav>

        <div class="header__contacts">
          <a :href="`tel:${config.public.phone.replace(/[^+\d]/g, '')}`" class="header__phone">
            {{ config.public.phone }}
          </a>
          <button class="header__burger" @click="mobileMenuOpen = !mobileMenuOpen" aria-label="Меню">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const config = useRuntimeConfig()
const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 50
  })
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  transition: all var(--transition-base);
  background: transparent;
}

.header--scrolled {
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(20px);
  padding: 12px 0;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-display);
  font-size: 20px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: opacity var(--transition-fast);
}

.header__logo:hover {
  opacity: 0.8;
}

.header__logo-icon {
  font-size: 28px;
  color: var(--color-accent);
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.header__logo-accent {
  color: var(--color-accent);
}

.header__nav {
  display: flex;
  gap: 32px;
}

.header__nav-link {
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
  position: relative;
}

.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.header__nav-link:hover {
  color: var(--color-text);
}

.header__nav-link:hover::after {
  width: 100%;
}

.header__contacts {
  display: flex;
  align-items: center;
  gap: 20px;
}

.header__phone {
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-text);
  transition: color var(--transition-fast);
}

.header__phone:hover {
  color: var(--color-accent);
}

.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  width: 28px;
  padding: 4px 0;
}

.header__burger span {
  display: block;
  height: 2px;
  background: var(--color-text);
  transition: all var(--transition-base);
}

@media (max-width: 1024px) {
  .header__nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 300px;
    height: 100vh;
    background: var(--color-surface);
    flex-direction: column;
    padding: 100px 40px 40px;
    gap: 24px;
    transition: right var(--transition-base);
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.5);
  }

  .header__nav--open {
    right: 0;
  }

  .header__nav-link {
    font-size: 18px;
  }

  .header__burger {
    display: flex;
  }

  .header__burger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .header__burger.active span:nth-child(2) {
    opacity: 0;
  }

  .header__burger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }
}

@media (max-width: 640px) {
  .header__phone {
    display: none;
  }
}
</style>
