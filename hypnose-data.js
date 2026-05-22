/* =========================
   DONNÉES DU QUIZ
========================= */

const quizData = [

/* =========================================
ACCUEIL AU BLOC
========================================= */

{
step: "🛋️ | Accueil patient",


patient: "« J’ai peur de ne pas me réveiller… »",

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
step: "🛋️ | Accueil patient",

patient: "Le patient arrive stressé et dit : « J’ai très peur de l’anesthésie. »",

answers: [

{
text: "Ne vous inquiétez pas, tout va bien se passer.",
correct: false,
feedback: "⚠️ Réassurance trop rapide."
},

{
text: "Je vois que c’est important pour vous. Qu’est-ce qui vous inquiète le plus ?",
correct: true,
feedback: "✅ Bonne validation émotionnelle."
},

{
text: "Il ne faut pas penser au pire, ça ne sert a rien de stresser.",
correct: false,
feedback: "⚠️ Cette réponse minimise l’émotion."
}

]

},

{
step: "🛋️ | Accueil patient",

patient: "Le patient dit : « Je vais sûrement me réveiller pendant l’opération… »",

answers: [

{
text: "C’est impossible.",
correct: false,
feedback: "⚠️ Contredit directement la peur du patient."
},

{
text: "Vous pensez souvent à ce scénario ?",
correct: true,
feedback: "✅ Bonne exploration des représentations du patient."
},

{
text: "Arrêtez d’y penser.",
correct: false,
feedback: "⚠️ Formulation négative et peu aidante."
}

]

},

{
step: "🛋️ | Accueil patient",

patient: "Le patient tremble légèrement en entrant au bloc.",

answers: [

{
text: "Vous avez froid ?",
correct: false,
feedback: "⚠️ Ignore le contexte émotionnel."
},

{
text: "Prenez sur vous, ça va aller.",
correct: false,
feedback: "⚠️ Minimise le vécu du patient."
},

{
text: "Je vois que votre corps réagit au stress, on va prendre le temps ensemble.",
correct: true,
feedback: "✅ Très bonne validation physiologique et émotionnelle."
}

]

},

{
step: "🛋️ | Accueil patient",

patient: "Le patient parle très vite et semble paniqué.",

answers: [

{
text: "Respirez calmement avec moi pendant quelques secondes.",
correct: true,
feedback: "✅ Bonne synchronisation respiratoire."
},

{
text: "Ce n’est rien, il ne faut pas paniquer.",
correct: false,
feedback: "⚠️ Réponse minimisante."
},

{
text: "Il faut vous détendre.",
correct: false,
feedback: "⚠️ Injunction peu efficace."
}

]

},

{
step: "🛋️ | Accueil patient",

patient: "Le patient demande : « Est-ce que je vais avoir mal ? »",

answers: [

{
text: "On fera tout pour votre confort, et vous pourrez nous signaler ce que vous ressentez.",
correct: true,
feedback: "✅ Réponse réaliste et rassurante."
},

{
text: "Non, aucune douleur.",
correct: false,
feedback: "⚠️ Promesse irréaliste."
},

{
text: "Il ne faut pas y penser.",
correct: false,
feedback: "⚠️ Évite l’émotion du patient."
}

]

},

/* =========================================
INDUCTION
========================================= */

{
step: "💉 | Induction",

patient: "Le patient regarde le masque avec inquiétude.",

answers: [

{
text: "Ne bougez pas, le masque doit être étanche.",
correct: false,
feedback: "⚠️ Formulation négative."
},

{
text: "Ça va pincer un peu au niveau du nez.",
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
step: "💉 | Induction",

patient: "Le patient fixe le plafond et semble hypervigilant.",

answers: [

{
text: "Regardez cette lumière et laissez votre attention se poser tranquillement dessus.",
correct: true,
feedback: "✅ Bonne focalisation attentionnelle."
},

{
text: "Fermez les yeux immédiatement.",
correct: false,
feedback: "⚠️ Formulation autoritaire."
},

{
text: "Ne bougez plus, on va commencer.",
correct: false,
feedback: "⚠️ Suggestion négative."
}

]

},

{
step: "💉 | Induction",

patient: "Le patient dit : « Mon cœur bat très vite. »",

answers: [

{
text: "C’est normal, votre corps se prépare simplement.",
correct: true,
feedback: "✅ Bonne normalisation physiologique."
},

{
text: "Calmez-vous.",
correct: false,
feedback: "⚠️ Injunction peu aidante."
},

{
text: "Ce n’est rien du tout.",
correct: false,
feedback: "⚠️ Minimise le ressenti."
}

]

},

{
step: "💉 | Induction",

patient: "Au moment de poser le masque, le patient recule légèrement.",

answers: [

{
text: "Prenez le temps de sentir l’air entrer tranquillement.",
correct: true,
feedback: "✅ Bonne redirection sensorielle."
},

{
text: "Ce n’est qu’un masque.",
correct: false,
feedback: "⚠️ Minimise la perception du patient."
},

{
text: "Il faut arrêter de bouger.",
correct: false,
feedback: "⚠️ Ton trop directif."
}

]

},

{
step: "💉 | Induction",

patient: "Le patient serre fortement les accoudoirs.",

answers: [

{
text: "Vous pouvez garder cette sensation de contrôle pendant que votre corps se relâche progressivement.",
correct: true,
feedback: "✅ Respect du besoin de contrôle."
},

{
text: "Relâchez-vous tout de suite.",
correct: false,
feedback: "⚠️ Trop autoritaire."
},

{
text: "Ça ne sert à rien de serrer.",
correct: false,
feedback: "⚠️ Invalide le comportement du patient."
}

]

},

{
step: "💉 | Induction",

patient: "Le patient demande plusieurs fois : « Tout se passe bien ? »",

answers: [

{
text: "Oui, et pendant que l’équipe travaille, vous pouvez simplement écouter ma voix.",
correct: true,
feedback: "✅ Très bonne sécurisation."
},

{
text: "Oui oui, ne parlez plus.",
correct: false,
feedback: "⚠️ Ton peu empathique."
},

{
text: "Arrêtez de poser des questions.",
correct: false,
feedback: "⚠️ Réponse brusque."
}

]

},

/* =========================================
RÉVEIL
========================================= */

{
step: "🌅 | Réveil",

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

},

{
step: "🌅 | Réveil",

patient: "Le patient ouvre les yeux et semble désorienté.",

answers: [

{
text: "Bonjour, l’intervention est terminée, vous êtes en sécurité.",
correct: true,
feedback: "✅ Très bonne réorientation."
},

{
text: "Réveillez-vous complètement,  on parlera plus tard.",
correct: false,
feedback: "⚠️ Trop directif."
},

{
text: "Vous êtes enfin réveillé.",
correct: false,
feedback: "⚠️ Peu contenant émotionnellement."
}

]

},

{
step: "🌅 | Réveil",

patient: "Le patient semble agité au réveil.",

answers: [

{
text: "Vous pouvez prendre une respiration tranquille pendant que je reste avec vous.",
correct: true,
feedback: "✅ Bonne présence rassurante."
},

{
text: "Calmez-vous immédiatement.",
correct: false,
feedback: "⚠️ Formulation autoritaire."
},

{
text: "Arrêtez de bouger, vous allez tomber.",
correct: false,
feedback: "⚠️ Suggestion négative."
}

]

},

{
step: "🌅 | Réveil",

patient: "Le patient demande où il se trouve.",

answers: [

{
text: "Vous êtes en salle de réveil, l’opération est terminée.",
correct: true,
feedback: "✅ Bonne réorientation spatio-temporelle."
},

{
text: "À l’hôpital.",
correct: false,
feedback: "⚠️ Réponse trop vague."
},

{
text: "Vous ne vous souvenez pas ?",
correct: false,
feedback: "⚠️ Peut majorer la confusion."
}

]

},

{
step: "🌅 | Réveil",

patient: "Le patient dit doucement : « J’ai encore peur… »",

answers: [

{
text: "Je suis là avec vous, et tout est terminé maintenant.",
correct: true,
feedback: "✅ Bonne validation émotionnelle."
},

{
text: "Il ne faut plus avoir peur.",
correct: false,
feedback: "⚠️ Nie l’émotion ressentie."
},

{
text: "Mais non voyons.",
correct: false,
feedback: "⚠️ Réponse minimisante."
}

]

}

];
