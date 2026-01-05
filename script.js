// -------tabs------
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

// --------------testimonal---------
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

// ---------faq-----
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
  const icon=faq.querySelector('i');
  const answer=faq.querySelector('.answer');

  // 1️⃣ Close all FAQs first
    faqs.forEach(item => {
      if (item !== faq) {
        item.classList.remove('active');
        item.classList.replace('fa-minus', 'fa-plus');
      }
    });

faq.addEventListener("click",()=>{
  answer.classList.toggle("active");
  //toggele icon plusminus
    if (answer.classList.contains('active')) {
      icon.classList.replace('fa-plus', 'fa-minus');
    } else {
      icon.classList.replace('fa-minus', 'fa-plus');
    }
})
  
});


