<template>
  <div style="margin-top: 4rem;">

    <ImageGrid :images="blend" />

  </div>
</template>

<script setup>
import ImageGrid from '../../components/ItemGrid.vue'

const blend = [
  new URL('../../images/product-arabian.webp', import.meta.url).href,
  new URL('../../images/product-assam.webp', import.meta.url).href,
  new URL('../../images/product-darjeeling.webp', import.meta.url).href,
  new URL('../../images/product-darjeeling-back.webp', import.meta.url).href,
  new URL('../../images/product-lineup-2.webp', import.meta.url).href,
  new URL('../../images/product-lineup.webp', import.meta.url).href,
]
</script>

<style scoped>
nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  padding: 1rem;
  justify-content: center;
}

nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}

header {
  text-align: center;
  padding: 2rem 1rem;
}

.neonText {
  font-family: 'Noto Sans Newa', sans-serif;
  color: white;
  text-shadow: 0 0 5px #fff, 0 0 10px #0ff, 0 0 20px #0ff;
}

.textbox h3 {
  font-size: 1.5rem;
  color: white;
  margin-top: 1rem;
}

footer {
  text-align: center;
  padding: 2rem 1rem;
  background: black;
}

.footer-content img {
  width: 30px;
  margin: 0 0.5rem;
}

.whitewhite {
  color: white;
  margin-top: 1rem;
}
</style>
