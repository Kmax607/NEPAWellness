document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
        carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(showNextSlide, 4000); // Change slide every 4 seconds
});
