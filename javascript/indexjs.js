 let slideIndex = 0;

 function showSlides() {
     let slides = document.getElementsByClassName("slider-container-slide");

     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }

     let lines = document.getElementsByClassName("line")
     
     for (i = 0; i < slides.length; i++) {
         lines[i].className = lines[i].className.replace("active", " ")
     }

     slideIndex++;

     if (slideIndex > slides.length) {
         slideIndex = 1;
     }

     slides[slideIndex-1].style.display = "block";
     lines[slideIndex-1].className = lines[slideIndex-1].className + " active"
     setTimeout(showSlides, 4000)
}

showSlides();