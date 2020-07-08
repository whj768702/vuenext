<template>
  <div class="hello">
    <div>
      <span>{{counter}}</span>
    </div>
    <button @click="increaseCounter()">add</button>
  </div>
</template>

<script>
  import {ref} from 'vue';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    setup() {
      const counter = ref(3);

      function increaseCounter() {
        counter.value++;
      }

      return {counter, increaseCounter};
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
