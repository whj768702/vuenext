<template>
  <div id="app">
    <h2>parent component: </h2>
    <input type="text" v-model="parentMsg">
    <span>father value: </span>
    <p>{{parentMsg}}</p>
    <h3>child component: </h3>
    <HelloWorld :msg="parentMsg" @update="handleSonChange"/>
  </div>
</template>

<script>
  import {ref} from 'vue';
  import HelloWorld from './components/HelloWorld.vue';

  export default {
    name: 'App',
    components: {
      HelloWorld
    },
    setup() {
      const parentMsg = ref('parent');

      return {
        parentMsg
      };
    },
    methods: {
      handleSonChange(msg) {
        console.log('parent: ', msg);
        this.parentMsg = msg;
      }
    }
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
