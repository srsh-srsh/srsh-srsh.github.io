<script setup>
import HomeComponent from '../components/HomeComponent.vue';
import HomeDisplay from '../components/HomeDisplayComponent.vue';
</script>

<template>
  <div class="page-wrapper">
    <!-- Fixed Header (HomeComponent) -->
    <div class="home-component">
      <HomeComponent />
    </div>

    <!-- Scrollable content that scrolls over the fixed header -->
    <div class="home-display">
      <HomeDisplay />
    </div>
  </div>
</template>

<style scoped>
/* Page wrapper handles layout */
.page-wrapper {
  position: relative;
  width: 100%;
  margin: 0;
  padding: 0;
}

/* Fixed component at top */
.home-component {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full screen */
  z-index: 1; /* Must be ABOVE other content to show */
  background-color: white; /* Or whatever the background is */
}

/* Content that scrolls upward, eventually covering the fixed component */
.home-display {
  position: relative;
  z-index: 2;
  margin-top: 100vh; /* Starts just below fixed component */
}
</style>
