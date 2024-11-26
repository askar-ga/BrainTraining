<template>
  <div class="settings-container">
    <h1 class="title">Настройки</h1>
    <div class="settings-list">
      <button class="setting-btn" @click="goToDifficulty">
        <span class="btn-text-left">Сложность</span>
        <span class="btn-text-right">{{ selectedDifficulty }}</span>
      </button>
      <button class="setting-btn" @click="goToDuration">
        <span class="btn-text-left">Длительность</span>
        <span class="btn-text-right">{{ selectedDuration }}</span>
      </button>
      <button class="setting-btn" @click="goToTaskTime">
        <span class="btn-text-left">Время показа задачи</span>
        <span class="btn-text-right">{{ selectedTaskTime }}</span>
      </button>
      <button class="setting-btn" @click="goToLanguage">
        <span class="btn-text-left">Язык</span>
        <span class="btn-text-right">{{ selectedLanguage }}</span>
      </button>
    </div>
    <button class="back-btn" @click="goBack">Назад</button>
  </div>
</template>




<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const selectedDifficulty = ref('Легкий');
const selectedDuration = ref('5 минут');
const selectedTaskTime = ref('10 секунд');
const selectedLanguage = ref('Русский');

const goToDifficulty = () => router.push('/difficulty');
const goToDuration = () => router.push('/duration');
const goToTaskTime = () => router.push('/task-time');
const goToLanguage = () => router.push('/language');
const goBack = () => router.push('/');
</script>


<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background-color: #f7f7f7;
}

.title {
  font-size: 32px;
  font-weight: 400; /* Нормальная жирность */
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%; /* Занимает всю ширину */
}

.setting-btn {
  font-family: 'Roboto', sans-serif;
  width: 100%; /* Кнопка занимает всю ширину с отступами */
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px; /* Отступ по бокам */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 400; /* Убираем жирность */
  color: #333;
  cursor: pointer;
}

.setting-btn:hover {
  background-color: #f0f0f0;
}

.btn-text-left {
  font-weight: bold;
}

.btn-text-right {
  font-size: 14px;
  color: #555;
}

.back-btn {
  width: 100%; /* Кнопка занимает всю ширину с отступами */
  height: 60px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: #e0e0e0;
  color: #333;
  margin-top: 20px; /* Отступ сверху */
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.back-btn:hover {
  background-color: #d0d0d0;
}

</style>
