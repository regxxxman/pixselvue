<script setup>
import Cursor from '@/components/Cursor.vue'

import { onMounted } from 'vue'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

// // Import Swiper Vue.js components
// import { Swiper, SwiperSlide } from 'swiper/vue'

// // Import Swiper styles
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'

import bgImage from '@/assets/bg.jpg'
import bgImage2 from '@/assets/bg_site2.jpg'

import Cube from '@/components/Cube.vue'
import Cube2 from '@/components/Cube2.vue'
import News from '@/components/NewsHomePage.vue'
import Greetings from '@/components/WalcomeBlock.vue'
import background3d from '@/components/backgrounds/background3d.vue'
import background3dthree from '@/components/backgrounds/background3dthree.vue'
import CanvasVue from '@/components/CanvasVue.vue'
</script>

<template>
  <Cursor />

  <!-- <background3dthree /> -->
  <!-- <div class="overflow-hidden w-full h-full absolute">
    <background3d class="" />
  </div> -->
  <!-- <Cube class="absolute h-screen" /> -->
  <!-- <Cube2 class="absolute h-screen" /> -->
  <CanvasVue class="absolute" />
  <!-- <swiper
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
      <Greetings />
    </swiper-slide>
    <swiper-slide>
      <Greetings />
    </swiper-slide>
  </swiper> -->

  <Greetings />

  <!-- <Cube class="absolute" /> -->

  <News :isbg="true" class="" />

  <!-- <div
    :style="{ background: `url(${bgImage2})` }"
    style="background-size: 100% 100%"
    class="flex"
  >
    <div class="onother">
      <div class="bg-zinc-700/25 backdrop-blur-xl rounded-2xl px-4 py-2 m-3">
        <h1>
          <span
            class="font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
          >
            Дискорд
          </span>
        </h1>
      </div>

      <vkwiget />
    </div>
  </div> -->
</template>

<script>
export default {
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
  onMounted() {},
  components: { CanvasVue }
}
</script>

<style lang="sass" scoped></style>
