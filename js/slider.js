const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;
//image slider next button
nextBtn.addEventListener("click", () => {
    slides.forEach((slides) => {
        slides.classList.remove("active");
    });
    slides.forEach((slideIcons) => {
        slideIcons.classList.remove("active")
    });
    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
//image slider prev button
prevBtn.addEventListener("click", () => {
    slides.forEach((slides) => {
        slides.classList.remove("active");
    });
    slides.forEach((slideIcons) => {
        slideIcons.classList.remove("active")
    });
    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }
    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});
//image slider auto-play
var playSlider;
var repeater = () => {
    playSlider = setInterval(function() {
        slides.forEach((slides) => {
            slides.classList.remove("active");
        });
        slides.forEach((slideIcons) => {
            slideIcons.classList.remove("active")
        });
        slideNumber++;

        if (slideNumber > (numberOfSlides - 1)) {
            slideNumber = 0;
        }
        slides[slideNumber].classList.add("active");
        slideIcons[slideNumber].classList.add("active");
    }, 5000);
}
repeater();
//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
    clearInterval(playSlider);
});
//start the image slider autoplay on mouseout
slider.addEventListener("mouseout", () => {
    repeater();
});