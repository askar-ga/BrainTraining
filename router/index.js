import { createRouter, createWebHistory } from 'vue-router';
import Settings from './pages/settings.vue';
import Duration from './pages/duration.vue';
import TaskTime from './pages/task-time.vue';
import Language from './pages/language.vue';
import Difficulty from './pages/difficulty.vue';

const routes = [
  { path: '/settings', component: Settings },
  { path: '/duration', component: Duration },
  { path: '/task-time', component: TaskTime },
  { path: '/language', component: Language },
  { path: '/difficulty', component: Difficulty },
  // добавьте другие страницы по мере необходимости
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
