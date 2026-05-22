/* =========================
   DONNÉES QUIZ
========================= */

let currentQuestion = 0;
let score = 0;

/* =========================
   ELEMENTS HTML
========================= */

const stepEl = document.getElementById("step");
const patientEl = document.getElementById("patient");
const answersEl = document.getElementById("answers");
const progressEl = document.getElementById("progress");

const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

const feedbackPopup = document.getElementById("feedbackPopup");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const continueBtn = document.getElementById("continueBtn");

/* =========================
   OUVERTURE QUIZ
========================= */

function openQuiz() {

document.getElementById("quizPopup")
.classList.add("show");

/* cacher bottom menu */
document.querySelector(".bottom-menu")
.style.display = "none";

}

function closeQuiz() {

document.getElementById("quizPopup")
.classList.remove("show");

/* réafficher bottom menu */
document.querySelector(".bottom-menu")
.style.display = "flex";

}


/* =========================
   RESET UI
========================= */

function resetUI() {

answersEl.innerHTML = "";

}

/* =========================
   CHARGER QUESTION
========================= */

function loadQuestion() {

resetUI();

const q = quizData[currentQuestion];

stepEl.textContent = q.step;

patientEl.textContent = q.patient;

progressEl.textContent =
`Question ${currentQuestion + 1} / ${quizData.length}`;

q.answers.forEach(answer => {

const button = document.createElement("button");

button.classList.add("answer-btn");

button.textContent = answer.text;

button.addEventListener("click", () => {
selectAnswer(button, answer);
});

answersEl.appendChild(button);

});

}

/* =========================
   SELECTION REPONSE
========================= */

function selectAnswer(button, answer) {

const buttons =
document.querySelectorAll(".answer-btn");

buttons.forEach(btn => {
btn.disabled = true;
});

const q = quizData[currentQuestion];

const correctAnswer =
q.answers.find(a => a.correct);

let isCorrect = false;

if (answer.correct) {

button.classList.add("correct");

score++;

scoreEl.textContent = score;

isCorrect = true;

} else {

button.classList.add("wrong");

buttons.forEach(btn => {

if (btn.textContent === correctAnswer.text) {
btn.classList.add("correct");
}

});

}

/* =========================
   MESSAGE FEEDBACK
========================= */

const explanation = answer.correct

? `
✅ Très bonne réponse.

<p style="margin-top:15px;">
${answer.feedback}
</p>
`

: `
<p>${answer.feedback}</p>

<p style="margin-top:20px;">
✔ Bonne réponse :
</p>

<strong>
${correctAnswer.text}
</strong>
`;

showFeedback(isCorrect, explanation);

}

/* =========================
   POPUP FEEDBACK
========================= */

function showFeedback(isCorrect, explanation) {
document.querySelector(".bottom-menu")
.style.display = "none";
feedbackPopup.classList.add("show");

if (isCorrect) {

feedbackTitle.innerHTML =
"✅ Bonne réponse";

} else {

feedbackTitle.innerHTML =
"❌ Réponse incorrecte";

}

feedbackText.innerHTML = `
<div style="line-height:1.7;">
${explanation}
</div>
`;

}

/* =========================
   CONTINUER
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
document.querySelector(".bottom-menu")
.style.display = "none";
resetUI();

stepEl.style.textAlign = "center";

stepEl.innerHTML =
"🏁 Quiz terminé";

patientEl.innerHTML = "";

progressEl.innerHTML = "";

const percentage =
Math.round((score / quizData.length) * 100);

if (percentage >= 80) {

answersEl.innerHTML = `

<div class="final-message">

<h2 class="bravo-animation">
🎉 Bravo !
</h2>

<p style="margin-top:20px; line-height:1.8;">

Excellent travail 👏

<br><br>

Vous maîtrisez très bien les bases
de la communication hypnotique.

</p>

</div>

`;

} else {

answersEl.innerHTML = `

<div class="final-message">

<h2>
💡 Continuez !
</h2>

<p style="margin-top:20px; line-height:1.8;">

Vous êtes sur la bonne voie 👍

<br><br>

Relancez le quiz pour améliorer
vos techniques de communication.

</p>

</div>

`;

}

scoreEl.innerHTML = `${percentage}%`;

restartBtn.style.display = "inline-block";

}

/* =========================
   RESTART
========================= */

restartBtn.addEventListener("click", () => {
document.querySelector(".bottom-menu")
.style.display = "flex";
currentQuestion = 0;

score = 0;

scoreEl.textContent = "0";

restartBtn.style.display = "none";

stepEl.style.textAlign = "left";

loadQuestion();

});

/* =========================
   DEMARRAGE
========================= */

window.addEventListener("DOMContentLoaded", () => {

loadQuestion();

});
