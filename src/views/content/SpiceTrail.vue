<template>
  <div style="margin-top: 4rem;">

    <PresentationGrid :images="blend" />

  </div>
</template>

<script setup>
import PresentationGrid from '../../components/PresentationGrid.vue';

const blend = [
  {
    type: 'video',
    src: new URL('../../spicetrail/SpiceTrail-Tea-House.mp4', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Concept.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Logo-Slogan.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Decor0.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Decor1.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Floor12.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Floor3.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Tea-selection.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Spice-add.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Sig-menu.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Desserts_Snacks.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Activities.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Packaging3.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Packaging.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/25.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/18.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Packaging2.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/16.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/17.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/Merchaindise.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/26.png', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../spicetrail/21.png', import.meta.url).href,
  },
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
