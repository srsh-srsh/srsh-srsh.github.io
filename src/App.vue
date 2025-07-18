<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="blur-background">
    <div class="blur-shape pink"></div>
    <div class="blur-shape purple"></div>
    <div class="blur-shape blue"></div>
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
    <div style="z-index: 4;">
    <Footer />
    </div>
  </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

.main-content {
  flex: 1;
  width: 100%;
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
  justify-content: space-between;
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

.blur-background {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #0d0d0d;
  color: #fff;
  font-family: 'Noto Sans Newa', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;
}

.blur-shape {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.6;
  animation: float 12s ease-in-out infinite;
  mix-blend-mode: screen;
  pointer-events: none;
}

.pink {
  width: 400px;
  height: 400px;
  background: #0045c6;
  top: 10%;
  left: 10%;
}

.purple {
  width: 500px;
  height: 500px;
  background: #00a9b8;
  top: 50%;
  left: 40%;
}

.blue {
  width: 300px;
  height: 300px;
  background: #1d05b8;
  bottom: 10%;
  right: 15%;
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
