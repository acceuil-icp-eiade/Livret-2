
/* =========================
LOGIN
========================= */

function openLogin() {
document.getElementById("loginModal").classList.add("show");
}

function closeLogin() {
document.getElementById("loginModal").classList.remove("show");
}

function checkPassword() {

const password = document.getElementById("password").value;

if (password === "iadeicp543") {

// ferme popup login
closeLogin();

// cache le hero
document.querySelector(".hero").style.display = "none";

// affiche disclaimer
document.getElementById("disclaimer").classList.add("show");

} else {

document.getElementById("error").innerText =
"Mot de passe incorrect";

}
}


function softClick() {
// vibration mobile (si supporté)
if (navigator.vibrate) {
navigator.vibrate(10); // très léger = "soft click"
}
}
document.querySelectorAll(".btn, .card, .clickable").forEach(el => {
el.addEventListener("click", () => {
softClick();
});
});
function openPopup(id) {
const popup = document.getElementById(id);
popup.style.display = "flex";
setTimeout(() => popup.classList.add("show"), 10);
}

function closePopup(id) {
const popup = document.getElementById(id);
popup.classList.remove("show");
setTimeout(() => popup.style.display = "none", 300);
}
function toggleMenu(id) {
const menus = document.querySelectorAll(".submenu");

menus.forEach(menu => {
if (menu.id === id) {
menu.classList.toggle("open");
} else {
menu.classList.remove("open");
}
});
}

function toggleVideo() {
const video = document.getElementById("videoContainer");
const iframe = document.getElementById("videoFrame");
const button = document.getElementById("videoBtn");

if (video.classList.contains("show")) {
video.classList.remove("show");
setTimeout(() => video.classList.add("hidden"), 400);
button.innerHTML = "▶️ Voir la visite du bloc";
} else {
video.classList.remove("hidden");
setTimeout(() => video.classList.add("show"), 10);
button.innerHTML = "❌ Fermer la vidéo";

setTimeout(() => {
if (iframe.requestFullscreen) {
iframe.requestFullscreen();
} else if (iframe.webkitRequestFullscreen) {
iframe.webkitRequestFullscreen();
} else if (iframe.msRequestFullscreen) {
iframe.msRequestFullscreen();
}
}, 500);
}
}

function showDisclaimer() {
document.getElementById("disclaimer").classList.add("show");
}

function acceptDisclaimer() {
const disclaimer = document.getElementById("disclaimer");
const content = document.getElementById("content");
disclaimer.classList.remove("show");
content.classList.remove("hidden");
}
function toggleItem(element) {
const content = element.querySelector(".content");
content.classList.toggle("hidden");
}window.addEventListener("load", () => {
setTimeout(() => {
document.querySelector(".icons")?.classList.add("show");
}, 800);
});
window.addEventListener("load", () => {
setTimeout(() => {
const icons = document.querySelector(".icons");
if (icons) {
icons.classList.add("show");
}
}, 800);
});


