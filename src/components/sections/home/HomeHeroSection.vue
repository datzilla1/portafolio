<template>
  <section class="hero-section">
    <div class="hero-orb hero-orb--primary" aria-hidden="true"></div>
    <div class="hero-orb hero-orb--secondary" aria-hidden="true"></div>
    <div class="hero-grid-overlay" aria-hidden="true"></div>

    <div class="shell hero-shell">
      <v-row align="center" class="hero-row">
        <v-col cols="12" lg="7">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            Disponible para colaborar
          </div>

          <h1 class="hero-title">{{ fullName }}</h1>
          <p class="hero-role">{{ heroSummary }}</p>
          <p class="hero-description">{{ heroDescription }}</p>

          <div class="hero-actions">
            <v-btn color="primary" size="x-large" class="hero-btn" to="/proyectos">
              Ver proyectos
              <v-icon end>mdi-arrow-right</v-icon>
            </v-btn>
            <v-btn variant="tonal" size="x-large" class="hero-btn" :href="cvUrl" target="_blank" rel="noreferrer">
              Descargar CV
              <v-icon end>mdi-download</v-icon>
            </v-btn>
            <v-btn variant="outlined" size="x-large" class="hero-btn hero-btn--ghost" to="/contacto">
              Contactar
            </v-btn>
          </div>

          <div class="stack-row">
            <span v-for="tech in topTechs" :key="tech" class="stack-pill">{{ tech }}</span>
          </div>
        </v-col>

        <v-col cols="12" lg="5">
            <div class="hero-panel">
              <div class="panel-copy">
                <p class="panel-label">Perfil profesional</p>
                <h2>Desarrollo soluciones prácticas y presentación clara</h2>
                <p>

                </p>
              </div>

            <div class="metric-grid">
              <article v-for="metric in quickMetrics" :key="metric.label" class="metric-card">
                <strong>{{ metric.value }}</strong>
                <span>{{ metric.label }}</span>
              </article>
            </div>

            <div class="availability-note">
              <v-icon size="18">mdi-check-decagram</v-icon>
              <span>Disponible para colaborar en proyectos reales y seguir fortaleciendo el portafolio.</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import { cvUrl, fullName, heroDescription, heroSummary, quickMetrics, topTechs } from '../../../data/portfolio.js'
</script>
