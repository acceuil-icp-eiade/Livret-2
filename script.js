/* =========================
UTILS
========================= */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

function show(el) {
  el?.classList.add("show");
}

function hide(el) {
  el?.classList.remove("show");
}

function toggleHidden(el, state) {
  el?.classList.toggle("hidden", !state);
}


/* =========================
SPLASH SCREEN
========================= */

window.addEventListener("load", () => {
  setTimeout(() => {
    $("#splash")?.classList.add("hide");
  }, 3000);
});


/* =========================
LOGIN
========================= */

function openLogin() {
  show($("#loginModal"));
}

function closeLogin() {
  hide($("#loginModal"));
}

function checkPassword() {
  const password = $("#password")?.value;

  if (password === "iadeicp543") {
    closeLogin();

    $(".hero").style.display = "none";
    show($("#disclaimer"));
  } else {
    $("#error").innerText = "Mot de passe incorrect";
  }
}


/* =========================
HAPTIC FEEDBACK
========================= */

function softClick() {
  navigator.vibrate?.(10);
}

$$(".btn, .card, .clickable").forEach(el => {
  el.addEventListener("click", softClick);
});


/* =========================
BOTTOM MENU
========================= */

function toggleBottomMenu(showMenu) {
  $(".bottom-menu")?.classList.toggle("hidden", !showMenu);
}


/* =========================
POPUPS SYSTEM
========================= */

function openPopup(id) {
  const popup = document.getElementById(id);

  popup.style.display = "flex";

  setTimeout(() => popup.classList.add("show"), 10);

  toggleBottomMenu(false);
}

function closePopup(id) {
  const popup = document.getElementById(id);

  popup.classList.remove("show");

  setTimeout(() => {
    popup.style.display = "none";
  }, 300);

  toggleBottomMenu(true);
}


/* =========================
QUIZ
========================= */

let currentQuestion = 0;
let score = 0;

function openQuiz() {
  const quiz = $("#quizPopup");

  quiz.style.display = "flex";

  setTimeout(() => quiz.classList.add("show"), 10);

  currentQuestion = 0;
  score = 0;
  loadQuestion();

  toggleBottomMenu(false);
}

function closeQuiz() {
  const quiz = $("#quizPopup");

  quiz.classList.remove("show");

  setTimeout(() => {
    quiz.style.display = "none";
  }, 300);

  toggleBottomMenu(true);
}


/* =========================
MENU SUB TOGGLE
========================= */

function toggleMenu(id) {
  $$(".submenu").forEach(menu => {
    menu.classList.toggle("open", menu.id === id);
  });
}


/* =========================
VIDEO TOGGLE
========================= */

function toggleVideo() {
  const video = $("#videoContainer");
  const iframe = $("#videoFrame");
  const button = $("#videoBtn");

  if (video.classList.contains("show")) {
    video.classList.remove("show");

    setTimeout(() => video.classList.add("hidden"), 400);

    button.innerHTML = "▶️ Voir la visite du bloc";
  } else {
    video.classList.remove("hidden");

    setTimeout(() => video.classList.add("show"), 10);

    button.innerHTML = "❌ Fermer la vidéo";

    setTimeout(() => {
      iframe?.requestFullscreen?.();
    }, 500);
  }
}


/* =========================
DISCLAIMER
========================= */

function showDisclaimer() {
  show($("#disclaimer"));
}

function acceptDisclaimer() {
  hide($("#disclaimer"));

  $("#content")?.classList.remove("hidden");

  toggleBottomMenu(true);
}


/* =========================
TOGGLE ITEMS
========================= */

function toggleItem(element) {
  const content = element.querySelector(".content");
  content?.classList.toggle("hidden");
}


/* =========================
ICONS ANIMATION
========================= */

window.addEventListener("load", () => {
  setTimeout(() => {
    $(".icons")?.classList.add("show");
  }, 800);
});


/* =========================
MENU BLOB ANIMATION
========================= */

const items = $$(".menu-item");
const blob = $(".menu-blob");

function moveBlob(item) {
  if (!item || !blob) return;
  blob.style.left = item.offsetLeft + "px";
}

items.forEach(item => {
  item.addEventListener("click", () => {
    items.forEach(i => i.classList.remove("active"));
    item.classList.add("active");

    moveBlob(item);
  });
});

moveBlob($(".menu-item.active"));


/* =========================
SECTION SCROLL ANIMATION
========================= */

const sections = $$("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach(section => observer.observe(section));


/* =========================
SUPABASE
========================= */

const SUPABASE_URL = "https://dmitkczvdkakkbddhkxj.supabase.co";
const SUPABASE_KEY = "sb_publishable_paHkYGm6z6ZX4p9GBKIR5A_vkXGqEhN";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let contacts = [];

async function loadContacts() {
  const { data, error } = await client
    .from("contacts")
    .select("*")
    .order("nom");

  if (error) return console.error(error);

  contacts = data;

  displayContacts([]);
}

function displayContacts(data) {
  const container = $("#contactsList");

  if (!container) return;

  container.innerHTML = "";

  if (!data.length) {
    container.innerHTML = `
      <div class="empty-search">
        🔍 Recherchez un contact
      </div>
    `;
    return;
  }

  container.innerHTML = data.map(contact => `
    <div class="contact-card">
      <h3>${contact.nom}</h3>
      <div class="service">${contact.service}</div>
      <a class="call-btn" href="tel:${contact.numero}">
        📞 ${contact.numero}
      </a>
    </div>
  `).join("");
}


/* =========================
SEARCH INPUT
========================= */

$("#searchInput")?.addEventListener("input", (e) => {
  const search = e.target.value.trim().toLowerCase();

  if (!search) return displayContacts([]);

  const filtered = contacts.filter(c =>
    c.nom.toLowerCase().includes(search) ||
    c.service.toLowerCase().includes(search)
  );

  displayContacts(filtered);
});


/* =========================
ANNULAIRE NAVIGATION
========================= */

function openDirectory() {
  const section = $("#annuaireSection");

  section?.scrollIntoView({ behavior: "smooth" });

  setTimeout(() => {
    $("#searchInput")?.focus();
  }, 500);
}

loadContacts();
