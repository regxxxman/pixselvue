<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
</script>

<template>
  <HeaderVue />
  <RouterView />
  <FooterVue />
</template>

<style scoped></style>
