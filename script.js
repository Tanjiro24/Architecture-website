document.addEventListener('DOMContentLoaded', () => {
    const profileCards = document.querySelector('.profile-cards');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const totalCards = document.querySelectorAll('.profile-card').length;
    let currentIndex = 0;

    // Calculate the visible cards based on container width and card width
    function calculateVisibleCards() {
        const containerWidth = document.querySelector('.profile-slider').offsetWidth;
        const cardWidth = document.querySelector('.profile-card').offsetWidth + 20; // Card width plus gap
        return Math.floor(containerWidth / cardWidth);
    }

    // Update carousel position based on current index
    function updateCarousel() {
        const cardWidth = document.querySelector('.profile-card').offsetWidth + 20;
        const maxIndex = totalCards - calculateVisibleCards(); // Max index to avoid blank space
        const offset = -currentIndex * cardWidth;
        profileCards.style.transform = `translateX(${offset}px)`;

        // Disable buttons at the start and end of the carousel
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= maxIndex;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        const maxIndex = totalCards - calculateVisibleCards();
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Recalculate on window resize
    window.addEventListener('resize', () => {
        updateCarousel();
    });

    // Initial setup
    updateCarousel();
});
