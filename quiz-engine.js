/* =========================
   VARIABLES
========================= */

let currentQuestion = 0;
let score = 0;

const stepEl = document.getElementById("step");
const patientEl = document.getElementById("patient");
const answersEl = document.getElementById("answers");

const feedbackEl = document.getElementById("feedback");
const correctEl = document.getElementById("correct");
const nextBtn = document.getElementById("nextBtn");

const progressEl = document.getElementById("progress");

const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
/* =========================
   AFFICHER QUESTION
========================= */
function loadQuestion() {

const q = quizData[currentQuestion];

stepEl.textContent = q.step;
patientEl.textContent = q.patient;

progressEl.textContent =
`Question ${currentQuestion + 1} / ${quizData.length}`;

// 👉 reset UNE SEULE FOIS ici
resetUI();

nextBtn.style.display = "none";

q.answers.forEach(answer => {

const button = document.createElement("button");

button.classList.add("answer-btn");

button.textContent = answer.text;

button.addEventListener("click", () => selectAnswer(button, answer));

answersEl.appendChild(button);

});

}

/* =========================
   REPONSE
========================= */

function selectAnswer(button, answer) {

const buttons = document.querySelectorAll(".answer-btn");
buttons.forEach(btn => btn.disabled = true);

const q = quizData[currentQuestion];
const correctAnswer = q.answers.find(a => a.correct);

if (answer.correct) {

button.classList.add("correct");
score++;
scoreEl.textContent = score;

feedbackEl.textContent = "✅ Bonne réponse";

// 👉 IMPORTANT : reset
correctEl.innerHTML = "";

} else {

button.classList.add("wrong");

feedbackEl.textContent = "❌ Mauvaise réponse";
correctEl.innerHTML =
` Pourquoi cette réponse n’est pas idéale? :<br><br>
${answer.feedback}

<br><br>

✔ Bonne réponse :
<strong>${correctAnswer.text}</strong>`;}
nextBtn.style.display = "inline-block";
}



/* =========================
   QUESTION SUIVANTE
========================= */

nextBtn.addEventListener("click", () => {

currentQuestion++;

if(currentQuestion < quizData.length) {

loadQuestion();

} else {

showFinalScreen();

}

});

/* =========================
   FIN QUIZ
========================= */
function showFinalScreen() {

// Affichage fin
stepEl.textContent = "🏁 Quiz terminé";
patientEl.textContent = "";

// Nettoyage réponses
answersEl.innerHTML = "";

// Message final
feedbackEl.innerHTML = `
🎉 Bravo !<br><br>
Votre score de communication hypnotique:
<strong>${score} / ${quizData.length}</strong>

<p style="margin-top:20px; line-height:1.7;">
✅ Langage positif<br>
✅ Sécurité<br>
✅ Suggestions indirectes
</p>
`;

// Nettoyage correction
correctEl.innerHTML = "";

// Progression vide
progressEl.textContent = "";

// Masquer bouton suivant
nextBtn.style.display = "none";

// Mettre score à jour
scoreEl.textContent = score;

// Afficher bouton rejouer
restartBtn.style.display = "inline-block";
}

/* =========================
   DEMARRAGE
========================= */
window.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});
restartBtn.addEventListener("click", () => {

currentQuestion = 0;
score = 0;

// Reset score affiché
scoreEl.textContent = "0";

// Masquer bouton rejouer
restartBtn.style.display = "none";

// Recharger première question
loadQuestion();

});
/*==========≈============
   reset
   =====≈===============*/

function resetUI() {
feedbackEl.textContent = "";
correctEl.innerHTML = "";
answersEl.innerHTML = "";
}
