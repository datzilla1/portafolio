<template>
  <section class="subpage-hero">
    <div :class="['shell', 'subpage-hero__content', { 'subpage-hero__content--center': centered }]">
      <p class="panel-label">{{ eyebrow }}</p>
      <h1 class="page-title">{{ title }}</h1>
      <p v-if="subtitle" class="page-subtitle">{{ subtitle }}</p>
      <div v-if="$slots.actions" class="page-actions">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  centered: {
    type: Boolean,
    default: false,
  },
})
</script>
