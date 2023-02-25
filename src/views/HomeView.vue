<script setup>
import Cursor from '@/components/Cursor.vue'

import { onMounted } from 'vue'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import bgImage from '@/assets/bg.jpg'
import bgImage2 from '@/assets/bg_site2.jpg'

import Cube from '@/components/Cube.vue'
import Cube2 from '@/components/Cube2.vue'
import News from '@/components/News.vue'
import Greetings from '@/components/Greetings.vue'
</script>

<template>
  <Cursor />
  <!-- <Cube class="absolute h-screen" /> -->
  <!-- <Cube2 class="absolute h-screen" /> -->

  <swiper
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class=""
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="true"
    :scrollbar="{ draggable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide>
      <!-- <Cube class="absolute h-screen" /> -->
      <Greetings />
    </swiper-slide>
    <swiper-slide>
      <Greetings />
    </swiper-slide>
  </swiper>

  <!-- <Cube class="absolute" /> -->

  <News class="" />
</template>

<script>
export default {
  components: {
    Swiper,
    SwiperSlide,
    Greetings
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y]
    }
  },
  data() {
    return {}
  },
  onMounted() {}
}
</script>

<style lang="sass" scoped></style>
