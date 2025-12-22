const sections = document.querySelectorAll("section");

const revealSection = () => {
  const triggerPoint = window.innerHeight / 1.2;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerPoint) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);
