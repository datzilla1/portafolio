<template>
  <template v-if="project">
    <section class="subpage-hero project-detail-hero">
      <div class="shell subpage-hero__content">
        <RouterLink to="/proyectos" class="project-detail-back">
          <v-icon size="18">mdi-arrow-left</v-icon>
          Volver a proyectos
        </RouterLink>

        <div class="project-detail-meta-row">
          <span class="project-detail-pill">
            <v-icon :icon="typeMeta.icon" size="14"></v-icon>
            {{ typeMeta.label }}
          </span>
          <span class="project-detail-pill">{{ project.year }}</span>
          <span v-if="project.featured" class="project-detail-pill project-detail-pill--featured">Destacado</span>
        </div>

        <h1 class="page-title">{{ project.title }}</h1>
        <p class="project-detail-role">{{ project.role }}</p>
        <p class="page-subtitle">{{ project.summary }}</p>

        <div class="page-actions">
          <v-btn color="primary" size="large" to="/contacto">
            Contactar sobre este proyecto
            <v-icon end>mdi-send</v-icon>
          </v-btn>
          <v-btn variant="outlined" size="large" to="/proyectos">Ver más proyectos</v-btn>
        </div>
      </div>
    </section>

    <section class="section-block">
      <div class="shell">
        <v-row class="section-row project-detail-layout" align="start">
          <v-col cols="12" lg="7">
            <div v-if="galleryItems.length" class="project-gallery-card">
              <div
                class="project-active-media"
                :class="{ 'project-active-media--with-image': activeImage?.src }"
                :style="activeImage?.src ? imageBackgroundStyle(activeImage.src) : undefined"
              >
                <img :src="activeImage.src" :alt="activeImage.alt" />
              </div>

              <p v-if="activeImage.caption" class="project-gallery-caption">{{ activeImage.caption }}</p>

              <div v-if="galleryItems.length > 1" class="project-thumbnail-grid">
                <button
                  v-for="(item, index) in galleryItems"
                  :key="item.src + index"
                  type="button"
                  :class="['project-thumbnail', { 'is-active': index === activeImageIndex }]"
                  :style="imageBackgroundStyle(item.src)"
                  @click="activeImageIndex = index"
                >
                  <img :src="item.src" :alt="item.alt" />
                </button>
              </div>
            </div>

            <div v-else class="project-empty-gallery">
              <div class="project-empty-gallery__icon">
                <v-icon :icon="typeMeta.icon" size="30"></v-icon>
              </div>
              <h2>Galería pendiente</h2>
              <p>
                Cuando agregues capturas o imágenes del proyecto, aquí se mostrará una galería con la
                vista principal y sus pantallas más importantes.
              </p>
            </div>

            <article class="project-detail-section">
              <p class="panel-label">Descripción</p>
              <h2>Resumen del proyecto</h2>
              <p v-for="paragraph in projectOverview" :key="paragraph" class="project-detail-text">
                {{ paragraph }}
              </p>
            </article>

            <article v-if="project.highlights.length" class="project-detail-section">
              <p class="panel-label">Alcance</p>
              <h2>Qué incluye</h2>
              <ul class="project-detail-list">
                <li v-for="item in project.highlights" :key="item">{{ item }}</li>
              </ul>
            </article>
          </v-col>

          <v-col cols="12" lg="5">
            <div class="story-card project-detail-sidebar">
              <div class="project-detail-facts">
                <article class="project-detail-fact">
                  <span class="project-detail-fact__label">Tipo</span>
                  <strong class="project-detail-fact__value">{{ typeMeta.label }}</strong>
                </article>
                <article class="project-detail-fact">
                  <span class="project-detail-fact__label">Tecnología</span>
                  <strong class="project-detail-fact__value">{{ project.role }}</strong>
                </article>
                <article class="project-detail-fact">
                  <span class="project-detail-fact__label">Año</span>
                  <strong class="project-detail-fact__value">{{ project.year }}</strong>
                </article>
              </div>

              <div>
                <p class="panel-label">Tecnologías</p>
                <div class="project-tags project-tags--detail">
                  <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                </div>
              </div>

              <div v-if="project.results.length">
                <p class="panel-label">Resultados</p>
                <ul class="project-detail-list project-detail-list--compact">
                  <li v-for="item in project.results" :key="item">{{ item }}</li>
                </ul>
              </div>

              <div>
                <p class="panel-label">Enlaces y evidencia</p>

                <div v-if="project.links.length" class="project-link-list">
                  <v-btn
                    v-for="link in project.links"
                    :key="link.label"
                    :href="link.url"
                    :target="link.external === false ? undefined : '_blank'"
                    :rel="link.external === false ? undefined : 'noreferrer'"
                    color="primary"
                    variant="tonal"
                    size="default"
                    block
                  >
                    <v-icon start :icon="link.icon" size="16"></v-icon>
                    {{ link.label }}
                  </v-btn>
                </div>

                <p v-else class="project-link-note">
                  {{ project.availability || 'No es público' }}
                </p>
              </div>

              <p v-if="project.proof" class="project-proof project-proof--detail">
                <v-icon icon="mdi-lightbulb-on-outline" size="17"></v-icon>
                <span>{{ project.proof }}</span>
              </p>
            </div>
          </v-col>
        </v-row>
      </div>
    </section>
  </template>

  <section v-else class="subpage-hero">
    <div class="shell subpage-hero__content">
      <p class="panel-label">Proyecto no encontrado</p>
      <h1 class="page-title">No encontramos ese proyecto</h1>
      <p class="page-subtitle">
        Revisa el enlace o vuelve al listado general para elegir uno de los proyectos disponibles.
      </p>
      <div class="page-actions">
        <v-btn color="primary" size="large" to="/proyectos">Volver a proyectos</v-btn>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getProjectBySlug, projectTypeMeta } from '../data/projects.js'

const route = useRoute()
const activeImageIndex = ref(0)

const project = computed(() => getProjectBySlug(route.params.slug))

const typeMeta = computed(
  () =>
    projectTypeMeta[project.value?.type] ?? {
      label: 'Proyecto',
      icon: 'mdi-application-braces-outline',
      accent: '#94a3b8',
      placeholder: 'Caso técnico',
    },
)

const galleryItems = computed(() => project.value?.gallery ?? [])

const activeImage = computed(() => galleryItems.value[activeImageIndex.value] ?? galleryItems.value[0] ?? null)

const projectOverview = computed(() => project.value?.overview ?? [])

const imageBackgroundStyle = (src) => ({
  '--project-image-bg': `url("${src}")`,
})

watch(
  () => route.params.slug,
  () => {
    activeImageIndex.value = 0
  },
)
</script>
