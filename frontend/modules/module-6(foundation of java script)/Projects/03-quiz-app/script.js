// PROJECT 03: QUIZ APP
// Concepts: arrays of objects, state, conditional logic, event delegation.

const questions = [
  { question: "Which keyword declares a variable that can be reassigned?", options: ["const", "let", "static", "fixed"], answer: 1, explanation: "Use let when the variable needs to be reassigned." },
  { question: "Which array method creates a new array by transforming every item?", options: ["filter()", "find()", "map()", "reduce()"], answer: 2, explanation: "map() returns a new array containing each transformed value." },
  { question: "What does === compare?", options: ["Only values", "Only data types", "Value and type", "Variable names"], answer: 2, explanation: "Strict equality compares both value and data type." },
  { question: "Which method converts a JSON string into a JavaScript value?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "parse.JSON()"], answer: 0, explanation: "JSON.parse() reads a JSON string and returns its JavaScript value." },
  { question: "Which event fires when a form is submitted?", options: ["change", "submit", "click-only", "load"], answer: 1, explanation: "Listen for the submit event on the form element." },
  { question: "What does addEventListener() do?", options: ["Creates HTML", "Stores data", "Registers an event handler", "Deletes a node"], answer: 2, explanation: "It registers a function to run when a chosen event occurs." },
  { question: "Which syntax waits for a Promise inside an async function?", options: ["wait", "pause", "await", "thenwait"], answer: 2, explanation: "await pauses the async function until the Promise settles." },
  { question: "Where can localStorage data persist?", options: ["Only in one function", "In the browser for that origin", "Only on a server", "Only until refresh"], answer: 1, explanation: "localStorage stores string data in the browser for the current origin." }
];

let questionIndex = 0;
let score = 0;
let hasAnswered = false;

const questionText = document.querySelector("#question-text");
const answerList = document.querySelector("#answer-list");
const nextButton = document.querySelector("#next-button");
const feedback = document.querySelector("#feedback");
const quizScreen = document.querySelector("#quiz-screen");
const resultScreen = document.querySelector("#result-screen");

function renderQuestion() {
  const current = questions[questionIndex];
  hasAnswered = false;
  document.querySelector("#question-counter").textContent = `Question ${questionIndex + 1} of ${questions.length}`;
  document.querySelector("#score-label").textContent = `Score: ${score}`;
  document.querySelector("#progress-bar").style.width = `${(questionIndex / questions.length) * 100}%`;
  questionText.textContent = current.question;
  feedback.textContent = "";
  nextButton.disabled = true;
  nextButton.textContent = questionIndex === questions.length - 1 ? "See results" : "Next question →";

  answerList.replaceChildren();
  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    button.dataset.answerIndex = index;
    answerList.append(button);
  });
}

// One listener handles all answer buttons created by renderQuestion().
answerList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-answer-index]");
  if (!button || hasAnswered) return;

  hasAnswered = true;
  const selectedIndex = Number(button.dataset.answerIndex);
  const current = questions[questionIndex];
  const isCorrect = selectedIndex === current.answer;

  if (isCorrect) score += 1;

  answerList.querySelectorAll("button").forEach((optionButton) => {
    optionButton.disabled = true;
    const optionIndex = Number(optionButton.dataset.answerIndex);
    if (optionIndex === current.answer) optionButton.classList.add("correct");
    else if (optionIndex === selectedIndex) optionButton.classList.add("incorrect");
  });

  feedback.textContent = `${isCorrect ? "Correct!" : "Not quite."} ${current.explanation}`;
  nextButton.disabled = false;
  document.querySelector("#score-label").textContent = `Score: ${score}`;
});

nextButton.addEventListener("click", () => {
  if (!hasAnswered) return;
  questionIndex += 1;
  if (questionIndex < questions.length) renderQuestion();
  else showResults();
});

function showResults() {
  quizScreen.hidden = true;
  resultScreen.hidden = false;
  const percentage = Math.round((score / questions.length) * 100);
  document.querySelector("#result-title").textContent = percentage >= 75 ? "Great work!" : "Keep practicing!";
  document.querySelector("#result-score").textContent = `${score} / ${questions.length} (${percentage}%)`;
  document.querySelector("#result-message").textContent =
    percentage >= 75 ? "You have a good start with these JavaScript concepts." : "Review the explanations, then try the quiz again.";
}

document.querySelector("#restart-button").addEventListener("click", () => {
  questionIndex = 0;
  score = 0;
  resultScreen.hidden = true;
  quizScreen.hidden = false;
  renderQuestion();
});

renderQuestion();
