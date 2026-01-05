/* TABS */
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

/* SLIDER */
let index = 0;
const slides = document.querySelectorAll(".slide");

document.querySelector(".next").onclick = () => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
};

document.querySelector(".prev").onclick = () => {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
};

/* FAQ */
const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  faq.querySelector(".question").onclick = () => {
    faqs.forEach(f => f.querySelector(".answer").style.display = "none");
    faq.querySelector(".answer").style.display = "block";
  };
});

/* FORM (Google Sheet placeholder) */
document.getElementById("franchiseForm").onsubmit = (e) => {
  e.preventDefault();
  document.getElementById("success").innerText = "Form Submitted Successfully!";
};
