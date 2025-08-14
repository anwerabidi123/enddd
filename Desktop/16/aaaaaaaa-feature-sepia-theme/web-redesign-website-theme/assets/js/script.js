// --- Mon Guide d'Orientation Positive - Script ---

document.addEventListener('DOMContentLoaded', () => {

    /**
     * Mobile Navigation Menu Toggle
     *
     * This function handles the click event for the mobile navigation toggle button.
     * It adds or removes the 'nav-menu-open' class to show or hide the menu.
     */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            // Toggle the class to show/hide the menu
            navMenu.classList.toggle('nav-menu-open');

            // Optional: Change the icon from "three dots" to a "close" icon
            if (navMenu.classList.contains('nav-menu-open')) {
                navToggle.innerHTML = '&times;'; // A simple "X" icon
            } else {
                navToggle.innerHTML = '&#9776;'; // A hamburger icon (or use a three-dot icon if preferred)
            }
        });
    }

    /**
     * Add animations to elements on scroll
     *
     * This uses the Intersection Observer API to add a 'fade-in' class to elements
     * when they enter the viewport, creating a smooth fade-in effect.
     */
    const animatedElements = document.querySelectorAll('.section, .space-card, .article-card');

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(el => {
            el.style.opacity = '0'; // Hide element initially
            observer.observe(el);
        });
    }
});

// Add keyframes for the animation dynamically
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}`;
document.head.appendChild(styleSheet);

// --- Lightbox Functionality ---
document.addEventListener('DOMContentLoaded', () => {
    const galleryImages = document.querySelectorAll('.image-gallery img, .spaces-grid .imgM');
    const lightbox = document.getElementById('lightbox-overlay');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (galleryImages.length > 0 && lightbox) {
        galleryImages.forEach(img => {
            img.style.cursor = 'pointer'; // Add pointer cursor to images
            img.addEventListener('click', () => {
                lightbox.style.display = 'flex';
                lightboxImg.src = img.src;
            });
        });

        if(closeBtn) {
            closeBtn.addEventListener('click', () => {
                lightbox.style.display = 'none';
            });
        }

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
    }
});
