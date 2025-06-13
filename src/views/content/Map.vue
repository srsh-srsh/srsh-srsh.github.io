<template>
  <div class="map-poster-page">
    <div class="map-container">
      <img
        :src="mapImage"
        class="map-image"
        alt="Map Poster"
      />
    </div>
  </div>
</template>

<script setup>
const mapImage = new URL('../../images/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered.webp', import.meta.url).href
</script>

<style scoped>
.map-poster-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
}

.neonSign {
  text-align: center;
  margin-top: 2rem;
}

.neonText {
  font-family: 'Noto Sans Newa', sans-serif;
  font-size: 2.5rem;
  color: white;
  text-shadow: 0 0 10px #fff, 0 0 20px #00e6e6, 0 0 30px #00e6e6;
}

.textbox h3 {
  color: white;
  font-size: 1.5rem;
  text-align: center;
  margin-top: 0.5rem;
}

.map-container {
  width: 100%;
  text-align: center;
  padding: 2rem;
}

.map-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
}
</style>
