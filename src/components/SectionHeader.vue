<template>
  <div :class="['section-header', { 'section-header--centered': centered }]">
    <span class="section-label">{{ label }}</span>
    <h2 class="section-title">{{ title }}</h2>
    <span class="section-line" aria-hidden="true"></span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  title: String,
  centered: Boolean,
})
</script>

<style scoped>
.section-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-header--centered {
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.section-label {
  color: var(--brand-primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.section-title {
  margin: 0;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.section-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, rgba(94, 234, 212, 0.22), rgba(148, 163, 184, 0.06));
}

.section-header--centered .section-line {
  display: none;
}

@media (max-width: 767px) {
  .section-header {
    align-items: flex-start;
    flex-direction: column;
  }

  .section-line {
    width: 100%;
  }

  .section-header--centered {
    align-items: center;
  }
}
</style>
