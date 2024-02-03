<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/HeaderVue.vue'
import FooterVue from './components/FooterVue.vue'
import Cursor from '@/components/Cursor.vue'
</script>

<template>
  <HeaderVue />
  <div class="page min-h-screen">
    <!--    <Cursor :key="$route.fullPath" />-->
    <RouterView />
    <FooterVue />
  </div>
</template>

<script></script>

<style scoped></style>