// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Planet details modal functionality
document.querySelectorAll('.planet-detail-btn').forEach(button => {
    button.addEventListener('click', function() {
        const planet = this.getAttribute('data-planet');
        // In a real implementation, this would open a modal with detailed information
        alert(`Showing detailed information for ${planet.charAt(0).toUpperCase() + planet.slice(1)}. This would open a modal in a complete implementation.`);
    });
});

// Mobile menu toggle (would be added in a real implementation)
// This is a placeholder for when mobile menu functionality is needed
function setupMobileMenu() {
    const menuToggle = document.createElement('div');
    menuToggle.className = 'mobile-menu-toggle';
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('header').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('active');
    });
}

// Check if mobile menu is needed and initialize
if (window.innerWidth < 768) {
    setupMobileMenu();
}

// Reinitialize on resize
window.addEventListener('resize', function() {
    if (window.innerWidth < 768 && !document.querySelector('.mobile-menu-toggle')) {
        setupMobileMenu();
    }
});