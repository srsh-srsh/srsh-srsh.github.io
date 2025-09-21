<template>

    <div class="textbox">
        <p class="neonWhite">An introductory pamphlet for the Impactful Education Summer Program, a summer program for deserving children in the Ivory Coast.</p>
    </div>

  <div style="margin-top: 4rem;">
    <TwoColumnGrid :images="blend" />

  </div>
  <div style="margin-top: 4rem;">

    <AlternatingGrid :images="alternate" />
  </div>
</template>

<script setup>
import TwoColumnGrid from '@/components/TwoColumnGrid.vue';
import AlternatingGrid from '@/components/AlternatingGrid.vue';

const blend = [
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-1.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-2.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-3.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-4.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-5.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-6.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-7.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-8.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-9.webp', import.meta.url).href,
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/impactful_catalogue-10.webp', import.meta.url).href,
  }

]

const alternate = [
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/Certificates.png', import.meta.url).href,
    text: "Certificates handed out to students during the closing ceremony, highlighting excellence in various fields."
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/logo_board.png', import.meta.url).href,
    text: "Board displaying the logos of the organization's sponsors."
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/photo_frame.png', import.meta.url).href,
    text: "A photo frame prop used during the closing ceremony for students to take pictures with."
  },
  {
    type: 'image',
    src: new URL('../../images/catalogue_images/invitation.jpg', import.meta.url).href,
    text: "Invitation card for the closing ceremony of the summer program."
  }
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
