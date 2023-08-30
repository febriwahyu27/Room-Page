// SLIDER
const slider = document.querySelector('.slider');
const caption = document.querySelector(".slide-caption")
let slideIndex = 0;

function showSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
    caption.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % 3;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + 3) % 3;
    showSlide(slideIndex);
}

const prevButton = document.querySelector('.swipe-left');
const nextButton = document.querySelector('.swipe-right');
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// END SLIDER

// HUMBERGER
const ul = document.querySelectorAll("nav ul li a");
document.querySelector(".humberger").addEventListener("click", function(){
    document.querySelector("nav").style.display = 'none';
    document.querySelector(".nav-mobile").style.animationName = 'nav-down';
    document.querySelector(".nav-mobile").style.top = '0';
    document.querySelector("section").style.filter = 'brightness(50%)'
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".nav-mobile").style.animationName = 'nav-up';
    document.querySelector(".nav-mobile").style.top = '-100px';
    document.querySelector("nav").style.display = 'flex';
    document.querySelector("section").style.filter = 'brightness(100%)'
})
// END HUMBERGER

