import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue';
import Submit from './views/Submit.vue';
import Profile from './views/Profile.vue';

const routes = [
  { path: '/submit', component: Submit },
  { path: '/profile', component: Profile },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})