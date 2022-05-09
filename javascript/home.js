let index = 0;
let indexReminders = 0;

function recommendedSlider() {

    let slides = document.getElementsByClassName("slide");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    index++;

    if (index > slides.length) {
        index = 1;
    }

    slides[index-1].style.display = "flex"

    setTimeout(recommendedSlider, 4000)
}

recommendedSlider();
