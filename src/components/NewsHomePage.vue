<script setup>
import bgImage2 from '@/assets/bg_site2.jpg'
import PaginationNews from './PaginationNews.vue'
// import Cube from '@/components/Cube.vue'
</script>

<template>
  <!-- <Cube class="absolute h-screen w-full" /> -->

  <div
    :style="{ background: `url(${background})` }"
    style="background-size: 100% 100%"
    class="text-white min-h-screen flex flex-col items-center overflow-hidden"
  >
    <div class="bg-zinc-700/25 backdrop-blur-xl rounded-2xl px-4 py-2 m-3">
      <h1>
        <span
          class="font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
        >
          Новости
        </span>
      </h1>
    </div>

    <div class="container grid grid-cols-1 lg:grid-cols-2 flex-col pb-3">
      <div
        v-for="item in items"
        :key="item.id"
        class="bg-zinc-700/25 backdrop-blur-xl rounded-md p-3 my-1"
      >
        <div class="h-full flex flex-col">
          <h1 class="font-bold text-2xl">{{ item.header }}</h1>
          <div class="h-full">
            <img src="@/assets/bg_news.png" alt="" class="rounded mt-1" />
            <p class="text-gray-300 pt-1 text-justify">
              {{ item.text }}
            </p>
          </div>

          <hr class="my-2 h-1 border-0 rounded bg-gray-300" />
          <div class="flex flex-col sm:flex-row sm:space-x-2 space-x-0">
            <div class="flex space-x-2 text-gray-300 justify-around">
              <div class="flex space-x-2 py-2">
                <span class="material-symbols-outlined"> calendar_month </span>
                <p>{{ item.data }}</p>
              </div>
              <div class="flex space-x-2 py-2">
                <span class="material-symbols-outlined"> visibility </span>
                <p>{{ item.views }}</p>
              </div>
            </div>
            <a
              class="py-2 lg:px-0 px-2 btn w-full text-center text-white bg-cyan-400/40 hover:bg-cyan-500/50 hover:scale-105 ease-out transition backdrop-blur-xl rounded-xl"
            >
              Подробнее
            </a>
          </div>
        </div>
      </div>
    </div>
    <PaginationNews />
  </div>
</template>

<script>
export default {
  props: {
    isbg: Boolean
  },
  mounted() {
    console.log(this.isbg)
    this.isbg ? (this.background = bgImage2) : null
  },
  data() {
    return {
      background: null,
      items: [
        {
          id: 0,
          header: 'Февральский вайп AllTheMods',
          text: 'Доброго времени суток, на сервере AllTheMods прошёл вайп и обновление сборки! Заглядывай в полную новость, чтобы узнать подробнее об глобальном обновлении!',
          img: '',
          data: '30.02.2023',
          views: 10
        },
        {
          id: 1,
          header: 'Февральский вайп OneBlock',
          text: 'Доброго времени суток, на сервере OneBlock прошло глобальное обновление и вайп! Заглядывай в полную новость, чтобы узнать подробнее об глобальном обновлении! Доброго времени суток На сервере OneBlock прошло глобальное обновление и вайп! Заглядывай в полную новость, чтобы узнать подробнее об глобальном обновлении!',
          img: '',
          data: '25.02.2023',
          views: 30
        },
        {
          id: 2,
          header: 'Начало разработки сайта',
          text: 'Проект начал свое развитие и ищет энтузиастов',
          img: '',
          data: '19.02.2023',
          views: 15
        }
      ]
    }
  },
  components: { PaginationNews }
}
</script>

<!-- <link rel="stylesheet" href="" /> -->
<style lang="sass">


@import 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200'
</style>
