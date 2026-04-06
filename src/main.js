import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import './assets/main.css'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    VBtn: {
      rounded: 'xl',
    },
  },
  theme: {
    defaultTheme: 'portfolioDark',
    themes: {
      portfolioDark: {
        dark: true,
        colors: {
          background: '#06101d',
          surface: '#0b1220',
          'surface-variant': '#162032',
          primary: '#5eead4',
          secondary: '#f59e0b',
          accent: '#38bdf8',
          error: '#f87171',
          info: '#38bdf8',
          success: '#34d399',
          warning: '#fbbf24',
        },
      },
    },
  },
})

createApp(App).use(router).use(vuetify).mount('#app')
