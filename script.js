// ==========================
// Fade-in Sections on Scroll
// ==========================
document.addEventListener("DOMContentLoaded", () => {
    const faders = document.querySelectorAll(".fade");

    const options = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing once visible
        });
    }, options);

    faders.forEach(fader => {
        observer.observe(fader);
    });
});

// ==========================
// Smooth Scrolling for Nav Links
// ==========================
const navLinks = document.querySelectorAll("header nav a");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // Highlight active link
        navLinks.forEach(nav => nav.classList.remove("active"));
        link.classList.add("active");
    });
});

// ==========================
// Optional: Scroll Spy Highlight
// ==========================
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    let scrollPos = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
            navLinks.forEach(link => link.classList.remove("active"));
            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
});
