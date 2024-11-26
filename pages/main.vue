<template>
  <div class="menu-container">
    <h1 class="title">Тренажер для мозга</h1>
    <div class="menu-buttons">
      <button @click="goToProgress" class="menu-btn progress-btn">Прогресс</button>
      <button @click="goToSettings" class="menu-btn settings-btn">Настройки</button>
      <button @click="goToGame" class="menu-btn start-btn">Старт</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToProgress = () => {
  router.push('/progress');
};

const goToSettings = () => {
  router.push('/settings');
};

const goToGame = () => {
  router.push('/game');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.menu-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background-color: #f7f7f7; /* Светлый фон */
  padding-top: 1px; /* Добавим отступ сверху */
  font-family: 'Roboto', sans-serif; /* Применить шрифт ко всей странице */
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1px; /* Отступ от заголовка */
}

.menu-buttons {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px; /* Отступ между кнопками */
  padding: 20px 5px; /* Отступ от краёв экрана */
  box-sizing: border-box; /* Учитывать padding в размерах */
}

.menu-btn {
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 180px; /* Увеличена высота кнопок */
  font-size: 24px;
  font-weight: 400; /* Обычная жирность */
  color: white;
  border: none;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.start-btn {
  background-color: #41af39; /* Зеленый для старта */
}

.progress-btn {
  background-color: #2196F3; /* Голубой для прогресса */
}

.settings-btn {
  background-color: #eac151; /* Светлый желтый для настроек */
}

.menu-btn:hover {
  opacity: 0.8; /* Эффект при наведении */
}

.start-btn:hover {
  background-color: #4bad44; /* Темнее на 10% при наведении */
}

.progress-btn:hover {
  background-color: #2195f3f0; /* Темнее на 10% при наведении */
}

.settings-btn:hover {
  background-color: #e2c060; /* Темнее на 10% при наведении */
}

</style>
