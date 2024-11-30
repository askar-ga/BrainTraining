<template>
  <div class="trainer">
    <div class="question-container">
      <p v-if="formattedQuestion" class="math-task">{{ formattedQuestion }}</p>
    </div>

    <!-- Таймер -->
    <div class="timer-container">
      <div class="timer-bar">
        <div class="progress" :style="{ width: progressWidth + '%' }"></div>
      </div>
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

    <!-- Окно результата -->
    <div v-if="gameFinished" class="result-overlay">
      <div class="result-content">
        <h2>Статистика раунда</h2>
        <p>{{ resultText }}</p>
        <button @click="goToMainPage" class="main-page-btn">На главную</button>
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
const timeLeft = ref(10); // Задаем время продолжительности игры
const gameDuration = ref(10); // Задайте продолжительность (например, 20 секунд)
timeLeft.value = gameDuration.value; // Инициализация времени
const gameFinished = ref(false); 
const solved = ref(0); 
const skipped = ref(0); 
const progressWidth = ref(100); 
let timer;
const resultText = ref('');

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
    fadeOutAndGenerate(); // Смена задачи только при правильном ответе
  }

  // Проверяем условия завершения игры
  checkGameEndConditions();
};

// Плавная смена задачи
const fadeOutAndGenerate = () => {
  formattedQuestion.value = null; // Полностью скрываем текст
  generateQuestion(); // Быстрее появляется новая задача
};

// Таймер
const startTimer = () => {
  timer = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--;
      progressWidth.value = (timeLeft.value / gameDuration.value) * 100;
    } else {
       // Проверка завершения игры, когда таймер истек
       checkGameEndConditions();
    }
  }, 1000);
};

// Проверка условий завершения игры
const checkGameEndConditions = () => {
  // Завершаем игру, если таймер закончился и есть решенные или пропущенные задачи
  if (timeLeft.value === 0 && (isAnswerCorrect.value || skipped.value > 0)) {
    finishGame();
  }
};

// Пропуск задачи
const skipQuestion = () => {
  skipped.value++; // Увеличиваем количество пропущенных задач
  generateQuestion(); // Генерируем новый вопрос
};

// Пропуск задачи
const skipquestion = () => {
  skipped.value++;
  checkGameEndConditions(); // Проверка условий завершения
};

// Завершение игры
const finishGame = () => {
  if (!gameFinished.value) {  // Добавляем проверку, чтобы избежать многократного завершения
    clearInterval(timer);
    gameFinished.value = true;
    
    const totalTime = gameDuration.value - timeLeft.value;
    const speed = totalTime > 0 ? (totalTime / (solved.value + skipped.value)).toFixed(0) : 0;

    resultText.value = `Решено: ${solved.value} из ${solved.value + skipped.value}, скорость: ${speed} сек/задание`;
  }
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
  height: 250px; /* размер высоты экрана */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
}

.math-task, .placeholder {
  font-size: 36px;
  color: #000000;
  transition: opacity 0.2s ease-in-out;
}

.math-task.hidden, .placeholder.hidden {
  opacity: 0; /* Скрываем текст */
}

.timer-container {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}

.timer-bar {
  width: 90%;
  height: 10px;
  background-color: #cccccc;
  border-radius: 5px;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #76c7c0;
  transition: width 1s linear; /* Убедитесь, что анимация синхронизирована с таймером */
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

.result-overlay {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.915); /* полупрозрачный фон */
  padding: 20px;
  width: 300px; /* или другая фиксированная ширина */
  height: 250px; /* или фиксированная высота */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.result-actions {
  display: flex;
  justify-content: center;  /* Центрирует по горизонтали */
  margin-top: 20px;  /* Отступ сверху */
  width: 100%;
}

.main-page-btn {
  background-color: #4CAF50; /* Зеленый фон */
  color: white; /* Белый текст */
  padding: 8px 20px;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 50%; /* Смещение кнопки правее к центру */
  transform: translateX(-50%); /* Центрируем кнопки */
}

.main-page-btn:hover {
  background-color: #45a049; /* Более темный зеленый при наведении */
}

</style>