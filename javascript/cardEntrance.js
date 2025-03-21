const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver (entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold:0.5
});

cards.forEach(card => {
    observer.observe(card);
});