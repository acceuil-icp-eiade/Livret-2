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
const feedbackPopup = document.getElementById("feedbackPopup");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackText = document.getElementById("feedbackText");
const continueBtn = document.getElementById("continueBtn");
/* =========================
AFFICHER QUESTION
========================= */
function loadQuestion() {

const q = quizData[currentQuestion];

stepEl.textContent = q.step;
patientEl.textContent = q.patient;

progressEl.textContent =
Question ${currentQuestion + 1} / ${quizData.length};

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
========*/

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
:   ${answer.feedback}<br><br>   ✔ Bonne réponse : <strong>${correctAnswer.text}</strong>  ;

showFeedback(isCorrect, explanation);
}
function showFeedback(isCorrect, explanation) {

feedbackTitle.innerHTML = isCorrect
? "✅ Bonne réponse"
: "❌ Réponse incorrecte";

feedbackText.innerHTML = explanation;

document.getElementById("feedbackPopup").classList.add("show");
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
scoreEl.innerHTML = ⭐ Score : ${percentage}%;

// Message dynamique
if (percentage > 90) {

feedbackEl.innerHTML = `  
<h2 class="bravo-animation">🎉 Bravo !</h2>  
  

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
/========≈============
fermeture du popup
======================/
continueBtn.addEventListener("click", () => {

document.getElementById("feedbackPopup").classList.remove("show");

currentQuestion++;

if (currentQuestion < quizData.length) {
loadQuestion();
} else {
showFinalScreen();
}
});

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
/==========≈============
reset
=====≈===============/

function resetUI() {
feedbackEl.textContent = "";
correctEl.innerHTML = "";
answersEl.innerHTML = "";
}
/*   nouveau popup réponse */
function showFeedback(isCorrect, explanation) {

feedbackPopup.style.display = "flex";

if (isCorrect) {

feedbackTitle.innerHTML = "✅ Bonne réponse";

} else {

feedbackTitle.innerHTML = "❌ Réponse incorrecte";

}

feedbackText.innerHTML =   <p style="margin-top:15px; line-height:1.7;">   ${explanation}   </p>  ;
}
continueBtn.addEventListener("click", () => {

feedbackPopup.style.display = "none";

currentQuestion++;

showQuestion();

});
function openQuiz() {

  // Ouvre le popup
  document.getElementById("quizPopup").classList.add("show");

  // Cache le bottom menu
  document.getElementById("bottomMenu").style.display = "none";

  // Lance la première question
  currentQuestion = 0;
  score = 0;

  loadQuestion();
}
function closeQuiz() {

  // Ferme popup
  document.getElementById("quizPopup").classList.remove("show");

  // Réaffiche le menu
  document.getElementById("bottomMenu").style.display = "flex";
}

