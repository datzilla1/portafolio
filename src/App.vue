<template>
  <v-app>
    <div class="app-shell">
      <SiteHeader />
      <v-main>
        <RouterView />
      </v-main>
      <SiteFooter />
    </div>
  </v-app>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteFooter from './components/layout/SiteFooter.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
</script>
