<template>
  <section class="section-block section-block--surface">
    <div class="shell">
      <div class="story-list">
        <article v-for="item in contactAvailabilityNotes" :key="item" class="story-point">
          <strong>{{ item }}</strong>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../../SectionHeader.vue'
import { contactAvailabilityNotes, contactWorkflow } from '../../../data/portfolio.js'
</script>
