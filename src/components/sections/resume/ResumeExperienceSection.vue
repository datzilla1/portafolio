<template>
  <section class="section-block">
    <div class="shell">
      <SectionHeader label="01" title="Experiencia técnica" />



      <v-row class="service-row">
        <v-col v-for="service in services" :key="service.title" cols="12" sm="6" lg="4">
          <article class="service-card">
            <div class="service-card__icon">
              <v-icon :icon="service.icon" size="24"></v-icon>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </article>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../../SectionHeader.vue'
import { services } from '../../../data/portfolio.js'
</script>
