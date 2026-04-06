<template>
  <section class="section-block">
    <div class="shell">
      <SectionHeader label="01" title="Portafolio técnico" />



      <div class="filter-bar">
        <button
          v-for="item in projectTypes"
          :key="item.value"
          type="button"
          :class="['filter-btn', { 'is-active': activeFilter === item.value }]"
          @click="activeFilter = item.value"
        >
          <v-icon size="16" class="mr-1">{{ item.icon }}</v-icon>
          {{ item.label }}
          <span class="filter-count">{{ countByType(item.value) }}</span>
        </button>
      </div>

      <v-row class="project-row">
        <v-col v-for="project in filteredProjects" :key="project.id" cols="12" md="6" lg="4">
          <ProjectCard :project="project" />
        </v-col>
      </v-row>

      <div v-if="filteredProjects.length === 0" class="empty-state">
        <v-icon size="56">mdi-folder-search-outline</v-icon>
        <p>Todavía no hay proyectos en esta categoría.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import ProjectCard from '../../ProjectCard.vue'
import SectionHeader from '../../SectionHeader.vue'
import { projects, projectTypes } from '../../../data/portfolio.js'

const activeFilter = ref('all')

const filteredProjects = computed(() =>
  activeFilter.value === 'all'
    ? projects
    : projects.filter((project) => project.type === activeFilter.value),
)

const countByType = (type) =>
  type === 'all' ? projects.length : projects.filter((project) => project.type === type).length
</script>
