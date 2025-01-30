// JavaScript for handling the search functionality
document.querySelector('.search-button').addEventListener('click', handleSearch);
document.querySelector('.search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    const searchQuery = document.querySelector('.search-input').value;
    if (searchQuery.trim() !== '') {
        alert(`You searched for: ${searchQuery}`);
    } else {
        alert("Please enter a search term.");
    }
}

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);
