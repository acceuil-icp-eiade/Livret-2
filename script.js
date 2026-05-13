// SPLASH
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("splash").classList.add("hide");
  }, 2500);
});

// LOGIN
function openLogin() {
  document.getElementById("loginModal").classList.add("show");
}

function closeLogin() {
  document.getElementById("loginModal").classList.remove("show");
}

function checkPassword() {
  const pass = document.getElementById("password").value;

  if (pass === "iadeicp543") {
    closeLogin();
    document.getElementById("disclaimer").classList.add("show");
  } else {
    document.getElementById("error").textContent = "Mot de passe incorrect";
  }
}

// DISCLAIMER
function acceptDisclaimer() {
  document.getElementById("disclaimer").classList.remove("show");
  document.getElementById("content").classList.remove("hidden");
}

// CONTACT SEARCH (SAFE)
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("searchContacts");
  const contacts = document.querySelectorAll(".contact");

  if (!input) return;

  input.addEventListener("input", () => {
    const value = input.value.toLowerCase();

    contacts.forEach(c => {
      c.style.display =
        c.textContent.toLowerCase().includes(value)
          ? "block"
          : "none";
    });
  });
});
