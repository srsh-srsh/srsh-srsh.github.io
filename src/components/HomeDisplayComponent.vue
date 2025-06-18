<template>
  <div class="tabs" style="margin-bottom: 0;">
    <button 
      v-for="tab in tabs" 
      :key="tab" 
      @click="currentTab = tab" 
      :class="{ active: currentTab === tab }"
    >
      {{ tab }}
    </button>
  </div>

  <div class="container">
    <Card
      v-for="(item, index) in filteredCards"
      :key="index"
      :title="item.title"
      :image="item.image"
      :link="item.link"
      :description="item.description"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import Card from './HomeCard.vue'

const tabs = ['Graphic Design', 'Web Development', 'UI/UX']
const currentTab = ref('Graphic Design')

const graphicDesignCards = [
  {
    title: 'Logo Design',
    image: new URL('../images/logo_final.webp', import.meta.url).href,
    link: '/logos',
    description: 'A small collection of logos done for certain organizations I have had the pleasure of working with.'
  },
  {
    title: 'Baazar Blend Product Line',
    image: new URL('../images/logo_teashop_red_background.webp', import.meta.url).href,
    link: '/bazar',
    description: 'A conceptualization of a brand specializing in spiced tea, including loose leaf, tea bags, cups, and other products.'
  },
  {
    title: 'Miscellaneous Designs',
    image: new URL('../images/cool_leaf-02-02.webp', import.meta.url).href,
    link: '/misc',
    description: 'Little tidbits, diagrams, and illustrations that were made for fun'
  },
  {
    title: 'Map',
    image: new URL('../images/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered.webp', import.meta.url).href,
    link: '/map',
    description: 'A large poster style map of my home nation, Nepal'
  }
]

const webDevCards = [
  {
    title: 'Cardinal Talent AI',
    image: new URL('../images/cardinal_logo.svg', import.meta.url).href,
    link: 'https://www.cardinaltalent.ai/',
    description: 'A website and frontend for an AI recruiter product.'
  },
  {
    title: 'Sitesaga',
    image: new URL('../images/sitesaga.jpg', import.meta.url).href,
    link: 'https://www.sitesaga.com/',
    description: 'A website all about WordPress and web hosting that I designed and created pages for.'
  }
]

const uiuxCards = [
  {
    title: 'Gymbel',
    image: new URL('../images/gymbel.webp', import.meta.url).href,
    link: 'https://devpost.com/software/gymble',
    description: 'A Tinder-like application to find gym parters, made for HackHer 2024.'
  }
]

const filteredCards = computed(() => {
  if (currentTab.value === 'Graphic Design') return graphicDesignCards
  if (currentTab.value === 'Web Development') return webDevCards
  if (currentTab.value === 'UI/UX') return uiuxCards
  return []
})
</script>

<style scoped>
@font-face {
  font-family: 'Jost';
  src: url('../font/JOST-VARIABLEFONT_WGHT.TTF') format('truetype');
}

.tabs {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 1rem;
}

.tabs button {
  font-family: jost;
  font-size: 2rem;
  padding: 0.6rem 1.2rem;
  border: 0px;
  border-bottom: 5px solid #2d2d2d;
  border-radius: 15px;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.tabs button:hover {
  color: #ffffff;
  background-color: #0074cc;
  border-color: #78acd3;
  opacity: 20%;
  border-radius: 15px;
}

.tabs button.active {
  color: #0074cc;
  border-color: #0074cc;
  border-radius: 15px;
}

.tabs button.active:hover{
  color: #ffffff;
  border-color: #78acd3;
  border-radius: 15px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  gap: 2rem;
  padding: 2rem;
}
</style>
