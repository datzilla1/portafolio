<template>
  <section class="section-block">
    <div class="shell">
      <SectionHeader label="03" title="Formación y evolución" />

      <v-row class="section-row" align="start">
        <v-col cols="12" lg="7">
          <v-timeline side="end" density="compact" class="timeline-list">
            <v-timeline-item
              v-for="item in education"
              :key="item.school + item.year"
              :dot-color="item.current ? 'primary' : 'surface-variant'"
              size="small"
            >
              <div class="timeline-card">
                <p class="timeline-year">{{ item.year }}</p>
                <p class="timeline-school">{{ item.school }}</p>
                <p class="timeline-title">{{ item.title }}</p>
                <p class="timeline-description">{{ item.description }}</p>
                <v-chip v-if="item.current" color="primary" size="x-small" variant="flat" class="mt-3">
                  En curso
                </v-chip>
              </div>
            </v-timeline-item>
          </v-timeline>
        </v-col>

        
      </v-row>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../../SectionHeader.vue'
import { education, resumeHighlights } from '../../../data/portfolio.js'
</script>
