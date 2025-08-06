<script setup>
import HomeComponent from '../components/HomeComponent.vue';
import HomeDisplay from '../components/HomeDisplayComponent.vue';
</script>

<template>
  <div class="page-wrapper">
    <div class="home-component">
      <HomeComponent />
    </div>

    <div class="home-display">
      <HomeDisplay />
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
}

.home-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background-color: white;
}

.home-display {
  position: relative;
  z-index: 2;
  margin-top: 100vh;
}
</style>
