<script setup>
import Cursor from '@/components/Cursor.vue'
import Cube from '@/components/Cube.vue'
import bgImage from '@/assets/bg.jpg'

import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const errMessage = ref('')

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Success registered')
      router.push('/')
    })
    .catch((err) => {
      console.log(err.code)
      alert(err.message)
    })
}

const auth = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log('Success registered')
      router.push('/')
    })
    .catch((err) => {
      console.log(err.code)
      switch (err.code) {
        case 'auth/invalid-email':
          errMessage.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMessage.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMessage.value = 'Incorrect password'
          break
        default:
          errMessage.value = 'Email or password was incorrect'
          break
      }
    })
}
</script>
<template>
  <Cursor />
  <Cube class="absolute" />

  <div
    :style="{ background: `url(${bgImage})` }"
    style="background-size: 100% 100%"
    class="min-h-screen text-white"
  >
    <form class="min-h-screen min-w-screen flex">
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
              v-model="email"
              id="login"
              class="m-3 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
              type="text"
              placeholder="Логин"
            />
          </div>
          <div class="flex">
            <p class="pl-3 m-auto">Пароль</p>
            <input
              v-model="password"
              id="password"
              class="m-3 mb-2 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
              type="password"
              placeholder="Пароль"
            />
          </div>
          <p v-if="errMessage" class="pl-3 text-red-500">{{ errMessage }}</p>
          <p class="pr-3 text-cyan-500 text-right">Забыли пароль?</p>
        </div>
        <div class="flex justify-center pt-2">
          <a
            @click="auth"
            class="btn w-full text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl"
          >
            Войти
          </a>
          <a
            @click="register"
            class="btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1 rounded-xl"
          >
            Регистрация
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<style></style>
