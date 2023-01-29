<template>
  <div id="app" class="h-screen p-10 flex">
    <div class="flex flex-col w-24 mr-2 border">
      <div class="h-8 flex items-center justify-center" v-for="route in routes" :key="route.title">
        <router-link :to="route.path">{{ route.title }}</router-link>
      </div>
    </div>
    <div class="p-4 border flex-grow text-center">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      routes: [
        {
          path: '/',
          title: 'Home',
        },
        {
          path: '/day',
          title: 'Day',
        },
        {
          path: '/day-range',
          title: 'DayRange',
        },
        {
          path: '/month',
          title: 'Month',
        },
        {
          path: '/month-range',
          title: 'MonthRange',
        },
        {
          path: '/setup',
          title: 'setup'
        },
      ],
    };
  },
};
</script>
