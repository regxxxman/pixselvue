<template>
  <div class="bg-zinc-900 text-white max-w-screen z-10 sticky">
    <div class="py-3 mx-5 text-center">
      <h1>
        <h1>
          <span
            class="font-bold text-xl animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent"
            >PixselCraft</span
          >
          - Игровой проект нового поколения
        </h1>
      </h1>
      <div class="text-sm text-gray-500 mx-6">
        <p class="">
          <a class="hover:underline" href="">Разработка и поддержка r3gmvn</a>
          2015-{{ year }}
        </p>
        <!-- <hr /> -->
        <!-- <ul class="p-0 m-0 [&>*]:inline [&>*]:px-0.5">
          <li>vk</li>
          <li>telegram</li>
          <li></li>
          <li></li>
        </ul> -->
      </div>
    </div>

    <!-- <h1>2</h1> -->
  </div>
</template>

<!-- <style>
ul {
  margin: 0; /* Обнуляем значение отступов */
  padding: 4px; /* Значение полей */
}
ul li {
  display: inline; /* Отображать как строчный элемент */
  margin-right: 5px; /* Отступ слева */
  border: 1px solid #000; /* Рамка вокруг текста */
  padding: 3px; /* Поля вокруг текста */
}
</style> -->

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
