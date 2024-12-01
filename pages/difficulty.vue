<template>
  <div class="difficulty-container">
    <h1 class="title">Выберите уровни сложности</h1>
    <div v-for="(levels, category) in difficultyOptions" :key="category" class="category">
      <h2 class="category-title">{{ categoryLabels[category] }}</h2>
      <div class="levels">
        <button 
          v-for="level in levels" 
          :key="level.value" 
          :class="['level-btn', { active: isSelected(category, level.value) }]" 
          @click="toggleLevel(category, level.value)">
          {{ level.label }}
        </button>
      </div>
    </div>
    <button class="back-btn" @click="goBack">Назад</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useSettingsStore } from '@/stores/settingsStore';

const router = useRouter();
const store = useSettingsStore();

const difficultyOptions = {
  addition: [
    { label: '5+5 (25%)', value: 'easy' },
    { label: '15+15 (50%)', value: 'medium' },
    { label: '255+255 (75%)', value: 'hard' },
    { label: '5255+5255 (100%)', value: 'expert' },
  ],
  subtraction: [
    { label: '5-5 (25%)', value: 'easy' },
    { label: '25-25 (50%)', value: 'medium' },
    { label: '255-255 (75%)', value: 'hard' },
    { label: '5255-5255 (100%)', value: 'expert' },
  ],
  multiplication: [
    { label: '5×5 (25%)', value: 'easy' },
    { label: '25×5 (50%)', value: 'medium' },
    { label: '255×5 (75%)', value: 'hard' },
    { label: '25×25 (100%)', value: 'expert' },
  ],
  division: [
    { label: '25÷5 (25%)', value: 'easy' },
    { label: '255÷5 (50%)', value: 'medium' },
    { label: '2525÷5 (75%)', value: 'hard' },
    { label: '2525÷25 (100%)', value: 'expert' },
  ],
};

const categoryLabels = {
  addition: 'Сложение',
  subtraction: 'Вычитание',
  multiplication: 'Умножение',
  division: 'Деление',
};

const isSelected = (category, level) => store.difficulties[category].includes(level);

const toggleLevel = (category, level) => {
  store.toggleDifficulty(category, level);
};

const goBack = () => router.push('/settings');
</script>

<style scoped>
/* Добавьте стили для страницы */
</style>
