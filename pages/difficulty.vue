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
    { label: 'Единицы + Единицы (25%)', value: 'easy' },
    { label: 'Десятки + Десятки (50%)', value: 'medium' },
    { label: 'Сотни + Сотни (75%)', value: 'hard' },
    { label: 'Тысячи + Тысячи (100%)', value: 'expert' },
  ],
  subtraction: [
    { label: 'Единицы - Единицы (25%)', value: 'easy' },
    { label: 'Десятки - Десятки (50%)', value: 'medium' },
    { label: 'Сотни - Сотни (75%)', value: 'hard' },
    { label: 'Тысячи - Тысячи (100%)', value: 'expert' },
  ],
  multiplication: [
    { label: 'Единицы × Единицы (25%)', value: 'easy' },
    { label: 'Десятки × Единицы (50%)', value: 'medium' },
    { label: 'Сотни × Единицы (75%)', value: 'hard' },
    { label: 'Десятки × Десятки (100%)', value: 'expert' },
  ],
  division: [
    { label: 'Десятки ÷ Единицы (25%)', value: 'easy' },
    { label: 'Сотни ÷ Единицы (50%)', value: 'medium' },
    { label: 'Тысячи ÷ Единицы (75%)', value: 'hard' },
    { label: 'Тысячи ÷ Десятки (100%)', value: 'expert' },
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
