import { createApp } from 'vue';
import App from './App.vue';
import Home from './pages/Home'
import Calendar from './components/calendar';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: Calendar
  }
];
const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app');
