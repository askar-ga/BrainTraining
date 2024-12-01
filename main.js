import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './app.vue';
import router from './router';

// Проверяем доступность API Telegram WebApp
if (typeof window !== 'undefined' && window.Telegram && window.Telegram.WebApp) {
  Telegram.WebApp.expand(); // Разворачиваем приложение на весь экран
    
  // Лог для отладки (можно убрать на продакшене)
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

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount('#app');