<template>
  <PageHeroSection
    eyebrow="Portafolio"
    title="Proyectos y evidencia"
    subtitle=""
  />

  <ProjectsCatalogSection />
  <ProjectsPresentationSection />
  <ProjectsNextStepsSection />
</template>

<script setup>
import ProjectsCatalogSection from '../components/sections/projects/ProjectsCatalogSection.vue'
import ProjectsNextStepsSection from '../components/sections/projects/ProjectsNextStepsSection.vue'
import ProjectsPresentationSection from '../components/sections/projects/ProjectsPresentationSection.vue'
import PageHeroSection from '../components/sections/shared/PageHeroSection.vue'
</script>
