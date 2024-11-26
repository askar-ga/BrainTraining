<template>
    <div>
      <h1>Время показа задачи</h1>
      <select v-model="taskTime">
        <option value="0">Бесконечно</option>
        <option v-for="second in 60" :key="second" :value="second">{{ second }} сек</option>
      </select>
      <button @click="goBack">Назад</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const taskTime = ref(0);
  
  const goBack = () => {
    router.push('/settings');
  };
  </script>
  