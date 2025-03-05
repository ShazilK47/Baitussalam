const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Rome", "Paris", "Berlin", "Madrid"],
    answer: 1,
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Central Style Sheets",
      "Cascading Style Sheets",
      "Cascading Simple Sheets",
      "Cars SUVs Sailboats",
    ],
    answer: 1,
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "none of the above"],
    answer: 1,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timerInterval;
let timeLeft = 15;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restart-btn");
const timeLeftEl = document.getElementById("time-left");

function loadQuestion() {
  clearInterval(timerInterval);
  timeLeft = 15;
  updateTimerDisplay();
  nextBtn.disabled = true;
  optionsEl.innerHTML = "";
  const currentQuestion = quizData[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.setAttribute("data-index", index);
    li.addEventListener("click", selectOption);
    optionsEl.appendChild(li);
  });

  startTimer();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      // Auto proceed when timer expires
      autoNext();
    }
  }, 1000);
}

function updateTimerDisplay() {
  timeLeftEl.textContent = timeLeft;
}

function selectOption(event) {
  // Remove 'selected' from all options
  const allOptions = document.querySelectorAll("#options li");
  allOptions.forEach((opt) => opt.classList.remove("selected"));
  event.target.classList.add("selected");
  nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  processAnswer();
});

function autoNext() {
  // If no option selected when timer runs out, simply move on
  processAnswer();
}

function processAnswer() {
  const selectedOption = document.querySelector("#options li.selected");
  if (selectedOption) {
    const selectedAnswer = Number(selectedOption.getAttribute("data-index"));
    if (selectedAnswer === quizData[currentQuestionIndex].answer) {
      score++;
    }
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

restartBtn.addEventListener("click", () => {
  currentQuestionIndex = 0;
  score = 0;
  resultEl.classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  loadQuestion();
});

function showResult() {
  scoreEl.textContent = `${score} out of ${quizData.length}`;
  resultEl.classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
}

// Initialize quiz
loadQuestion();
