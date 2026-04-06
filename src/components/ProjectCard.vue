<template>
  <article class="project-card" :style="{ '--project-accent': typeMeta.accent }">
    <RouterLink :to="detailRoute" class="project-card__media-link">
      <div
        class="project-media"
        :class="{ 'project-media--with-image': project.image }"
        :style="project.image ? imageBackgroundStyle(project.image) : undefined"
      >
        <img v-if="project.image" :src="project.image" :alt="project.title" />

        <div v-else class="project-placeholder">
          <div class="project-placeholder__icon">
            <v-icon :icon="typeMeta.icon" size="28"></v-icon>
          </div>
          <span>{{ typeMeta.placeholder }}</span>
        </div>

        <div class="project-badges">
          <span class="project-type">
            <v-icon :icon="typeMeta.icon" size="14"></v-icon>
            {{ typeMeta.label }}
          </span>
          <span v-if="project.featured" class="project-featured">Destacado</span>
        </div>
      </div>
    </RouterLink>

    <div class="project-body">
      <div class="project-meta">
        <span>{{ project.role }}</span>
        <span>{{ project.year }}</span>
      </div>

      <h3 class="project-title">
        <RouterLink :to="detailRoute" class="project-title__link">{{ project.title }}</RouterLink>
      </h3>
      <p class="project-summary">{{ project.summary }}</p>

      <ul class="project-highlights">
        <li v-for="item in project.highlights" :key="item">{{ item }}</li>
      </ul>

      <div class="project-tags">
        <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>

      <p v-if="project.proof" class="project-proof">
        <v-icon icon="mdi-lightbulb-on-outline" size="16"></v-icon>
        <span>{{ project.proof }}</span>
      </p>

      <div class="project-actions">
        <v-btn color="primary" size="small" :to="detailRoute">
          Ver detalle
          <v-icon end icon="mdi-arrow-right" size="14"></v-icon>
        </v-btn>
        <v-btn
          v-for="link in project.links"
          :key="link.label"
          :href="link.url"
          :target="link.external === false ? undefined : '_blank'"
          :rel="link.external === false ? undefined : 'noreferrer'"
          color="primary"
          variant="tonal"
          size="small"
        >
          <v-icon start :icon="link.icon" size="14"></v-icon>
          {{ link.label }}
        </v-btn>
      </div>

      <p v-if="!project.links.length && project.availability" class="project-availability">
        {{ project.availability }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { projectTypeMeta } from '../data/projects.js'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
})

const detailRoute = computed(() => ({
  name: 'project-detail',
  params: { slug: props.project.slug },
}))

const imageBackgroundStyle = (src) => ({
  '--project-image-bg': `url("${src}")`,
})

const typeMeta = computed(
  () =>
    projectTypeMeta[props.project.type] ?? {
      label: 'Proyecto',
      icon: 'mdi-application-braces-outline',
      accent: '#94a3b8',
      placeholder: 'Caso técnico',
    },
)
</script>
