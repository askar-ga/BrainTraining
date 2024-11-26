<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
// Если необходима дополнительная логика, можно добавить её здесь.
</script>

<style scoped>
/* Локальный стиль, если требуется что-то специфичное для этой страницы */
</style>

<style global>
/* Глобальные стили для блокировки прокрутки и смахивания */
html, body {
  margin: 0; /* Убираем отступы */
  padding: 0; /* Убираем отступы */
  width: 100%; /* Задаем ширину */
  height: 100%; /* Задаем высоту */
  overflow: hidden; /* Блокируем прокрутку */
  touch-action: none; /* Отключаем смахивание */
}

#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
