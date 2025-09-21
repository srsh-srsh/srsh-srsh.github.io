<template>
  <div class="zigzag-grid">
    <div
      v-for="(item, index) in images"
      :key="index"
      class="zigzag-row"
    >
      <div v-if="index % 2 === 0" class="media" @click="openModal(item)">
        <img
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="'Image ' + (index + 1)"
        />
        <video
          v-else-if="item.type === 'video'"
          :src="item.src"
          autoplay
          muted
          loop
          preload="metadata"
        />
      </div>
      <div v-else class="filler">
      <div class="textbox">
          <p class="neonWhite">{{ item.text }}</p>
      </div>
      </div>

      <!-- Right column -->
      <div v-if="index % 2 === 1" class="media" @click="openModal(item)">
        <img
          v-if="item.type === 'image'"
          :src="item.src"
          :alt="'Image ' + (index + 1)"
        />
        <video
          v-else-if="item.type === 'video'"
          :src="item.src"
          autoplay
          muted
          loop
          preload="metadata"
        />
      </div>
      <div v-else class="filler">
      <div class="textbox">
          <p class="neonWhite">{{ item.text }}</p>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
.zigzag-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
  margin: auto;
  padding: 2rem;
}

.zigzag-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.media {
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
}

.media img,
.media video {
  width: 100%;
  height: auto;
  border-radius: 12px;
  display: block;
  transition: transform 0.3s ease;
}

.media:hover img,
.media:hover video {
  transform: scale(1.05);
}

.filler {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 500;
  color: #444;
  padding: 1rem;
  text-align: center;
}
</style>
