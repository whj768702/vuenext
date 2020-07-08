<template>
  <div class="computed-wrap">
    <h3>computed api demo</h3>
    <p>primary value: {{counter}} </p>
    <p>computed value(add 2): {{computedCounter}}</p>
    <button @click="addOne">add 1</button>
  </div>
</template>

<script>
  import {ref, computed} from 'vue';

  export default {
    name: "computedComponent",
    setup() {
      const counter = ref(0);
      const computedCounter = ref(computed(() => counter.value + 2));
      return {
        counter,
        computedCounter
      };
    },
    methods: {
      addOne() {
        this.counter++;
      }
    }
  };
</script>

<style scoped>
  .computed-wrap {
    padding: 2em;
    margin-top: 20px;
    border: 1px solid tomato;
  }
</style>
