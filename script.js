let text = document.getElementById('text');
let w2 = document.getElementById('W2');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + 'px';
    w2.style.top = value * 0.5 + 'px';

});
const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Add class when it enters the screen
                    entry.target.classList.add('active');
                } else {
                    // Remove class when it leaves the screen (allows repeat)
                    entry.target.classList.remove('active');
                }
            });
        }, {
            threshold: 0.2 // Triggers when 20% of the element is visible
        });

        // Start watching the elements
        const hiddenElements = document.querySelectorAll('.reveal');
        hiddenElements.forEach((el) => observer.observe(el));