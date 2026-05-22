/* =========================
   DONNÉES DU QUIZ
========================= */

const quizData = [

{
step:" 👋 | Accueil au bloc",

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



/* =========================================
ACCUEIL PATIENT
========================================= */

{
step: "🛋️ Accueil patient",
patient: "Le patient arrive stressé et dit : « J’ai très peur de l’anesthésie. »",

answers: [
"Ne vous inquiétez pas, tout va bien se passer.",
"Je vois que c’est important pour vous. Qu’est-ce qui vous inquiète le plus ?",
"Il ne faut pas penser au pire."
],

correct: 1,

feedback: "✅ Bonne réponse",

explanation:
"Valider l’émotion et ouvrir le dialogue permet de diminuer l’anxiété et d’installer la relation."
},

{
step: "🛋️ Accueil patient",
patient: "Le patient dit : « Je vais sûrement me réveiller pendant l’opération… »",

answers: [
"C’est impossible.",
"Vous pensez souvent à ce scénario ?",
"Arrêtez d’y penser."
],

correct: 1,

feedback: "✅ Bonne réponse",

explanation:
"Explorer la représentation mentale du patient permet d’éviter la confrontation directe."
},

{
step: "🛋️ Accueil patient",
patient: "Le patient tremble légèrement en entrant au bloc.",

answers: [
"Vous avez froid ?",
"Prenez sur vous, ça va aller.",
"Je vois que votre corps réagit au stress, on va prendre le temps ensemble."
],

correct: 2,

feedback: "✅ Bonne réponse",

explanation:
"Nommer calmement les réactions physiologiques aide le patient à se sentir compris."
},

{
step: "🛋️ Accueil patient",
patient: "Le patient parle très vite et semble paniqué.",

answers: [
"Respirez calmement avec moi pendant quelques secondes.",
"Ce n’est rien.",
"Il faut vous détendre."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Synchroniser la respiration favorise l’apaisement et la focalisation."
},

{
step: "🛋️ Accueil patient",
patient: "Le patient demande : « Est-ce que je vais avoir mal ? »",

answers: [
"On fera tout pour votre confort, et vous pourrez nous signaler ce que vous ressentez.",
"Non, aucune douleur.",
"Il ne faut pas y penser."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Une réponse réaliste et rassurante crée davantage de confiance."
},

/* =========================================
INDUCTION
========================================= */

{
step: "💉 Induction",
patient: "Le patient fixe le plafond et semble hypervigilant.",

answers: [
"Regardez cette lumière et laissez votre attention se poser tranquillement dessus.",
"Fermez les yeux immédiatement.",
"Ne bougez plus."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"La focalisation attentionnelle est un outil classique en hypnose conversationnelle."
},

{
step: "💉 Induction",
patient: "Le patient dit : « Mon cœur bat très vite. »",

answers: [
"C’est normal, votre corps se prépare simplement.",
"Calmez-vous.",
"Ce n’est rien du tout."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Normaliser les sensations diminue souvent l’inquiétude."
},

{
step: "💉 Induction",
patient: "Au moment de poser le masque, le patient recule légèrement.",

answers: [
"Prenez le temps de sentir l’air entrer tranquillement.",
"Ce n’est qu’un masque.",
"Il faut arrêter de bouger."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Rediriger l’attention vers une sensation neutre facilite l’acceptation."
},

{
step: "💉 Induction",
patient: "Le patient serre fortement les accoudoirs.",

answers: [
"Vous pouvez garder cette sensation de contrôle pendant que votre corps se relâche progressivement.",
"Relâchez-vous tout de suite.",
"Ça ne sert à rien de serrer."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Respecter le besoin de contrôle évite l’opposition inconsciente."
},

{
step: "💉 Induction",
patient: "Le patient demande plusieurs fois : « Tout se passe bien ? »",

answers: [
"Oui, et pendant que l’équipe travaille, vous pouvez simplement écouter ma voix.",
"Oui oui, ne parlez plus.",
"Arrêtez de poser des questions."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Une voix calme et une consigne simple favorisent la sécurité intérieure."
},

/* =========================================
RÉVEIL
========================================= */

{
step: "🌅 Réveil",
patient: "Le patient ouvre les yeux et semble désorienté.",

answers: [
"Bonjour, l’intervention est terminée, vous êtes en sécurité.",
"Réveillez-vous complètement.",
"Vous êtes enfin réveillé."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Les repères temporels et sécuritaires sont essentiels au réveil."
},

{
step: "🌅 Réveil",
patient: "Le patient dit : « J’ai l’impression d’avoir dormi 2 minutes. »",

answers: [
"C’est une sensation fréquente après l’anesthésie.",
"Non, ça a duré longtemps.",
"Ce n’est pas important."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Valider l’expérience du patient réduit l’inconfort lié à la confusion."
},

{
step: "🌅 Réveil",
patient: "Le patient semble agité au réveil.",

answers: [
"Vous pouvez prendre une respiration tranquille pendant que je reste avec vous.",
"Calmez-vous immédiatement.",
"Arrêtez de bouger."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"La présence rassurante et la respiration guidée favorisent l’apaisement."
},

{
step: "🌅 Réveil",
patient: "Le patient demande où il se trouve.",

answers: [
"Vous êtes en salle de réveil, l’opération est terminée.",
"À l’hôpital.",
"Vous ne vous souvenez pas ?"
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"Des informations simples et claires permettent une réorientation rapide."
},

{
step: "🌅 Réveil",
patient: "Le patient dit doucement : « J’ai encore peur… »",

answers: [
"Je suis là avec vous, et tout est terminé maintenant.",
"Il ne faut plus avoir peur.",
"Mais non voyons."
],

correct: 0,

feedback: "✅ Bonne réponse",

explanation:
"La validation émotionnelle reste importante même au réveil."
}

];
