import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProjetosPage from '../views/Projetos.vue';
import EstudosPage from '../views/Estudos.vue';
import ExperienciaPage from '../views/Experiencia.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/projetos',
    name: 'Projetos',
    component: ProjetosPage
  },
  {
    path: '/estudos',
    name: 'Estudos',
    component: EstudosPage
  },
  {
    path: '/experiencia',
    name: 'Experiencia',
    component: ExperienciaPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
