<template>
  <div class="map-poster-page">

    <!-- PIN SCREEN -->
    <div v-if="step === 'pin'" class="card">
      <h1 class="title">Enter PIN 💌</h1>

      <input
        v-model="pin"
        type="password"
        maxlength="6"
        placeholder="••••"
        class="pin-input"
        @keyup.enter="checkPin"
      />

      <button class="btn" @click="checkPin">Enter</button>

      <p v-if="error" class="error">Incorrect PIN</p>
    </div>

    <!-- VALENTINE QUESTION -->
    <div v-else-if="step === 'valentine'" class="card">
      <h1 class="valentine-text">Will you be my Valentine? ❤️</h1>

      <div class="button-group">
        <button class="btn yes" @click="step = 'map'">Yes 💖</button>
        <button class="btn no" @mouseover="dodgeNo">No 🙈</button>
      </div>
    </div>

    <!-- MAP POSTER REVEAL -->
    <div v-else class="map-container">
      <img
        :src="mapImage"
        class="map-image"
        alt="Map Poster"
      />
      <h2 class="final-text">You said yes 💕</h2>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const mapImage = new URL(
  '../../images/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered.webp',
  import.meta.url
).href

const CORRECT_PIN = '143' // ❤️ change this

const step = ref('pin')
const pin = ref('')
const error = ref(false)

function checkPin() {
  if (pin.value === CORRECT_PIN) {
    error.value = false
    step.value = 'valentine'
  } else {
    error.value = true
  }
}

// playful "No" button behavior
function dodgeNo(event) {
  const btn = event.target
  btn.style.position = 'absolute'
  btn.style.left = Math.random() * 80 + '%'
  btn.style.top = Math.random() * 80 + '%'
}
</script>

<style scoped>
.map-poster-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at top, #ff6ec4, #7873f5);
  padding: 2rem;
}

.card {
  background: rgba(0, 0, 0, 0.5);
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  color: white;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.pin-input {
  font-size: 1.5rem;
  padding: 0.75rem;
  width: 120px;
  text-align: center;
  border-radius: 8px;
  border: none;
  margin-bottom: 1rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #ff6ec4;
  color: white;
  transition: transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

.error {
  margin-top: 1rem;
  color: #ffb3b3;
}

.valentine-text {
  font-size: 2.5rem;
  text-shadow: 0 0 10px #fff, 0 0 20px #ff6ec4;
}

.button-group {
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.yes {
  background: #ff4d6d;
}

.no {
  background: #555;
}

.map-container {
  text-align: center;
}

.map-image {
  max-width: 90%;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.final-text {
  margin-top: 1.5rem;
  font-size: 2rem;
  color: white;
  text-shadow: 0 0 15px #ff6ec4;
}
</style>
