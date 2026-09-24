/* ===========================
   Mobile Menu Toggle
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
});

/* ===========================
   Form Handling
   =========================== */

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Let Formspree handle the form submission
            // This function can be extended for additional client-side validation
            const emailInput = document.getElementById('email');
            const nameInput = document.getElementById('name');
            
            // Basic validation
            if (!nameInput.value.trim()) {
                e.preventDefault();
                alert('Please enter your name');
                return;
            }
            
            if (!emailInput.value.trim()) {
                e.preventDefault();
                alert('Please enter your email');
                return;
            }
            
            // Form is valid, Formspree will handle submission
        });
    }
});

/* ===========================
   Smooth Scroll Enhancement
   =========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});