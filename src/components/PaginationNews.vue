<template>
  <nav class="sm:w-auto w-80">
    <ul
      class="flex sm:w-full w-9/12 mx-auto sm:overflow-hidden overflow-y-auto items-center h-8 border-gray-300 text-gray-300 rounded"
    >
      <li
        class="bg-zinc-700/25 left-0 ml-1 sm:static absolute z-10 rounded-md border-2 border-gray-300/20 flex items-center"
      >
        <span class="material-symbols-outlined"> navigate_before </span>
      </li>

      <li
        class="px-3 mx-0.5 h-8 bg-zinc-700/25 rounded-md border-2 border-gray-300/20 flex items-center"
        v-for="n in 10"
      >
        <a href="">{{ n }}</a>
      </li>

      <li
        class="bg-zinc-700/25 sm:static absolute right-0 mr-1 z-10 rounded-md border-2 border-gray-300/20 flex items-center"
      >
        <span class="material-symbols-outlined"> navigate_next </span>
      </li>
    </ul>
  </nav>
</template>
<script setup lang="ts"></script>
