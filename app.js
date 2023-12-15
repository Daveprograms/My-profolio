const allSections = document.querySelector(".main-content");

function pageTransitions() {
  allSections.addEventListener("click", (e) => {
    const targetBtn = e.target.closest(".control");
    if (!targetBtn) return;

    const currentActiveBtn = document.querySelector(".active-btn");
    if (currentActiveBtn) {
      currentActiveBtn.classList.remove("active-btn");
    }

    targetBtn.classList.add("active-btn");

    const id = targetBtn.dataset.id;
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    const element = document.getElementById(id);
    if (element) {
      element.classList.add("active");
    }
  });
}

pageTransitions();

const form = document.querySelector(".contact-form");

function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "davfash1@gmail.com",
    Password: "051BACD044C8C1A391BDC41B13914060D54B ",
    To: 'davfash1@gmail.com',
    From: "davfash1@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});








