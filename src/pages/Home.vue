<template>
  <div>
    <h2>parent component: </h2>
    <input type="text" v-model="parentMsg">
    <span>father value: </span>
    <p>{{ parentMsg }}</p>
    <h3>child component: </h3>
    <HelloWorld :msg="parentMsg" @update="handleSonChange" />
  </div>
  <ComputedComponent />
  <WatchEffect />
  <ProvideInject />
</template>

<script>
import { ref } from 'vue';
import HelloWorld from '../components/HelloWorld.vue';
import ComputedComponent from '../components/ComputedComponent';
import WatchEffect from '../components/WatchEffect';
import ProvideInject from '../components/ProvideInject';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ComputedComponent,
    WatchEffect,
    ProvideInject,
  },
  setup() {
    const parentMsg = ref('parent');

    return {
      parentMsg,
    };
  },
  methods: {
    handleSonChange(msg) {
      console.log('parent: ', msg);
      this.parentMsg = msg;
    },
  },
};
</script>

<style scoped>

</style>