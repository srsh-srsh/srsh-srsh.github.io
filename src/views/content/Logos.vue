<template>
  <div style="margin-top: 4rem;">

    <ImageGrid :images="logos" />

  </div>
</template>

<script setup>
import ImageGrid from '../../components/ItemGrid.vue'

const logos = [
  new URL('../../images/Untitled-3_Logo 1_back.webp', import.meta.url).href,
  new URL('../../images/logo_teashop_red_background.webp', import.meta.url).href,
  new URL('../../images/logo_final.webp', import.meta.url).href,
  new URL('../../images/logo design final.webp', import.meta.url).href,
  new URL('../../images/126903761_843966036406371_2873100655496944690_n.jpg', import.meta.url).href,
  new URL('../../images/logo_1.webp', import.meta.url).href,
  new URL('../../images/logo_sugarloaf.webp', import.meta.url).href,
  new URL('../../images/WesternMassNepaliLogo-01.png', import.meta.url).href
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
