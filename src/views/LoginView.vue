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

const email = ref(null)
const password = ref(null)
const router = useRouter()
const errMessage = ref(null)

const username = ref(null)
const password_reapit = ref(null)

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

// const router = new vue-router({routes:})
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
        <form class="bg-gray-500/25 backdrop-blur-xl rounded-md pb-2">
          <h1 class="h-full pt-2 pb-3">
            <h1 class="text-center">
              <span
                class="font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
                >PixselCraft
              </span>
              - {{ isLogin ? 'войти' : 'регистрация' }}
            </h1>
          </h1>
          <div v-if="isLogin" class="login w-72">
            <div class="mx-3">
              <p class="">Емайл</p>
              <input
                v-model="email"
                id="login"
                class="w-full my-0.5 p-1 rounded-lg indent-1 bg-gray-500/25 focus:bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
                type="text"
                placeholder="Емайл"
              />
            </div>
            <div class="mx-3">
              <p class="">Пароль</p>
              <input
                v-model="password"
                id="current-password"
                class="w-full my-0.5 p-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>

          <div v-else class="register w-80">
            <div class="mx-3">
              <p class="my-auto">Емайл</p>
              <input
                v-model="email"
                id="login"
                class="p-1 w-full my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
                type="text"
                placeholder="Емайл"
              />
            </div>
            <div class="mx-3">
              <p class="">Никнейм</p>
              <input
                v-model="username"
                id="username"
                class="p-1 w-full my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
                type="text"
                placeholder="Никнейм"
              />
            </div>
            <div class="mx-3">
              <p class="">Пароль</p>
              <input
                v-model="password"
                id="current-password"
                class="p-1 w-full mr-3 my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
                type="password"
                placeholder="••••••••"
              />
            </div>
            <div class="mx-3">
              <p class="">Повторите пароль</p>
              <input
                v-model="password_reapit"
                id="new-password"
                class="p-1 w-full mr-3 my-1 rounded-lg indent-1 bg-gray-500/25 focus:outline focus:outline-2 focus:outline-white"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </div>
          <p v-if="errMessage" class="pl-3 text-red-500">{{ errMessage }}</p>
          <p class="mt-2 pr-3 text-cyan-500 text-right">Забыли пароль?</p>
        </form>

        <div class="flex justify-center pt-2">
          <a
            v-if="isLogin"
            @click="auth"
            class="btn w-full text-center text-white bg-cyan-500/25 hover:bg-cyan-500/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 mr-1 rounded-xl"
          >
            Войти
          </a>
          <a
            v-else
            @click="register"
            class="btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 rounded-xl"
          >
            Зарегистрироваться
          </a>
          <router-link
            v-if="isLogin"
            to="/login?q=register"
            class="btn w-full text-center text-cyan-500 bg-cyan-900/25 hover:bg-cyan-900/50 hover:scale-110 ease-out transition backdrop-blur-xl p-2 ml-1 rounded-xl"
          >
            Регистрация
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: true
    }
  },
  watch: {
    $route() {
      this.$route.query.q == 'register'
        ? (this.isLogin = false)
        : (this.isLogin = true)
      console.log(this.$route.query.q)
    }
  },
  mounted() {
    this.$route.query.q == 'register'
      ? (this.isLogin = false)
      : (this.isLogin = true)
    console.log(this.$route.query.q)
  }
}
</script>

<style></style>
