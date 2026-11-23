
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const plan = document.getElementById("plan").value;
  const message = document.getElementById("formMessage");

  if (!name || !email || !phone || !plan) {
    message.textContent = "Please complete all fields.";
    return;
  }

  message.textContent =
    "Thank you, " + name +
    "! Your " + plan +
    " registration request has been received in this demo.";

  form.reset();
});

