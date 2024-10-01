document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in effect
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });

    // Add hover effect to sections
    document.querySelectorAll('.section').forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.transform = 'translateY(-5px)';
            section.style.boxShadow = '0 6px 25px rgba(0,0,0,0.1)';
        });
        section.addEventListener('mouseleave', () => {
            section.style.transform = 'translateY(0)';
            section.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
        });
    });
});