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

/* =========================
   AFFICHER QUESTION
========================= */

function loadQuestion() {

const q = quizData[currentQuestion];

stepEl.textContent = q.step;

patientEl.textContent = q.patient;

progressEl.textContent =
`Question ${currentQuestion + 1} / ${quizData.length}`;

answersEl.innerHTML = "";

feedbackEl.textContent = "";

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

correctEl.innerHTML = "";

} else {

button.classList.add("wrong");

feedbackEl.textContent = "❌ Mauvaise réponse";

correctEl.innerHTML =
`✔ Bonne réponse : ${correctAnswer.text}<br><br>
<strong>Pourquoi :</strong> ${correctAnswer.feedback}`;
}

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

document.querySelector(".scenario-card").innerHTML = `

<h2>🏆 Quiz terminé</h2>

<p style="margin-top:20px;">
Votre score : ${score} / ${quizData.length}
</p>

<p style="margin-top:20px; line-height:1.7;">
✅ Langage positif
<br>
✅ Sécurité
<br>
✅ Suggestions indirectes
</p>

`;

feedbackEl.style.display = "none";

nextBtn.style.display = "none";

}

/* =========================
   DEMARRAGE
========================= */
window.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});

