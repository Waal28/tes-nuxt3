<template>
  <div>
    <h1 class="text-3xl text-center text-gray-800">Ini Home</h1>
    <div class="border-2 border-yellow-500 p-4 m-2">
      <p class="text-2xl">Ini tag img biasa</p>
      <img :src="gambar__" alt="gambar tes" width="300px" />
    </div>
    <div class="border-2 border-red-500 p-4 m-2">
      <p class="text-2xl">Ini tag img yg dimasuk ke variable</p>
      <div v-html="tes"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gambar from "../assets/tes.jpg";

const gambar__ = gambar;

const tes = `<img src="${gambar}" alt="gambar tes" width="300px" />`;
</script>
