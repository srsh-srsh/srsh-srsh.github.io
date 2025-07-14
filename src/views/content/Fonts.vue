<script setup>
import { ref } from 'vue'

const fonts = ref([
  {
    name: 'Midheim',
    description: 'A modern, sans-serif typeface known for its clean lines and versatility.',
    cssFamily: "'Midheim', sans-serif",
    downloadLink: '/font/Midheim.ttf'
  },
  {
    name: 'Open Sans',
    description: 'A humanist sans-serif typeface designed for legibility across print, web, and mobile interfaces.',
    cssFamily: "'Open Sans', sans-serif",
    downloadLink: 'https://fonts.google.com/specimen/Open+Sans'
  },
  {
    name: 'Lora',
    description: 'A well-balanced serif typeface with roots in calligraphy, perfect for body text.',
    cssFamily: "'Lora', serif",
    downloadLink: 'https://fonts.google.com/specimen/Lora'
  },
  {
    name: 'Montserrat',
    description: 'A geometric sans-serif typeface inspired by urban typography from the early 20th century.',
    cssFamily: "'Montserrat', sans-serif",
    downloadLink: 'https://fonts.google.com/specimen/Montserrat'
  },
  {
    name: 'Merriweather',
    description: 'A serif typeface designed for readability on screens, with a classic yet contemporary feel.',
    cssFamily: "'Merriweather', serif",
    downloadLink: 'https://fonts.google.com/specimen/Merriweather'
  },
  {
    name: 'Poppins',
    description: 'A geometric sans-serif typeface with a clean and modern aesthetic, suitable for headlines and display text.',
    cssFamily: "'Poppins', sans-serif",
    downloadLink: 'https://fonts.google.com/specimen/Poppins'
  }
])
</script>

<template>
  <section class="font-section">
    <div class="font-grid">
      <div
        v-for="font in fonts"
        :key="font.name"
        class="font-card"
      >
        <h2 class="font-name">{{ font.name }}</h2>
        <p class="font-description neonWhite">{{ font.description }}</p>
        <p class="font-preview" :style="{ fontFamily: font.cssFamily }">
          The quick brown fox jumps over the lazy dog.
        </p>
        <a
          :href="font.downloadLink"
          target="_blank"
          rel="noopener"
          class="download-link"
        >
          Download {{ font.name }}
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Newa&display=swap');
@import url('https://fonts.googleapis.com/css?family=Tilt+Neon');

@font-face {
  font-family: 'Midheim';
  src: url('../font/Midheim.ttf') format('truetype');
}

.font-section {
  margin-top: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.neonWhite {
  color: black;
}

.font-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
}

@media (min-width: 640px) {
  .font-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1024px) {
  .font-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.font-card {
  background: black;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.font-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 0 18px rgba(0, 0, 0, 0.3);
}

.font-name {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.font-description {
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.font-preview {
  background: white;
  color: black;
  padding: 0.8rem;
  border-radius: 6px;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.download-link {
  display: inline-block;
  color: #78acd3;
  font-weight: 500;
  text-decoration: underline;
  transition: color 0.3s;
}

.download-link:hover {
  color: #56a0e2;
}
</style>
