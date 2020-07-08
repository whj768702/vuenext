<template>
  <div class="hello">
    <div>
      <span>default value from parent: </span>
      <input type="text" v-model="state.msg">
      <button @click="passMsg2Parent">click me return value</button>
    </div>
  </div>
</template>

<script>
  import {watchEffect, reactive} from 'vue';

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    setup(props) {
      const state = reactive({msg: props.msg});

      watchEffect(() => {
        console.log('state.msg: ', state.msg);
      });


      return {state};
    },
    methods: {
      passMsg2Parent() {
        console.log('passMsg2Parent: ', this);
        this.$emit('update', this.state.msg)
      }
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
