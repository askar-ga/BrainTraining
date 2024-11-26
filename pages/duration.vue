<template>
    <div>
      <h1>Длительность</h1>
      <select v-model="duration">
        <option v-for="minute in 60" :key="minute" :value="minute">{{ minute }} мин</option>
      </select>
      <button @click="goBack">Назад</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const duration = ref(1);
  
  const goBack = () => {
    router.push('/settings');
  };
  </script>
  