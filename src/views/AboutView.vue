<template>
  <div>
    <div class="textbox">
      <p class="neonWhite">
        Programmer by day, Designer by night, my experience and education provide me with a whole host of resources at my disposal to create clear cut and effective designs. Currently looking for a full time job in Frontend, Fullstack, or UI/UX design.
      </p>
      <p class="neonWhite">
        Currently looking for my first full time role in tech. On this platform, you'll find a handful of my projects, reflecting my passion for blending technology and creativity. Explore and get inspired by the intersection of code and design.
      </p>
    </div>

    <div class="timeline-section">
      <h2 class="timeline-title neonWhite" style="color: white;">My Journey</h2>
      <ul class="timeline">

        <li class="timeline-item">
          <div class="timeline-entry">
            <div class="year">2024</div>
            <div class="bubble">
              <ul>
                <li>Completed dual degrees at University of Massachusetts Amherst: BA Political Science & BS Computer Science.</li>
                <li>Began a part time role as a Frontend Engineer at CardinalTalent AI: designing AI interviewer tool webpages with React, TypeScript, Laravel, and Figma.</li>
                <li>Participated in Hack(H)er Hackathon: built full-stack React/MongoDB app, won "Best Use of MongoDB Atlas."</li>
                <li>Briefly worked as a Web and Illustration Intern at Sciquel: created website assets and +5 illustrations with Bootstrap and Adobe Illustrator.</li>
              </ul>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-entry">
            <div class="year">2023</div>
            <div class="bubble">
              <ul>
                <li>Finished my Junior year at UMass Amherst, with a focus on Computer Science and Political Science.</li>
              </ul>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-entry">
            <div class="year">2022</div>
            <div class="bubble">
              <ul>
                <li>Finished my Sophomore year at UMass Amherst, with a focus on Computer Science and Political Science.</li>
              </ul>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-entry">
            <div class="year">2021</div>
            <div class="bubble">
              <ul>
                <li>Was a Research Assistant at UMass Amherst: contributed to Renaissance art research and co-authored article.</li>
                <li>Policy Intern at New York State Senate: analyzed events and authored 12 memos to inform campaign strategies.</li>
              </ul>
            </div>
          </div>
        </li>

        <li class="timeline-item">
          <div class="timeline-entry">
            <div class="year">2020</div>
            <div class="bubble">
              <ul>
                <li>Began role as Web and Graphic Designer at SiteSaga: designed WordPress prototypes, graphics, and SEO-optimized blog pages.</li>
                <li>Started Project Intern position at Glacier Systems Inc: created company website with Bootstrap, designed logos, managed social media campaigns.</li>
              </ul>
            </div>
          </div>
        </li>

      </ul>
    </div>
  </div>

  <div>
    <h2 class="timeline-title neonWhite" style="color: white;">My Skills</h2>
    <div class="custom-marquee">
      <div class="custom-marquee-track">
        <div
          v-for="img in imagesRepeated"
          :key="img.url"
          class="image-wrapper"
        >
          <img
            :src="img.url"
            :alt="img.name"
            class="marquee-img"
          />
          <span class="image-label">{{ img.name }}</span>
        </div>
      </div>
    </div>
  </div>
<div class="resume-container" style="width: 150px; border: 3px solid black; border-radius: 15px; margin-bottom: 2rem; justify-self: center;">
  <a href="/resume" style="text-decoration: none; color: black; display: flex; flex-direction: row; align-items: center; padding: 0.5rem; justify-content: center;">
    <img src="../images/icons/download.png" alt="Resume" style="width: 30px; height: 30px; border-radius: 50%; border: 2px solid black; object-fit: cover; margin-right: 0.5rem;" />
    <h2 style="margin: 0; font-size: 1.2rem;">Resume</h2>
  </a>
</div>

</template>

<script setup>
import Node from '@/images/icons/Node_logo.png'
import Java from '@/images/icons/java_logo.png'
import Figma from '@/images/icons/Figma_logo.png'
import Python from '@/images/icons/Python_logo.png'
import Vue from '@/images/icons/Vue_logo.png'
import React from '@/images/icons/React_logo.png'
import Illustrator from '@/images/icons/Illustrator_logo.png'
import Photoshop from '@/images/icons/Photoshop_logo.png'
import Php from '@/images/icons/Php_logo.png'
import Wordpress from '@/images/icons/Wordpress_logo.png'
import Flutter from '@/images/icons/Flutter_logo.png'
import Scala from '@/images/icons/Scala_logo.png'
import HTML from '@/images/icons/HTML_logo.png'
import Csharp from '@/images/icons/Csharp_logo.png'
import Rust from '@/images/icons/Rust_logo.png'
import Javascript from '@/images/icons/javascript_logo.png'
import Vue3Marquee from 'vue3-marquee'

const images = [
  { name: 'NodeJS', url: Node, link: 'https://github.com' },
  { name: 'Java', url: Java, link: 'https://github.com' },
  { name: 'Figma', url: Figma, link: 'https://github.com' },
  { name: 'Python', url: Python, link: 'https://github.com' },
  { name: 'VueJS', url: Vue, link: 'https://github.com' },
  { name: 'ReactJS', url: React, link: 'https://github.com' },
  { name: 'Adobe Illustrator', url: Illustrator, link: 'https://github.com' },
  { name: 'Php', url: Php, link: 'https://github.com' },
  { name: 'Adobe Photoshop', url: Photoshop, link: 'https://github.com' },
  { name: 'Wordpress', url: Wordpress, link: 'https://github.com' },
  { name: 'Flutter', url: Flutter, link: 'https://github.com' },
  { name: 'Scala', url: Scala, link: 'https://github.com' },
  { name: 'Csharp', url: Csharp, link: 'https://github.com' },
  { name: 'Rust', url: Rust, link: 'https://github.com' },
  { name: 'HTML', url: HTML, link: 'https://github.com' },
  { name: 'Javascript', url: Javascript, link: 'https://github.com' },
]

const imagesRepeated = [...images, ...images]
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Newa&display=swap');
@import url('https://fonts.googleapis.com/css?family=Tilt+Neon');

nav ul {
  display: flex;
  list-style: none;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
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

.neonWhite {
  color: rgb(0, 0, 0);
}

.custom-marquee {
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
}

.custom-marquee-track {
  display: flex;
  width: max-content;
  animation: scroll-left 30s linear infinite;
}

.marquee-img {
  height: 80px;
  margin: 2rem;
}

.image-wrapper {
  position: relative;
  display: inline-block;
  margin: 0 0rem;
}

.image-label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: black;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
  white-space: nowrap;
}

.image-wrapper:hover .image-label {
  opacity: 1;
}


@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
}

.image-left,
.image-center {
  width: 200px;
  height: auto;
  margin: 10px;
}

.footer-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  padding: 20px;
  background-color: #222;
}

.footer-content img {
  width: 40px;
  height: 40px;
  transition: transform 0.3s;
}

.footer-content img:hover {
  transform: scale(1.1);
}

.footer-text {
  color: white;
  margin-top: 10px;
}

.timeline-section {
  margin-top: 4rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.resume-title {
  font-size: 1.5rem;
  text-align: center;
}

.timeline {
  list-style: none;
  padding: 0;
  max-width: 600px;
  width: 100%;
}

.timeline-item {
  position: relative;
  margin: 1.5rem 0;
}

.year {
  font-weight: bold;
  color: rgb(255, 255, 255);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(50px);
  padding: 0.5rem 1rem;
  border: 3px solid rgb(255, 255, 255);
  border-radius: 10px;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s ease;
  z-index: 5;
}

.year:hover {
  transform: scale(1.05);
  color: #000000;
  border-color: #000000;
  background-color: #ffffff;
}

.bubble {
  position: static;
  margin-top: 1rem;
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  font-size: 1rem;
}

@media (min-width: 769px) {
  .bubble {
    position: absolute;
    left: 20%;
    top: 50%;
    transform: translateY(-50%) translateX(-10px);
    width: 550px;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    user-select: none;
    z-index: 10;
    transition: opacity 0.3s ease, transform 0.3s ease;
  }

  .timeline-item:hover .bubble {
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
    pointer-events: auto;
    user-select: text;
  }
}
</style>
