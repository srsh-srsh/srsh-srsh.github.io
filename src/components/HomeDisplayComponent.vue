<template>
  <div style="background-color: white;    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(50px);  padding-top: 25px; width: 100%;">
  <div class="tabs" style="margin-bottom: 0;" id="home-display-component">
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
  </div>
</template>

<script setup>
import { ref, computed, defineAsyncComponent } from 'vue'
const Card = defineAsyncComponent(() => import('./HomeCard.vue'))

const tabs = ['Web Development','Graphic Design', 'UI/UX']
const currentTab = ref('Web Development')

const graphicDesignCards = [
  {
    title: 'Impactful Education',
    image: new URL('/src/images/catalogue_images/impactful_catalogue-1.webp', import.meta.url).href,
    link: '/impactfuleducation',
    description: 'Graphic and product design work done for the Impactful Education non-profit.'
  },
  {
    title: 'Logo Design',
    image: new URL('../images/logo_final.webp', import.meta.url).href,
    link: '/logos',
    description: 'A small collection of logos done for certain organizations I have had the pleasure of working with.'
  },
  {
    title: 'Spice Trail Tea House',
    image: new URL('../images/logo_teashop_red_background.png', import.meta.url).href,
    link: '/spicetrail',
    description: 'A conceptualization of a tea shop and company specializing in spiced tea, including loose leaf, tea bags, cups, and other products.'
  },
  {
    title: 'Miscellaneous Designs',
    image: new URL('../images/cool_leaf-02-02.webp', import.meta.url).href,
    link: '/misc',
    description: 'Little tidbits, diagrams, and illustrations that were made for fun.'
  },
  {
    title: 'Map',
    image: new URL('../images/mappostermin.png', import.meta.url).href,
    link: '/map',
    description: 'A large poster style map of my home nation, Nepal.'
  }
]

const webDevCards = [
  {
    title: 'Lekheko',
    image: new URL('../images/lekheko_dot_com.png', import.meta.url).href,
    link: 'https://www.lekheko.com/',
    description: 'A self-run design studio website where I sell the fonts that I create.'
  },
  {
    title: 'Joshua Kendall Website',
    image: new URL('../images/JoshuaKendallphoto.png', import.meta.url).href,
    link: 'https://joshuackendall.com//',
    description: 'A series of websites for renowed author and biographer Joshua C. Kendall and his four books.'
  },
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
  gap: 0.6rem;
}

.tabs button {
  font-family: jost;
  font-size: 1.8rem;
  padding: 0.4rem 0.7rem;
  border: 0px;
  border: 3px solid #000000;
  border-radius: 15px;
  color: #ffffff;
  border-color: #ffffff;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.tabs button:hover {
  color: #000000;
  border-color: #000000;
  background-color: #ffffff;
  border-radius: 15px;
}

.tabs button.active {
  color: #000000;
  border-color: #000000;
  background-color: #ffffff;
  border-radius: 15px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 2rem;
  gap: 2rem;
}

@media screen and (max-width: 600px) {
  .tabs {
    flex-direction: row;
    align-items: center;
    margin-bottom: 1rem;
    width: 100%;
  }

  .tabs button {
    font-size: 1.3rem;
    padding: 0.4rem 0.6rem;
  }
  
  .container {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
    margin-top: 3rem;
    margin-bottom: 0;
  }

  .layout{
    height: 500px;
  }
  
}
</style>
