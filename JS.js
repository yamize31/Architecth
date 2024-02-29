let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

document.getElementById('prev').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'block';
});

document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
});

// Seharusnya Repeat"tanya agil nanti "
document.getElementById('next').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = 'block';
});



