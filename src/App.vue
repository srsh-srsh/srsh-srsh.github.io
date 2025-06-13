<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}

app {
  padding: 0;
  margin: 0;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.wrapper {
  display: flex;
  align-items: center;
  width: 100%;
}

nav {
  display: flex;
  text-align: left;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text-active);
}

nav a.router-link-exact-active:hover {
  color: var(--color-text-active);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: var(--color-text-inactive);
  font-size: 1.5rem;
  margin: 0 0 0 1rem;
  z-index: 5;
}

nav a:first-of-type {
  border: 0;
  margin-left: 5%;
}

.layout > *:last-child {
  margin-top: auto;
}

@media (min-width: 1024px) {
  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  .wrapper {
    margin-left: 0;
    align-items: center;
    width: 100%;
  }

  nav {
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
