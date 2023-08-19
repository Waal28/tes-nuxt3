<template>
  <div>
    <h1 v-if="loading" class="text-3xl text-center text-gray-800">
      Loading...
    </h1>
    <h1 v-else class="text-3xl text-center text-gray-800">Ini Contact</h1>
  </div>
</template>

<script setup lang="ts">
const { loading } = LoadingComp();
</script>

<style scoped></style>
