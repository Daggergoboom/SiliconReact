const menuBtn = document.querySelector('.menu-btn')
const mainMenu = document.querySelector('#main-menu')



const swi = document.querySelector('#darkmode-switch')



swi.addEventListener('click', (evt) => {


  if (!evt.target.checked) {
    document.body.classList.add('lightTheme')
    document.body.classList.remove('darkTheme')
  } else {
    document.body.classList.add('darkTheme')
    document.body.classList.remove('lightTheme')
  }
})

menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true' 

    if(isExpanded) {
        menuBtn.setAttribute('aria-expanded', false)
        mainMenu.addEventListener('animationend', () => {
            mainMenu.classList.add('hide')
        }, { once: true })
    }
    else {
        mainMenu.classList.remove('hide')
        menuBtn.setAttribute('aria-expanded', true) 
    }
})

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
  const question = faq.querySelector(".question");
  const answer = faq.querySelector(".answer");
  const chevronBtn = faq.querySelector(".faq-down-btn i");  // Select the Font Awesome icon within the button

  question.addEventListener("click", () => {

    if (faq.classList.contains("active")) {
      faq.classList.remove("active");
      answer.style.maxHeight = null;  // Collapse the answer
      chevronBtn.classList.remove("fa-chevron-up");  // Change chevron back to down
      chevronBtn.classList.add("fa-chevron-down");
    } else {
      // Close any other open FAQs
      faqs.forEach(otherFaq => {
        if (otherFaq.classList.contains("active")) {
          otherFaq.classList.remove("active");
          otherFaq.querySelector(".answer").style.maxHeight = null;  // Collapse other answers
          otherFaq.querySelector(".faq-down-btn i").classList.remove("fa-chevron-up");  // Reset other chevrons
          otherFaq.querySelector(".faq-down-btn i").classList.add("fa-chevron-down");
        }
      });

      // Open the clicked FAQ
      faq.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";  // Expand the answer
      chevronBtn.classList.remove("fa-chevron-down");  // Change chevron to up
      chevronBtn.classList.add("fa-chevron-up");
    }
  });
});