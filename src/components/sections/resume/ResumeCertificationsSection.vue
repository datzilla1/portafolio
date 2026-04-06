<template>
  <section class="section-block section-block--surface resume-certifications">
    <div class="shell">
      <SectionHeader label="02" title="Certificaciones y habilidades" />

      <div class="resume-certifications__cert-grid">
        <component
          :is="cert.url ? 'a' : 'article'"
          v-for="cert in orderedCertifications"
          :key="cert.title + cert.date"
          class="certification-card"
          :class="{ 'certification-card--link': cert.url }"
          :href="cert.url"
          :target="cert.url ? '_blank' : undefined"
          :rel="cert.url ? 'noreferrer' : undefined"
        >
          <div class="certification-card__top">
            <span class="certification-card__badge">
              <v-icon size="18">mdi-certificate-outline</v-icon>
            </span>
            <p class="certification-card__issuer">{{ cleanText(cert.issuer) }}</p>
          </div>

          <h3 class="certification-card__title">{{ cleanText(cert.title) }}</h3>

          <div class="certification-card__meta">
            <span class="certification-card__meta-item">
              <v-icon size="15">mdi-calendar-month-outline</v-icon>
              {{ cleanText(cert.date) }}
            </span>
          </div>

          <span v-if="cert.url" class="certification-card__link">
            Ver credencial
            <v-icon size="15">mdi-open-in-new</v-icon>
          </span>
        </component>
      </div>

      <div class="resume-certifications__block">
        <div class="resume-certifications__block-head">
          <p class="resume-certifications__eyebrow">Tecnologías principales</p>
          <h3 class="resume-certifications__subtitle"></h3>
        </div>

        <div class="tech-logo-grid">
          <article
            v-for="tech in primaryTechnologies"
            :key="tech.label"
            class="tech-logo-card"
            :style="{ '--tech-accent': tech.accent }"
          >
            <span class="tech-logo-card__mark" :style="{ '--tech-accent': tech.accent }">
              <v-icon :icon="tech.icon" size="30" class="tech-logo-card__icon" />
            </span>
            <strong class="tech-logo-card__title">{{ tech.label }}</strong>
            <span class="tech-logo-card__domain">{{ tech.category }}</span>
          </article>
        </div>
      </div>

      <div class="resume-certifications__block">
        <div class="resume-certifications__block-head">
          <p class="resume-certifications__eyebrow">Áreas técnicas</p>
          <h3 class="resume-certifications__subtitle"></h3>
        </div>

        <div class="skill-domain-grid">
          <article v-for="group in orderedSkillGroups" :key="group.title" class="skill-domain-card">
            <div class="skill-domain-card__head">
              <span class="skill-domain-card__icon">
                <v-icon size="18">{{ group.icon }}</v-icon>
              </span>
              <h3 class="skill-domain-card__title">{{ cleanText(group.title) }}</h3>
            </div>

            <div class="skill-domain-card__pills">
              <span v-for="item in group.items" :key="item" class="skill-pill">{{ cleanText(item) }}</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import SectionHeader from '../../SectionHeader.vue'
import { certifications, skillGroups } from '../../../data/portfolio.js'

const monthOrder = {
  enero: 1,
  febrero: 2,
  marzo: 3,
  abril: 4,
  mayo: 5,
  junio: 6,
  julio: 7,
  agosto: 8,
  septiembre: 9,
  octubre: 10,
  noviembre: 11,
  diciembre: 12,
}

const groupIcons = {
  Frontend: 'mdi-monitor-dashboard',
  'Backend y APIs': 'mdi-server-outline',
  'Móvil y escritorio': 'mdi-cellphone-cog',
  'Bases de datos': 'mdi-database-outline',
  'Cloud, redes y seguridad': 'mdi-cloud-lock-outline',
  'Flujo de trabajo': 'mdi-source-branch',
}

const primaryTechnologySource = [
  {
    label: 'AWS',
    category: 'Cloud',
    accent: '#ff9900',
    icon: 'mdi-aws',
  },
  {
    label: 'C#',
    category: 'Backend',
    accent: '#512bd4',
    icon: 'mdi-language-csharp',
  },
  {
    label: 'CSS',
    category: 'Frontend',
    accent: '#1572b6',
    icon: 'mdi-language-css3',
  },
  {
    label: 'HTML',
    category: 'Frontend',
    accent: '#e34f26',
    icon: 'mdi-language-html5',
  },
  {
    label: 'Ionic',
    category: 'Móvil',
    accent: '#3880ff',
    icon: 'mdi-ionic',
  },
  {
    label: 'JavaScript',
    category: 'Frontend',
    accent: '#f7df1e',
    icon: 'mdi-language-javascript',
  },
  {
    label: 'Laravel',
    category: 'Backend',
    accent: '#ff2d20',
    icon: 'mdi-laravel',
  },
  {
    label: 'Git',
    category: 'Flujo de trabajo',
    accent: '#f05032',
    icon: 'mdi-git',
  },
  {
    label: 'MySQL',
    category: 'Base de datos',
    accent: '#4479a1',
    icon: 'mdi-database',
  },
  {
    label: 'Node.js',
    category: 'Backend',
    accent: '#5fa04e',
    icon: 'mdi-nodejs',
  },
  {
    label: 'PHP',
    category: 'Backend',
    accent: '#777bb4',
    icon: 'mdi-language-php',
  },
  {
    label: 'TypeScript',
    category: 'Frontend',
    accent: '#3178c6',
    icon: 'mdi-language-typescript',
  },
  {
    label: 'Vue.js',
    category: 'Frontend',
    accent: '#42b883',
    icon: 'mdi-vuejs',
  },
  {
    label: 'Python',
    category: 'Backend',
    accent: '#3776ab',
    icon: 'mdi-language-python',
  },
]

const orderedCertifications = computed(() =>
  [...certifications].sort((left, right) => {
    const leftDate = parseSpanishDate(cleanText(left.date))
    const rightDate = parseSpanishDate(cleanText(right.date))

    if (rightDate.year !== leftDate.year) {
      return rightDate.year - leftDate.year
    }

    if (rightDate.month !== leftDate.month) {
      return rightDate.month - leftDate.month
    }

    return cleanText(left.title).localeCompare(cleanText(right.title), 'es', { sensitivity: 'base' })
  }),
)

const primaryTechnologies = computed(() =>
  [...primaryTechnologySource].sort((left, right) =>
    left.label.localeCompare(right.label, 'es', { sensitivity: 'base' }),
  ),
)

const orderedSkillGroups = computed(() =>
  skillGroups.map((group) => ({
    ...group,
    icon: groupIcons[cleanText(group.title)] || 'mdi-shape-outline',
    items: [...group.items].sort((left, right) =>
      cleanText(left).localeCompare(cleanText(right), 'es', { sensitivity: 'base' }),
    ),
  })),
)

function parseSpanishDate(value) {
  const normalized = cleanText(value).toLowerCase().trim()
  const [monthRaw, yearRaw] = normalized.split(/\s+/)

  return {
    month: monthOrder[monthRaw] || 0,
    year: Number.parseInt(yearRaw, 10) || 0,
  }
}

function cleanText(value) {
  if (!value) {
    return ''
  }

  return String(value)
    .replace(/ÃƒÂ¡/g, 'á')
    .replace(/ÃƒÂ©/g, 'é')
    .replace(/ÃƒÂ­/g, 'í')
    .replace(/ÃƒÂ³/g, 'ó')
    .replace(/ÃƒÂº/g, 'ú')
    .replace(/ÃƒÂ±/g, 'ñ')
    .replace(/Ãƒ/g, 'í')
    .replace(/Ã‚/g, '')
}
</script>

<style scoped>
.resume-certifications__block {
  margin-top: 34px;
}

.resume-certifications__block-head {
  margin-bottom: 18px;
}

.resume-certifications__eyebrow {
  margin: 0 0 8px;
  color: var(--brand-primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.resume-certifications__subtitle {
  margin: 0;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 1.16rem;
  font-weight: 700;
  line-height: 1.4;
}

.resume-certifications__cert-grid,
.tech-logo-grid,
.skill-domain-grid {
  display: grid;
  gap: 16px;
}

.resume-certifications__cert-grid {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 28px;
}

.tech-logo-grid {
  grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
}

.skill-domain-grid {
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
}

.certification-card,
.tech-logo-card,
.skill-domain-card {
  height: 100%;
  border-radius: 24px;
  background: rgba(10, 18, 32, 0.74);
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: var(--shadow-xl);
}

.certification-card {
  display: flex;
  flex-direction: column;
  padding: 20px;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.certification-card--link:hover {
  transform: translateY(-4px);
  border-color: rgba(94, 234, 212, 0.28);
  background: rgba(12, 22, 38, 0.92);
  box-shadow: 0 26px 50px rgba(2, 6, 23, 0.26);
}

.certification-card__top {
  display: flex;
  align-items: center;
  gap: 10px;
}

.certification-card__badge {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: rgba(94, 234, 212, 0.12);
  color: var(--brand-primary);
}

.certification-card__issuer {
  margin: 0;
  color: var(--brand-primary);
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.certification-card__title {
  margin: 16px 0 0;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.42;
}

.certification-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 14px;
}

.certification-card__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--text-muted);
  font-size: 0.86rem;
  line-height: 1.5;
}

.certification-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: auto;
  padding-top: 18px;
  color: var(--brand-primary);
  font-size: 0.88rem;
  font-weight: 700;
}

.tech-logo-card {
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px 16px;
  text-align: center;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.tech-logo-card:hover {
  transform: translateY(-4px) scale(1.01);
  border-color: color-mix(in srgb, var(--tech-accent, #5eead4) 45%, rgba(148, 163, 184, 0.12));
  background: rgba(13, 23, 40, 0.9);
  box-shadow: 0 26px 50px rgba(2, 6, 23, 0.26);
}

.tech-logo-card__mark {
  display: grid;
  place-items: center;
  width: 58px;
  height: 58px;
  border-radius: 18px;
  background: color-mix(in srgb, var(--tech-accent) 12%, rgba(15, 23, 42, 0.9));
  border: 1px solid color-mix(in srgb, var(--tech-accent) 28%, rgba(148, 163, 184, 0.14));
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.02);
}

.tech-logo-card__icon {
  color: var(--tech-accent);
  filter: drop-shadow(0 4px 10px color-mix(in srgb, var(--tech-accent) 30%, transparent));
}

.tech-logo-card__title {
  color: var(--text-primary);
  font-size: 0.94rem;
  font-weight: 700;
}

.tech-logo-card__domain {
  color: var(--text-muted);
  font-size: 0.78rem;
  font-weight: 600;
}

.skill-domain-card {
  padding: 20px;
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    background-color 0.2s ease;
}

.skill-domain-card:hover {
  transform: translateY(-3px);
  border-color: rgba(94, 234, 212, 0.2);
  background: rgba(12, 22, 38, 0.88);
}

.skill-domain-card__head {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.skill-domain-card__icon {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 14px;
  background: rgba(94, 234, 212, 0.12);
  color: var(--brand-primary);
}

.skill-domain-card__title {
  margin: 0;
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
}

.skill-domain-card__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-pill {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 6px 11px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.1);
  border: 1px solid rgba(148, 163, 184, 0.1);
  color: var(--text-secondary);
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.3;
}

@media (max-width: 767px) {
  .resume-certifications__cert-grid,
  .tech-logo-grid,
  .skill-domain-grid {
    grid-template-columns: 1fr;
  }

  .certification-card,
  .tech-logo-card,
  .skill-domain-card {
    border-radius: 22px;
  }

  .certification-card,
  .skill-domain-card {
    padding: 18px;
  }

  .tech-logo-card {
    padding: 18px 16px;
  }
}
</style>
