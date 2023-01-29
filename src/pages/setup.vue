<template>
  <div>
    {{ msg }}
  </div>
  <div>
    <TestWatch :msg="msg"></TestWatch>
  </div>
</template>
<script setup>
import TestWatch from "./TestWatch.vue";
import { ref } from 'vue';

let msg = ref('hello world');
setTimeout(() => {
  msg.value = 'hello vue';
}, 3000);
</script>
