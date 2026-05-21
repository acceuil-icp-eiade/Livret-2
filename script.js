window.addEventListener("load", () => {

setTimeout(() => {
document.getElementById("splash")
.classList.add("hide");
}, 3000);

});
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

  document.querySelector(".bottom-menu")?.classList.add("hidden");
}

function closePopup(id) {
  const popup = document.getElementById(id);
  popup.classList.remove("show");

  setTimeout(() => popup.style.display = "none", 300);

  document.querySelector(".bottom-menu")?.classList.remove("hidden");
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

const items = document.querySelectorAll(".menu-item");
const blob = document.querySelector(".menu-blob");

function moveBlob(item) {
blob.style.left = item.offsetLeft + "px";
}

items.forEach(item => {

item.addEventListener("click", () => {

items.forEach(i =>
i.classList.remove("active")
);

item.classList.add("active");

moveBlob(item);

});

});

/* Position initiale */
moveBlob(document.querySelector(".menu-item.active"));

/* effets glissement*/

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(

entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add("show");
}

});

},

{
threshold: 0.15
}

);

sections.forEach(section => {
observer.observe(section);
});
const SUPABASE_URL = "https://dmitkczvdkakkbddhkxj.supabase.co";
const SUPABASE_KEY = "sb_publishable_paHkYGm6z6ZX4p9GBKIR5A_vkXGqEhN";

const client = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

let contacts = [];

async function loadContacts() {

  const { data, error } = await client
    .from("contacts")
    .select("*")
    .order("nom");

  if(error){
    console.error(error);
    return;
  }

  contacts = data;

  displayContacts([]);
}

function displayContacts(data){

  const container =
    document.getElementById("contactsList");

  container.innerHTML = "";
if(data.length === 0){

  container.innerHTML = `
    <div class="empty-search">
      🔍 Recherchez un contact
    </div>
  `;

  return;
}
  data.forEach(contact => {

    container.innerHTML += `
      <div class="contact-card">

        <h3>${contact.nom}</h3>

        <div class="service">
          ${contact.service}
        </div>

        <a
          class="call-btn"
          href="tel:${contact.numero}"
        >
          📞 ${contact.numero}
        </a>

      </div>
    `;
  });
}
document
.getElementById("searchInput")
.addEventListener("input", (e)=>{

  const search =
    e.target.value.trim().toLowerCase();

  // si rien écrit → aucun contact
  if(search === ""){
    displayContacts([]);
    return;
  }

  const filtered =
    contacts.filter(contact =>

      contact.nom
      .toLowerCase()
      .includes(search)

      ||

      contact.service
      .toLowerCase()
      .includes(search)
    );

  displayContacts(filtered);

});

function openDirectory(){

  const section =
    document.getElementById("annuaireSection");

  if(section){

    section.scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(() => {

      const input =
        document.getElementById("searchInput");

      if(input){
        input.focus();
      }

    }, 500);

  }

}


loadContacts();
function openQuiz() {

document.getElementById("quizPopup").style.display = "flex";

}

function closeQuiz() {

document.getElementById("quizPopup").style.display = "none";

}
