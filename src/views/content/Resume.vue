<template>
  <div class="resume-grid">
    <div v-if="!isMobile" class="resume-item">
      <iframe
        :src="pdfUrl"
        type="application/pdf"
        frameborder="0"
        allowfullscreen
      ></iframe>
    </div>
    <div class="resume-container" style="width: 150px; border: 3px solid black; border-radius: 15px; margin-bottom: 0rem; justify-self: center;">
      <a :href="pdfUrl" target="_blank" rel="noopener" download style="text-decoration: none; color: black; display: flex; flex-direction: row; align-items: center; padding: 0.5rem; justify-content: center;">
        <img src="../../images/icons/download.png" alt="Resume" style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid black; object-fit: cover; margin-right: 0.5rem;" />
        <h2 style="margin: 0; font-size: 1.2rem;">Download</h2>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import pdfPath from '../../images/Sreesh_Poudyal_Resume.pdf'

const pdfUrl = ref(pdfPath)
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
})
</script>

<style scoped>
.resume-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
  width: 90%;
  max-width: 800px;
  margin: auto;
}

.resume-item {
  width: 100%;
  height: 600px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
}

.resume-item iframe {
  width: 100%;
  height: 100%;
  border: none;
}

.resume-container {
  transform: translateY(0px);
  background-color: white;
}

.resume-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  background-color: white;
}

.download-button {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  gap: 0.6rem;
}

.download-button a {
  font-family: jost;
  font-size: 1.8rem;
  padding: 0.4rem 0.7rem;
  border: 0px;
  border: 3px solid #2d2d2d;
  border-radius: 15px;
  background: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.download-button a:hover {
  color: #ffffff;
  background-color: #0074cc;
  border-color: #78acd3;
  opacity: 20%;
  border-radius: 15px;
}
</style>
