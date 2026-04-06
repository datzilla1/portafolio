<template>
  <section class="section-block">
    <div class="shell">
      <SectionHeader label="02" title="Proyectos destacados" />



      <v-row class="project-row">
        <v-col v-for="project in featuredProjects" :key="project.id" cols="12" md="6" lg="4">
          <ProjectCard :project="project" />
        </v-col>
      </v-row>

      <div class="page-actions">
        <v-btn color="primary" size="large" to="/proyectos">
          Ver todos los proyectos
          <v-icon end>mdi-arrow-right</v-icon>
        </v-btn>
        <v-btn variant="outlined" size="large" to="/perfil">Ver perfil técnico</v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '../../ProjectCard.vue'
import SectionHeader from '../../SectionHeader.vue'
import { featuredProjects } from '../../../data/portfolio.js'
</script>
