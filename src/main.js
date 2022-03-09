import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home';
import Calendar from './pages/calendar';
import Month from './pages/Month';
import { createWebHistory, createRouter } from 'vue-router';
import './index.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar,
  },
  {
    path: '/month',
    name: 'month',
    component: Month,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
