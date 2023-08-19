<template>
  <div>
    <ClientOnly>
      <h1 class="text-3xl text-center text-gray-800">Ini Login</h1>
    </ClientOnly>
    <button @click="layoutLogin" class="m-4 border border-blue-500">
      layout login
    </button>
    <button @click="layoutDefault" class="m-4 border border-red-500">
      layout default
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "login",
});
function layoutLogin() {
  setPageLayout("login");
}
function layoutDefault() {
  setPageLayout("default");
}
</script>

<style scoped></style>
