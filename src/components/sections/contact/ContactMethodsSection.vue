<template>
  <section class="section-block">
    <div class="shell contact-shell">
      <SectionHeader label="01" title="Canales directos" :centered="true" />

      <div class="contact-grid">
        <a
          v-for="item in contactMethods"
          :key="item.label"
          class="contact-card"
          :href="item.href"
          :target="item.external ? '_blank' : undefined"
          :rel="item.external ? 'noreferrer' : undefined"
        >
          <div class="contact-card__icon">
            <v-icon :icon="item.icon" size="24"></v-icon>
          </div>
          <div>
            <p class="contact-card__label">{{ item.label }}</p>
            <p class="contact-card__value">{{ item.value }}</p>
          </div>
          <v-icon class="contact-card__arrow" icon="mdi-arrow-top-right" size="18"></v-icon>
        </a>
      </div>

      
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../../SectionHeader.vue'
import { contactMethods } from '../../../data/portfolio.js'
</script>
