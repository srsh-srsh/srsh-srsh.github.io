<template>
    <div class="container">
      <Card
        v-for="(item, index) in cards"
        :key="index"
        :title="item.title"
        :image="item.image"
        :link="item.link"
        :description="item.description"
      />
    </div>
  </template>
  
  <script setup>
  import Card from './HomeCard.vue'
  
  const cards = [
    {
      title: 'Cardinal Talent AI',
      image: new URL('../images/cardinal_logo.svg', import.meta.url).href,
      link: 'https://www.cardinaltalent.ai/',
      description: 'A website and frontend for an AI recruiter product.'
    },
    {
      title: 'Gymbel',
      image: new URL('../images/gymbel.webp', import.meta.url).href,
      link: 'https://devpost.com/software/gymble',
      description: 'A Tinder-like application to find gym parters, made for HackHer 2024.'
    },
    /*{
      title: 'Fonts',
      image: new URL('../images/fontthingy.webp', import.meta.url).href,
      link: '/fonts',
      description: 'A collection of fonts and typography elements created in various languages.'
    },*/
    {
      title: 'Baazar Blend Product Line',
      image: new URL('../images/logo_teashop_red_background.webp', import.meta.url).href,
      link: '/bazar',
      description: 'A conceptualization of a brand specializing in spiced tea, including loose leaf, tea bags, cups, and other products.'
    },
    {
      title: 'Logo Design',
      image: new URL('../images/logo_final.webp', import.meta.url).href,
      link: '/logos',
      description: 'A small collection of logos done for certain organizations I have had the pleasure of working with.'
    },
    {
      title: 'Sitesaga',
      image: new URL('../images/sitesaga.jpg', import.meta.url).href,
      link: 'https://www.sitesaga.com/',
      description: 'A website all about WordPress and web hosting that I designed and created pages for.'
    },
    {
      title: 'Map',
      image: new URL('../images/mappostergood-Recovered-Recovered-Recovered-Recovered-Recovered.webp', import.meta.url).href,
      link: '/map',
      description: 'A large poster style map of my home nation, Nepal'
    },
    {
      title: 'Miscellaneous Designs',
      image: new URL('../images/cool_leaf-02-02.webp', import.meta.url).href,
      link: '/misc',
      description: 'Little tidbits, diagrams, and illustrations that were made for fun'
    }
  ]
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
    gap: 2rem;
    padding: 6rem 2rem 4rem;
}
  </style>
  