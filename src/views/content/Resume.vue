<template>
  <div class="resume-grid">
    <div class="resume-item">
      <embed :src="pdfUrl" type="application/pdf" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import pdfPath from '../../images/Sreesh_Poudyal_Resume.pdf'

const pdfUrl = ref(pdfPath)
</script>

<style scoped>
.resume-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
  width: 80%;
  justify-self: center;
}

.resume-item {
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  width: 100%;
  border-radius: 12px;
  height: 600px;
}

.resume-item embed {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  border: none;
}
</style>
