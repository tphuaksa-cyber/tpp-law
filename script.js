// Add any interactivity here
document.addEventListener('DOMContentLoaded', () => {
    console.log('PR Website Loaded Successfully');

    // Example: Smooth scroll for links (fallback for older browsers)
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                // CSS scroll-behavior: smooth is already active, 
                // but we could add custom logic here if needed.
            }
        });
    });
});