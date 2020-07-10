<template>
  <div class="watch-effect">
    <span>{{counter}}</span>
    <br/>
    <button @click="cancelInterval">cancel interval</button>
    <button @click="cancelWatchEffect">stop watchEffect</button>
  </div>
</template>

<script>
  import {ref, watchEffect} from 'vue';

  export default {
    name: "WatchEffect",
    setup() {
      const counter = ref(0);
      const stopWatch = watchEffect(() => {
        console.log('watchEffect counter: ', counter.value);
      });
      const timer = setInterval(() => {
        counter.value++;
      }, 2000);
      return {counter, timer, stopWatch};
    },
    methods: {
      cancelInterval() {
        this.timer && clearInterval(this.timer);
      },
      cancelWatchEffect() {
        this.stopWatch();
      }
    }
  };
</script>

<style scoped>
  .watch-effect {
    border: 1px solid tomato;
  }
</style>
