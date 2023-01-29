<template>
  <div>{{ msg }}</div>
</template>

<script setup>
import { defineProps, watch } from 'vue';

const props = defineProps({
  msg: String,
});
watch(() => props.msg, () => {
  console.log('watch: ', props.msg);
});
</script>

<style scoped>

</style>
