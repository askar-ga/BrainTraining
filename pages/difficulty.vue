<template>
    <div>
      <h1>Сложность</h1>
      <button @click="toggleAddition">5 + 5 (25%)</button>
      <button @click="toggleSubtraction">15 + 15 (50%)</button>
      <button @click="toggleMultiplication">225 + 225 (75%)</button>
      <button @click="toggleDivision">5275 + 5275 (100%)</button>
      <button @click="goBack">Назад</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  const addition = ref(false);
  const subtraction = ref(false);
  const multiplication = ref(false);
  const division = ref(false);
  
  const toggleAddition = () => {
    addition.value = !addition.value;
  };
  const toggleSubtraction = () => {
    subtraction.value = !subtraction.value;
  };
  const toggleMultiplication = () => {
    multiplication.value = !multiplication.value;
  };
  const toggleDivision = () => {
    division.value = !division.value;
  };
  
  const goBack = () => {
    router.push('/settings');
  };
  </script>
  