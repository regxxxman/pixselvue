<script setup>
import Cursor from '@/components/Cursor.vue'
import bgImage from '@/assets/bg.jpg'
import Cube2Vue from '@/components/Cube2.vue'
</script>
<template>
  <Cursor />
  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="min-h-screen text-white"
  >
    <div>
      <Cube2Vue class="absolute" />
    </div>
    <h1 class="pt-16">О нас</h1>
  </div>
</template>

<style></style>
