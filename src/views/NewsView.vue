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
    <div class="flex h-screen">
      <h1 class="m-auto">Новость</h1>
    </div>
  </div>
</template>
