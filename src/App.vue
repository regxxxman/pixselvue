<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
</script>

<template>
  <HeaderVue />
  <div class="page min-h-screen">
    <RouterView />
    <FooterVue />
  </div>
</template>

<script></script>

<style scoped></style>
