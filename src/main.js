import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home';
import Day from './pages/Day';
import DayRange from '@/pages/DayRange';
import Month from './pages/Month';
import MonthRange from '@/pages/MonthRange';
import { createWebHistory, createRouter } from 'vue-router';
import './index.css';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/day',
    name: 'day',
    component: Day,
  },
  {
    path: '/day-range',
    name: 'dayRange',
    component: DayRange,
  },
  {
    path: '/month',
    name: 'month',
    component: Month,
  },
  {
    path: '/month-range',
    name: 'monthRange',
    component: MonthRange,
  },
  {
    path: '/setup',
    name: 'setup',
    component: () => import('./pages/setup'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
