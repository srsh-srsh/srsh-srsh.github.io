<script setup>
import { ref } from 'vue';
import FontCard from "./Card.vue"
import morong from "../images/morong.png";
import satrapi from "../images/satrapi.png";
import tamashi from "../images/tamashi.png";

const fonts = [
  { title: "Morong", path: morong, desc: "A stylistic font for the Buhid script, inspired by German Blackletter." },
  { title: "Satrapi", path: satrapi, desc: "Bold and wide font face with strong strokes and wide arches." },
  { title: "Tamashi", path: tamashi, desc: "A highly minimalist font face that looks like donuts!" },
];

let slideNum = ref(0);

const slidePlus = () =>{
  slideNum.value = (slideNum.value + 1) % fonts.length;
}

const slideMinus = () => {
  slideNum.value = (slideNum.value - 1 + fonts.length) % fonts.length;
};
</script>

<template>
  <div class="view-wrapper">
    <div class="greetings">
      <button @click="slideMinus" class="sliderButton"><</button>
      <FontCard
        :title="fonts[slideNum].title"
        :path="fonts[slideNum].path"
        :desc="fonts[slideNum].desc"
      />
      <button @click="slidePlus" class="sliderButton">></button>
    </div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .view-wrapper {
  width: 100%;
  overflow: hidden;
}
}
.view-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.greetings {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  padding: 10px;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
}

button.sliderButton {
  border-radius: 50px;
  height: 40px;
  width: 40px; 
  display: flex;
  align-items: center;
  justify-content: center;
}

button.sliderButton:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}

</style>
