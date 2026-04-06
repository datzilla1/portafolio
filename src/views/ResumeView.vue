<template>
  <PageHeroSection
    eyebrow="Perfil técnico"
    title="Experiencia, formación y stack"
  >
    <template #actions>
      <v-btn color="primary" size="large" :href="cvUrl" target="_blank" rel="noreferrer">
        Descargar CV
        <v-icon end>mdi-download</v-icon>
      </v-btn>
      <v-btn variant="outlined" size="large" :href="linkedinUrl" target="_blank" rel="noreferrer">
        Ver LinkedIn
      </v-btn>
    </template>
  </PageHeroSection>

  <ResumeExperienceSection />
  <ResumeCertificationsSection />
  <ResumeStrengthsSection />
  <ResumeEducationSection />
</template>

<script setup>
import ResumeCertificationsSection from '../components/sections/resume/ResumeCertificationsSection.vue'
import ResumeEducationSection from '../components/sections/resume/ResumeEducationSection.vue'
import ResumeExperienceSection from '../components/sections/resume/ResumeExperienceSection.vue'
import ResumeStrengthsSection from '../components/sections/resume/ResumeStrengthsSection.vue'
import PageHeroSection from '../components/sections/shared/PageHeroSection.vue'
import { cvUrl, linkedinUrl } from '../data/portfolio.js'
</script>
