<template>
  <section id="contact" class="contact-form section">
    <div class="container">
      <div class="contact-form__wrapper">
        <div class="contact-form__info">
          <div class="section-label">Свяжитесь с нами</div>
          <h2 class="contact-form__title">Оставьте заявку<br>на ремонт</h2>
          <p class="contact-form__subtitle">
            Заполните форму, и мы перезвоним вам в течение 15 минут 
            для уточнения деталей и согласования времени визита мастера.
          </p>

          <div class="contact-form__benefits">
            <div class="contact-form__benefit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
                <path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Бесплатная консультация</span>
            </div>
            <div class="contact-form__benefit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
                <path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Расчёт стоимости по телефону</span>
            </div>
            <div class="contact-form__benefit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="2"/>
                <path d="M6 10l3 3 5-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>Выезд в день обращения</span>
            </div>
          </div>
        </div>

        <form class="contact-form__form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name" class="form-label">Ваше имя</label>
            <input 
              id="name"
              v-model="form.name"
              type="text" 
              class="form-input"
              placeholder="Иван Иванов"
              required
            />
          </div>

          <div class="form-group">
            <label for="phone" class="form-label">Телефон</label>
            <input 
              id="phone"
              v-model="form.phone"
              type="tel" 
              class="form-input"
              placeholder="+7 (___) ___-__-__"
              required
            />
          </div>

          <div class="form-group">
            <label for="service" class="form-label">Тип техники</label>
            <select id="service" v-model="form.service" class="form-input">
              <option value="" disabled>Выберите тип техники</option>
              <option v-for="service in serviceTypes" :key="service" :value="service">
                {{ service }}
              </option>
            </select>
          </div>

          <div class="form-group">
            <label for="message" class="form-label">Описание проблемы</label>
            <textarea 
              id="message"
              v-model="form.message"
              class="form-textarea"
              placeholder="Опишите, что случилось..."
              rows="4"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary form-submit" :disabled="isSubmitting">
            <span v-if="!isSubmitting">Отправить заявку</span>
            <span v-else>Отправка...</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <p class="form-note">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>

          <transition name="alert">
            <div v-if="submitStatus" :class="['alert', `alert--${submitStatus.type}`]">
              {{ submitStatus.message }}
            </div>
          </transition>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  phone: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)
const submitStatus = ref(null)

const serviceTypes = [
  'Стиральная машина',
  'Холодильник',
  'Посудомоечная машина',
  'Духовой шкаф',
  'Варочная панель',
  'Сушильная машина',
  'СВЧ-печь',
  'Кофемашина',
  'Другое'
]

const submitForm = async () => {
  isSubmitting.value = true
  
  // Имитация отправки
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  submitStatus.value = {
    type: 'success',
    message: 'Заявка успешно отправлена! Мы перезвоним вам в течение 15 минут.'
  }
  
  form.value = {
    name: '',
    phone: '',
    service: '',
    message: ''
  }
  
  isSubmitting.value = false
  
  setTimeout(() => {
    submitStatus.value = null
  }, 5000)
}
</script>

<style scoped>
.contact-form {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.contact-form__wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-form__info {
  position: sticky;
  top: 120px;
}

.contact-form__title {
  font-size: clamp(32px, 4vw, 48px);
  margin-bottom: 20px;
}

.contact-form__subtitle {
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 40px;
}

.contact-form__benefits {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-form__benefit {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text);
  font-size: 15px;
}

.contact-form__benefit svg {
  color: var(--color-accent);
  flex-shrink: 0;
}

.contact-form__form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 48px;
  background: var(--color-surface-elevated);
  border: 1px solid var(--color-border);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-text-muted);
}

.form-input,
.form-textarea {
  padding: 14px 16px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  color: var(--color-text);
  font-size: 15px;
  transition: all var(--transition-fast);
  outline: none;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--color-accent);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--color-text-muted);
  opacity: 0.6;
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.form-submit {
  width: 100%;
  margin-top: 8px;
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-note {
  font-size: 12px;
  color: var(--color-text-muted);
  text-align: center;
}

.alert {
  padding: 16px 20px;
  font-size: 14px;
  text-align: center;
}

.alert--success {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid var(--color-success);
  color: var(--color-success);
}

.alert-enter-active,
.alert-leave-active {
  transition: all 0.3s ease;
}

.alert-enter-from,
.alert-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media (max-width: 1024px) {
  .contact-form__wrapper {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .contact-form__info {
    position: static;
  }
}

@media (max-width: 640px) {
  .contact-form__form {
    padding: 32px 24px;
  }
}
</style>
