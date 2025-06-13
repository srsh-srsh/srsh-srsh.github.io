<script setup>
import HomeComponent from '../components/HomeComponent.vue';
import HomeDisplay from '../components/HomeDisplayComponent.vue';
</script>

<template>
  <main>
    <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Newa&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tilt Neon">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href=".\styles.css" />
    <title>Sreesh Poudyal</title>
</head>
<body>
    <div style="width: 100%; margin: 0; padding: 0; left: 0; top: 0">        
        <HomeComponent />
        <HomeDisplay />
    </div>
</body>
  </main>
</template>
