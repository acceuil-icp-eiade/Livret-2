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

  // Centrer le titre
  stepEl.style.textAlign = "center";

  // Affichage fin
  stepEl.textContent = "🏁 Quiz terminé";
  patientEl.textContent = "";

  // Nettoyage réponses
  answersEl.innerHTML = "";

  // Nettoyage correction
  correctEl.innerHTML = "";

  // Progression vide
  progressEl.textContent = "";

  // Masquer bouton suivant
  nextBtn.style.display = "none";

  // Calcul pourcentage
  const percentage = Math.round((score / quizData.length) * 100);

  // Afficher score
  scoreEl.innerHTML = `⭐ Score : ${percentage}%`;

  // Message dynamique
  if (percentage > 90) {

    feedbackEl.innerHTML = `
    <h2>🎉 Bravo !</h2>

    <p style="margin-top:15px; line-height:1.7;">
    Excellent travail 👏<br>
    Vous maîtrisez très bien les bases
    de la communication hypnotique.
    </p>

    <p style="margin-top:20px; line-height:1.7;">
    ✅ Langage positif<br>
    ✅ Sécurité<br>
    ✅ Suggestions indirectes
    </p>
    `;

  } else {

    feedbackEl.innerHTML = `
    <h2>💡 Continuez !</h2>

    <p style="margin-top:15px; line-height:1.7;">
    Vous êtes sur la bonne voie 👍<br>
    Relancez le quiz pour améliorer
    vos techniques de communication hypnotique.
    </p>

    <p style="margin-top:20px; line-height:1.7;">
    ✅ Langage positif<br>
    ✅ Sécurité<br>
    ✅ Suggestions indirectes
    </p>
    `;

  }

  // Afficher bouton rejouer
  restartBtn.style.display = "inline-block";
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
