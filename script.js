const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeToggle.textContent = "Light mode";
  } else {
    themeToggle.textContent = "Dark mode";
  }
});

const yearSpan = document.getElementById("year");
yearSpan.textContent = new Date().getFullYear();

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {
  card.classList.add("loaded");
});

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = form.elements["name"].value;
  const email = form.elements["email"].value;

  if (name === "" || email === "") {
    status.textContent = "Please fill in your name and email.";
  } else {
    status.textContent = "Thanks, " + name + "! Your message was received.";
    form.reset();
  }
});
