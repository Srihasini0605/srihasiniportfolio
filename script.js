// Section fade-in animation on scroll
const sections = document.querySelectorAll("section");
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
});

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
            sec.style.transition = "all 0.8s ease-out";
        }
    });
});


