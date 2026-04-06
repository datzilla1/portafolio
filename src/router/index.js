import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '../views/ContactView.vue'
import HomeView from '../views/HomeView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/perfil', name: 'resume', component: ResumeView },
    { path: '/proyectos', name: 'projects', component: ProjectsView },
    { path: '/proyectos/:slug', name: 'project-detail', component: ProjectDetailView },
    { path: '/contacto', name: 'contact', component: ContactView },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
})

export default router
