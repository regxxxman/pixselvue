<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
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
