<template>
    <div>
      <h1>Выбор языка</h1>
      <select v-model="language">
        <option value="ru">Русский</option>
        <option value="en">English</option>
        <!-- Вы можете добавить больше языков по необходимости -->
      </select>
      <button @click="goBack">Назад</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const language = ref('ru');
  
  const goBack = () => {
    router.push('/settings');
  };
  </script>
  