import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

// Проверяем доступность API Telegram WebApp
if (window.Telegram && window.Telegram.WebApp) {
  Telegram.WebApp.expand(); // Разворачиваем приложение на весь экран
  Telegram.WebApp.disableClosingConfirmation(); // Отключаем запрос на подтверждение закрытия
  console.log('Telegram WebApp initialized:', Telegram.WebApp.initDataUnsafe);

  // Отключение свайпа только внутри приложения
  const appContainer = document.getElementById('app');
  if (appContainer) {
    appContainer.addEventListener(
      'touchmove',
      (event) => {
        event.preventDefault();
      },
      { passive: false }
    );
  }
} else {
  console.warn('Telegram WebApp API is not available.');
}

// Инициализация Vue приложения
createApp(App).use(router).mount('#app');
