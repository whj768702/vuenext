<template>
  <div class="computed-wrap">
    <div class="basic">
      <h3>computed api demo</h3>
      <p>primary value: {{counter}} </p>
      <p>computed value(add 2): {{computedCounter}}</p>
      <button @click="addOne">add 1</button>
    </div>
    <div class="with-set-get">
      <h3>computed with set and get</h3>
      <p>primary value: {{counter2}}</p>
      <p>computed value(add 2): {{computedCounter2}}</p>
      <button @click="addOne2">add 1</button>
      <button @click="addComputedOne">computed value add 1</button>
    </div>
  </div>
</template>

<script>
  import {ref, computed} from 'vue';

  export default {
    name: "computedComponent",
    setup() {
      const counter = ref(0);
      const computedCounter = ref(computed(() => counter.value + 2));

      const counter2 = ref(0);
      const computedCounter2 = ref(computed({
        get: () => counter2.value,
        set: value => {
          counter2.value = value;
        }
      }));
      return {
        counter,
        counter2,
        computedCounter,
        computedCounter2
      };
    },
    methods: {
      addOne() {
        this.counter++;
      },
      addOne2() {
        this.counter2++;
      },
      addComputedOne() {
        this.computedCounter2++;
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
