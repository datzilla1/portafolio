<template>
  <section class="section-block">
    <div class="shell">
      <SectionHeader label="01" title="Perfil profesional" />

      <v-row class="section-row" align="stretch">
        <v-col cols="12" lg="4">
          <div class="profile-card">
            <div class="profile-avatar">
              <img :src="profileImageUrl" :alt="fullName" class="profile-avatar__image" />
            </div>
            <p class="profile-name">{{ fullName }}</p>
            <p class="profile-title">{{ profileTitle }}</p>

            <div class="badge-row">
              <v-chip v-for="badge in profileBadges" :key="badge" color="primary" variant="tonal" size="small">
                {{ badge }}
              </v-chip>
            </div>

            <div class="profile-links">
              <v-btn icon variant="text" :href="`mailto:${email}`" aria-label="Correo">
                <v-icon>mdi-email-outline</v-icon>
              </v-btn>
              <v-btn icon variant="text" :href="linkedinUrl" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
              <v-btn icon variant="text" :href="phoneHref" aria-label="Teléfono">
                <v-icon>mdi-phone-outline</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="12" lg="8">
          <div class="content-card">
            <p class="section-copy">{{ aboutParagraphs[0] }}</p>
            <p class="section-copy section-copy--muted">{{ aboutParagraphs[1] }}</p>

            <div class="capability-grid">
              <article v-for="item in capabilities" :key="item.title" class="capability-card">
                <div class="capability-card__icon">
                  <v-icon :icon="item.icon" size="22"></v-icon>
                </div>
                <div>
                  <h3>{{ item.title }}</h3>
                  <p>{{ item.description }}</p>
                </div>
              </article>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script setup>
import SectionHeader from '../../SectionHeader.vue'
import {
  aboutParagraphs,
  capabilities,
  email,
  fullName,
  linkedinUrl,
  phoneHref,
  profileBadges,
  profileImageUrl,
  profileTitle,
} from '../../../data/portfolio.js'
</script>
