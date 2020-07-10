<template>
  <div class="provide-inject">
    <span>123123</span>
    <span>{{fontColor}}</span>
  </div>
</template>

<script>
  import {inject} from 'vue';
  import fontColorSymbol from './provide';

  export default {
    name: "ProvideInject",
    setup() {
      const fontColor = inject(fontColorSymbol, 'red');
      return {fontColor};
    }
  };
</script>

<style scoped>
.provide-inject{
  border: 1px solid tomato;
}
</style>
