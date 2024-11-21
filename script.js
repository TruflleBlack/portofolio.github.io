document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Toggle overflow pada body
        document.body.style.overflow = 
            navLinks.classList.contains('active') ? 'hidden' : 'initial';
    });

    // Menutup menu saat link diklik
    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            // Kembalikan overflow ke normal
            document.body.style.overflow = 'initial';
        });
    });

    // Menutup menu saat mengklik di luar navbar
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            // Kembalikan overflow ke normal
            document.body.style.overflow = 'initial';
        }
    });
});

// Tambahkan smooth scroll untuk link navbar
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Tutup menu mobile
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'initial';
            
            // Smooth scroll ke section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});