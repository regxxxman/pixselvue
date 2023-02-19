<script setup>
import Cursor from '@/components/Cursor.vue'
import bgImage from '@/assets/bg.jpg'
</script>
<template>
  <Cursor />
  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="min-h-screen text-white"
  >
    <h1 class="pt-16">Начать играть</h1>
  </div>
</template>

<style></style>
