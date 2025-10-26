// ===== Smooth Scroll for Navigation Links =====
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===== Fade-in Sections on Scroll =====
const sections = document.querySelectorAll('section');

const observerOptions = {
    threshold: 0.1 // trigger when 10% of section is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.transition = 'all 0.8s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(50px)';
    observer.observe(section);
});

// ===== Highlight Active Nav Link on Scroll =====
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // offset for fixed header
        if(window.scrollY >= sectionTop){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === '#' + current){
            link.classList.add('active');
        }
    });
});
