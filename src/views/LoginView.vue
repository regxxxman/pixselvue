<script setup>
import Cursor from '@/components/Cursor.vue'
import Cube from '@/components/Cube.vue'
import bgImage from '@/assets/bg.jpg'
</script>
<template>
  <Cursor />
  <Cube class="absolute" />

  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="min-h-screen text-white"
  >
    <div class="h-screen w-screen flex">
      <div class="flex flex-col m-auto">
        <div class="bg-gray-500/25 backdrop-blur-xl rounded-md pb-2">
          <h1 class="h-full pt-2 pb-3 text-center">
            <h1 class="text-center">
              <span
                class="font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
                >PixselCraft</span
              >
              - войти
            </h1>
          </h1>
          <div class="flex">
            <p class="pl-1 m-auto">Логин</p>
            <input
              id="login"
              class="m-3 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
              type="text"
              placeholder="Логин"
            />
          </div>
          <div class="flex">
            <p class="pl-3 m-auto">Пароль</p>
            <input
              id="password"
              class="m-3 mb-2 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
              type="password"
              placeholder="Пароль"
            />
          </div>
          <p class="pr-3 text-cyan-500 text-right">Забыли пароль?</p>
        </div>
        <div class="flex justify-center pt-2">
          <a
            class="btn w-full text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl"
          >
            Войти
          </a>
          <a
            class="btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1 rounded-xl"
          >
            Регистрация
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
