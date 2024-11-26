<template>
  <div class="trainer">
    <div class="question-container">
      <p class="math-task">{{ formattedQuestion }}</p>
    </div>

    <div class="timer-bar">
      <div class="progress" :style="{ width: progressWidth + '%' }"></div>
    </div>

    <div class="keyboard">
      <div class="key-row">
        <button class="key-btn" @click="addToAnswer('1')">1</button>
        <button class="key-btn" @click="addToAnswer('2')">2</button>
        <button class="key-btn" @click="addToAnswer('3')">3</button>
      </div>
      <div class="key-row">
        <button class="key-btn" @click="addToAnswer('4')">4</button>
        <button class="key-btn" @click="addToAnswer('5')">5</button>
        <button class="key-btn" @click="addToAnswer('6')">6</button>
      </div>
      <div class="key-row">
        <button class="key-btn" @click="addToAnswer('7')">7</button>
        <button class="key-btn" @click="addToAnswer('8')">8</button>
        <button class="key-btn" @click="addToAnswer('9')">9</button>
      </div>
      <div class="key-row">
        <button class="key-btn" @click="addToAnswer('0')">0</button>
        <button class="key-btn" @click="clearAnswer()">Удалить</button>
        <button class="key-btn" @click="checkAnswer()">Проверить</button>
      </div>
      <div class="actions">
        <button class="action-btn" @click="skipQuestion()">Пропустить</button>
        <button class="action-btn" @click="goToMainPage()">Назад</button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const num1 = ref(0);
const num2 = ref(0);
const userAnswer = ref('');
const isAnswerCorrect = ref(null);
const questionText = ref('');
const router = useRouter();
const timeLeft = ref(60); 
const gameFinished = ref(false); 
const solved = ref(0); 
const skipped = ref(0); 
const progressWidth = ref(100); 
let timer;

// Форматированный вопрос с ответом
const formattedQuestion = ref('');

// Генерация задачи
const generateQuestion = () => {
  num1.value = Math.floor(Math.random() * 10) + 1;
  num2.value = Math.floor(Math.random() * 10) + 1;
  userAnswer.value = '';
  formattedQuestion.value = `${num1.value} + ${num2.value} = ?`;
};

// Добавление ответа
const addToAnswer = (value) => {
  userAnswer.value += value;
  formattedQuestion.value = `${num1.value} + ${num2.value} = ${userAnswer.value}`;
};

// Удаление ответа
const clearAnswer = () => {
  userAnswer.value = '';
  formattedQuestion.value = `${num1.value} + ${num2.value} = ?`;
};

// Проверка ответа
const checkAnswer = () => {
  const correctAnswer = num1.value + num2.value;
  isAnswerCorrect.value = parseInt(userAnswer.value) === correctAnswer;

  if (isAnswerCorrect.value) {
    solved.value++;
    fadeOutAndGenerate();
  } else {
    clearAnswer();
  }
};

// Пропуск задачи
const skipQuestion = () => {
  skipped.value++;
  fadeOutAndGenerate();
};

// Плавная смена задачи
const fadeOutAndGenerate = () => {
  formattedQuestion.value = ''; // Исчезает текст
  setTimeout(() => {
    generateQuestion(); // Появляется новый вопрос
  }, 200);
};

// Таймер
const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      progressWidth.value = (timeLeft.value / 60) * 100;
    } else {
      clearInterval(timer);
      gameFinished.value = true;
    }
  }, 1000);
};

// Инициализация
onMounted(() => {
  generateQuestion();
  startTimer();
});

onBeforeUnmount(() => {
  clearInterval(timer);
});

// Возврат на главную страницу
const goToMainPage = () => {
  router.push('/');
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
.trainer {
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.question-container {
  background-color: #add8e6;
  width: calc(100% - 10px);
  height: 40%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.math-task {
  font-size: 36px;
  color: #000000;
  transition: opacity 0.2s ease-in-out;
}

.timer-bar {
  margin: 10px 0;
}

.keyboard {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.key-row {
  display: flex;
  justify-content: space-between;
}

.key-btn {
  flex: 1;
  margin: 5px;
  background-color: #555555;
  color: #ffffff;
  font-size: 18px;
  border: none;
  border-radius: 8px;
  height: 60px;
}

.key-btn:hover {
  background-color: #777777;
}

.actions {
  display: flex;
  justify-content: space-between;
}

.action-btn {
  flex: 1;
  margin: 5px;
  background-color: #333333;
  color: #ffffff;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  height: 40px;
}

</style>
