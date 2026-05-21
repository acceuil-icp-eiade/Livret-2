/* =========================
   DONNÉES DU QUIZ
========================= */

const quizData = [

{
step: "🏥 Accueil au bloc",

patient: "“J’ai peur de ne pas me réveiller…”",

answers: [

{
text: "Ne vous inquiétez pas.",
correct: false,
feedback: "⚠️ Cette réponse minimise l’émotion du patient."
},

{
text: "Tout va bien se passer.",
correct: false,
feedback: "⚠️ Réassurance trop directe."
},

{
text: "Pendant que l’équipe veille sur vous, vous pouvez déjà laisser votre corps commencer à se détendre.",
correct: true,
feedback: "✅ Très bon langage thérapeutique."
}

]

},

{
step: "💉 Avant induction",

patient: "Le patient regarde le masque avec inquiétude.",

answers: [

{
text: "Ne bougez pas.",
correct: false,
feedback: "⚠️ Formulation négative."
},

{
text: "Ça va piquer un peu.",
correct: false,
feedback: "⚠️ Suggestion anxiogène."
},

{
text: "Vous pouvez simplement sentir l’air circuler tranquillement pendant que votre corps se relâche progressivement.",
correct: true,
feedback: "✅ Excellent langage hypnotique."
}

]

},

{
step: "🌙 Salle de réveil",

patient: "Le patient ouvre les yeux doucement.",

answers: [

{
text: "Vous avez mal ?",
correct: false,
feedback: "⚠️ Oriente l’attention vers la douleur."
},

{
text: "Prenez votre temps… votre corps récupère tranquillement.",
correct: true,
feedback: "✅ Formulation rassurante."
},

{
text: "Réveillez-vous bien.",
correct: false,
feedback: "⚠️ Peu thérapeutique."
}

]

}

];
