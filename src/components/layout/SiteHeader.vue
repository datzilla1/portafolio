<template>
  <v-app-bar flat :height="smAndDown ? 76 : 88" class="app-bar" :class="{ 'is-scrolled': scrolled }">
    <div class="shell nav-shell">
      <RouterLink class="brand-button" to="/">
        <span class="brand-mark">
          <img :src="profileImageUrl" :alt="fullName" class="brand-mark__image" />
        </span>
        <span class="brand-copy">
          <span class="brand-name">{{ fullName }}</span>
          <span class="brand-role">{{ brandTitle }}</span>
        </span>
      </RouterLink>

      <v-spacer />

      <div class="nav-links hidden-md-and-down">
        <v-btn
          v-for="item in navItems"
          :key="item.to"
          variant="text"
          class="nav-link"
          :class="{ 'nav-link--active': route.path === item.to }"
          :to="item.to"
        >
          {{ item.label }}
        </v-btn>
      </div>

      <v-btn icon variant="text" class="hidden-md-and-up" aria-label="Abrir menú" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    :width="smAndDown ? 252 : 280"
    class="mobile-drawer"
  >
    <div class="mobile-drawer__inner">
      <v-list nav class="mobile-drawer__list">
        <v-list-item
          v-for="item in navItems"
          :key="item.to"
          :title="item.label"
          :to="item.to"
          @click="drawer = false"
        />
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useDisplay } from 'vuetify'
import { RouterLink, useRoute } from 'vue-router'
import { brandTitle, fullName, navItems, profileImageUrl } from '../../data/portfolio.js'

const drawer = ref(false)
const scrolled = ref(false)
const route = useRoute()
const { smAndDown } = useDisplay()

const onScroll = () => {
  scrolled.value = window.scrollY > 30
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
