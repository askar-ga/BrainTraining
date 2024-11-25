<template>
  <div class="trainer">
    <h1>Тренажер для ума</h1>
    <div class="question">
      <p class="math-task">{{ questionText }}</p>
      <input
        type="tel"
        v-model="userAnswer"
        placeholder="Ваш ответ"
        ref="inputElement"
        autofocus
      />
      <button class="check-btn" @click="checkAnswer">
        <span class="check-icon">✔</span>
        <span class="check-text">Проверить</span>
      </button>
      <p v-if="isAnswerCorrect !== null" class="feedback">
  {{ isAnswerCorrect ? 'Правильно!' : 'Неправильно, попробуйте еще раз.' }}
</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const num1 = ref(0);
const num2 = ref(0);
const userAnswer = ref('');
const questionText = ref('');
const isAnswerCorrect = ref(null);

// Функция для генерации нового вопроса
const generateQuestion = () => {
  num1.value = Math.floor(Math.random() * 10) + 1;
  num2.value = Math.floor(Math.random() * 10) + 1;
  questionText.value = `${num1.value} + ${num2.value} = ?`;
};

// Функция для проверки ответа
const checkAnswer = () => {
  const correctAnswer = num1.value + num2.value;
  isAnswerCorrect.value = parseInt(userAnswer.value) === correctAnswer;
  if (isAnswerCorrect.value) {
    generateQuestion(); // Генерируем новый вопрос только при правильном ответе
  }
  userAnswer.value = ''; // Очищаем поле ввода
  focusInput(); // Устанавливаем фокус на поле
};

// Устанавливаем фокус на поле ввода
const focusInput = () => {
  const inputEl = document.querySelector('input[autofocus]');
  if (inputEl) inputEl.focus();
};

// Инициализация вопроса при загрузке страницы
onMounted(() => {
  generateQuestion();
  focusInput();
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.trainer {
  text-align: center;
  margin-top: 20px;
  background-color: #6dcdd6; /* Тёмный фон */
  color: #000000; /* Белый текст */
  min-height: 100vh; /* Фон на весь экран */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

h1 {
  margin-top: 10px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 36px; /* Можно изменить в зависимости от дизайна */
  font-weight: bold;
  color: #131212;
}

.math-task {
  font-size: 72px !important;
  font-weight: normal !important;
  margin: 20px 0;
}

input {
  padding: 10px;
  font-size: 18px;
  width: 200px;
  margin: 10px 0;
}

.check-btn {
  width: 225px; /* Ширина кнопки */
  height: 80px; /* Высота увеличена */
  font-size: 16px;
  background-color: #90ee90;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 0 auto; /* Выравнивание по центру */
  text-align: center;
}

.check-icon {
  font-size: 24px;
}

.check-text {
  font-size: 14px;
  margin-top: 5px;
}

.question p {
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  font-weight: bold;
  color: #131212;
}

.feedback {
  font-size: 20px !important; /* Уменьшает размер шрифта */
  font-weight: normal; /* Сбрасывает жирность */
  color: #000000; /* Устанавливает цвет текста */
}
</style>

