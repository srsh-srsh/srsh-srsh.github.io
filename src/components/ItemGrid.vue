<template>
    <div>
      <div class="image-grid">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="image-item"
          @click="openModal(image)"
        >
          <img :src="image" :alt="'Image ' + (index + 1)" />
        </div>
      </div>
  
      <div v-if="selectedImage" class="modal" @click.self="selectedImage = null">
        <span class="close" @click="selectedImage = null">&times;</span>
        <img class="modal-content" :src="selectedImage" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  defineProps({
    images: {
      type: Array,
      required: true,
    },
  });
  
  const selectedImage = ref(null);
  const openModal = (img) => {
    selectedImage.value = img;
  };
  </script>
  
  <style scoped>
  .image-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    padding: 2rem;
  }
  
  .image-item {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  .image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    display: block;
  }
  
  .image-item:hover img {
    transform: scale(1.05);
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  
  .modal-content {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
  }
  
  .close {
    position: fixed;
    top: 20px;
    right: 30px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
    z-index: 1001;
  }
  </style>
  