document.addEventListener("DOMContentLoaded", () => {
    // Hero section animation
    gsap.from(".hero-content h1", { duration: 1, y: -50, opacity: 0 });
    gsap.from(".hero-content p", { duration: 1, y: -30, opacity: 0, delay: 0.3 });
    gsap.from(".cta-button", { duration: 1, scale: 0.5, opacity: 0, delay: 0.8 });

    // Skill animations
    const skills = document.querySelectorAll(".skill");
    skills.forEach((skill, index) => {
        gsap.from(skill, { duration: 0.5, scale: 0.8, opacity: 0, delay: index * 0.2 });
    });

    // Project card hover effect
    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach(card => {
        card.addEventListener("mouseover", () => {
            gsap.to(card, { scale: 1.1, duration: 0.3 });
        });
        card.addEventListener("mouseout", () => {
            gsap.to(card, { scale: 1, duration: 0.3 });
        });
    });
});