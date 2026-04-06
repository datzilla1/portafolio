<template>
  <v-footer class="app-footer">
    <div class="shell footer-shell">
      <span>{{ currentYear }} · {{ fullName }}</span>
      <span>Portafolio</span>
    </div>
  </v-footer>
</template>

<script setup>
import { fullName } from '../../data/portfolio.js'

const currentYear = new Date().getFullYear()
</script>
