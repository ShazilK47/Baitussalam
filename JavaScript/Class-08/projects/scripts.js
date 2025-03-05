const quiz_data = [
  {
    question: "How are you",
    options: ["good", "not good", "very good", "sad"],
    answer: 2,
  },
  {
    question: "Have you done your work",
    options: ["yes", "not yet", "will soon", "never"],
    answer: 0,
  },
  {
    question: "What's your  name",
    options: ["Abdullah", "Shazil", "Ali", "Umer"],
    answer: 2,
  },
];

let questionCont = document.getElementById("question");
let optionsCont = document.getElementById("options");
let nextBtn = document.getElementById("next-btn");
let currentQuestionIndex = 0;

function displayQuestions() {}
