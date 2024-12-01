<template>
  <div class="settings-container">
    <h1 class="title">Настройки</h1>
    <div class="settings-list">
      <nuxt-link to="/difficulty" class="setting-btn">
        <span class="btn-text-left">Сложность</span>
        <span class="btn-text-right">{{ difficultySummary }}</span>
      </nuxt-link>
      <nuxt-link to="/duration" class="setting-btn">
        <span class="btn-text-left">Длительность</span>
        <span class="btn-text-right">{{ gameDuration }} мин.</span>
      </nuxt-link>
      <nuxt-link to="/task-time" class="setting-btn">
        <span class="btn-text-left">Время показа задачи</span>
        <span class="btn-text-right">{{ taskTimeSummary }}</span>
      </nuxt-link>
      <nuxt-link to="/language" class="setting-btn">
        <span class="btn-text-left">Язык</span>
        <span class="btn-text-right">{{ languageSummary }}</span>
      </nuxt-link>
    </div>
    <nuxt-link to="/" class="back-btn">Назад</nuxt-link>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useSettingsStore } from '@/stores/settingsStore';

const store = useSettingsStore();

const difficultySummary = computed(() => {
  const difficulties = store.difficulties || {};
  const selected = Object.entries(difficulties)
    .filter(([_, levels]) => levels && levels.length > 0)
    .map(([category]) => category)
    .join(', ');
  return selected || 'Не выбрано';
});

const gameDuration = computed(() => store.gameDuration || 5);
const taskTimeSummary = computed(() => store.selectedTaskTime || 'Не выбрано');
const languageSummary = computed(() => store.selectedLanguage || 'Не выбрано');
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
  font-weight: 400;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
}

.settings-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
}

.setting-btn {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 60px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 400;
  color: #333;
  cursor: pointer;
  text-decoration: none;
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
  width: 100%;
  height: 60px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  background-color: #e0e0e0;
  color: #333;
  margin-top: 20px;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.back-btn:hover {
  background-color: #d0d0d0;
}
</style>
