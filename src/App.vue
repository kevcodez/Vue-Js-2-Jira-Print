<template>
  <div id="app">
    <div id="header" class="hidden-print">
      <i class="fa fa-print fa-5x" style="color: white; padding: 20px"></i>
    </div>

    <router-view></router-view>
  </div>
</template>

<script lang="ts">
  import App from './App.ts'
  export default App
</script>

<style lang="scss" scoped>
  @import 'scss/main';
</style>
