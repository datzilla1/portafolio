<template>
  <PageHeroSection
    eyebrow="Contacto"
    title="Hablemos"
    subtitle="Si quieres revisar proyectos, hablar de una oportunidad o coordinar una demo, aquí tienes mis canales directos."
    centered
  />

  <ContactMethodsSection />
  <ContactWorkflowSection />
</template>

<script setup>
import ContactMethodsSection from '../components/sections/contact/ContactMethodsSection.vue'
import ContactWorkflowSection from '../components/sections/contact/ContactWorkflowSection.vue'
import PageHeroSection from '../components/sections/shared/PageHeroSection.vue'
</script>
