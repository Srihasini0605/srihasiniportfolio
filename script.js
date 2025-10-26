// Simple scroll animation for sections
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(50px)";
});

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
            section.style.transition = "all 0.8s ease-out";
        }
    });
});
 
