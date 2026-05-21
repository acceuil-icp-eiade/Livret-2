/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;
let score = 0;

const stepEl = document.getElementById("step");
const patientEl = document.getElementById("patient");
const answersEl = document.getElementById("answers");

const feedbackPopup = document.getElementById("feedbackPopup");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");

const continueBtn = document.getElementById("continueBtn");

const progressEl = document.getElementById("progress");

const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

/* =========================
   AFFICHER QUESTION
========================= */
function loadQuestion() {

  const q = quizData[currentQuestion];

  if (!q) return;

  stepEl.textContent = q.step;
  patientEl.textContent = q.patient;

  progressEl.textContent =
    `Question ${currentQuestion + 1} / ${quizData.length}`;

  resetUI();

  q.answers.forEach(answer => {

    const button = document.createElement("button");
    button.classList.add("answer-btn");
    button.textContent = answer.text;

    button.addEventListener("click", () =>
      selectAnswer(button, answer)
    );

    answersEl.appendChild(button);
  });
}


/* =========================
   RESET UI QUESTION
========================= */

function resetUI() {
  answersEl.innerHTML = "";
}

/* =========================
   REPONSE
========================= */

function selectAnswer(button, answer) {

  const buttons = document.querySelectorAll(".answer-btn");
  buttons.forEach(btn => btn.disabled = true);

  const q = quizData[currentQuestion];
  const correctAnswer = q.answers.find(a => a.correct);

  let isCorrect = false;

  if (answer.correct) {
    button.classList.add("correct");
    score++;
    scoreEl.textContent = score;
    isCorrect = true;
  } else {
    button.classList.add("wrong");
  }

  const explanation = answer.correct
    ? "Bonne réponse 👍"
    : `
      ${answer.feedback}<br><br>
      ✔ Bonne réponse : <strong>${correctAnswer.text}</strong>
    `;

  showFeedback(isCorrect, explanation);
}

/* =========================
   POPUP FEEDBACK
========================= */

function showFeedback(isCorrect, explanation) {

  feedbackTitle.innerHTML = isCorrect
    ? "✅ Bonne réponse"
    : "❌ Réponse incorrecte";

  feedbackText.innerHTML = explanation;

  feedbackPopup.classList.add("show");
}

/* =========================
   FERMER + NEXT QUESTION
========================= */

continueBtn.addEventListener("click", () => {

  feedbackPopup.classList.remove("show");

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showFinalScreen();
  }

});

/* =========================
   FIN QUIZ
========================= */

function showFinalScreen() {

  stepEl.style.textAlign = "center";

  stepEl.textContent = "🏁 Quiz terminé";
  patientEl.textContent = "";

  answersEl.innerHTML = "";

  progressEl.textContent = "";

  const percentage = Math.round((score / quizData.length) * 100);

  scoreEl.textContent = `⭐ Score : ${percentage}%`;

  answersEl.innerHTML = "";

  restartBtn.style.display = "inline-block";

  stepEl.innerHTML = percentage > 90
    ? "🎉 Bravo !"
    : "💡 Continuez !";

  patientEl.innerHTML = percentage > 90
    ? "Excellent travail 👏"
    : "Relancez le quiz pour progresser 👍";
}

/* =========================
   DEMARRAGE
========================= */

window.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});

/* =========================
   RESTART QUIZ
========================= */

restartBtn.addEventListener("click", () => {

  currentQuestion = 0;
  score = 0;

  scoreEl.textContent = "0";
  restartBtn.style.display = "none";

  loadQuestion();
});
