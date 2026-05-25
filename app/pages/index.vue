<template>
  <div class="home">
    <HeroSection />
    <ServicesSection />
    <AdvantagesSection />
    <ContactFormSection />
    <ContactsSection />
  </div>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import AdvantagesSection from '~/components/AdvantagesSection.vue'
import ContactFormSection from '~/components/ContactFormSection.vue'
import ContactsSection from '~/components/ContactsSection.vue'

useHead({
  title: 'РемонтБытСервис — Профессиональный ремонт бытовой техники',
  meta: [
    { name: 'description', content: 'Профессиональный ремонт бытовой техники на дому. Стиральные машины, холодильники, посудомоечные машины и другая техника. Быстро, качественно, с гарантией.' }
  ]
})
</script>
