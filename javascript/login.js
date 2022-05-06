let index = 0

function showSlides() {
    let slides = document.getElementsByClassName("slide-card");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    let lines = document.getElementsByClassName("line")

    for(i = 0; i < slides.length; i++) {
        lines[i].className = lines[i].className.replace("active", " ")
    }

    index++;

    if (index > slides.length) {
        index = 1;
    }

    slides[index-1].style.display = "flex"
    lines[index-1].className = lines[index-1].className + " active"
    setTimeout(showSlides, 10000)
}

showSlides();


const userData = [
    {
        user: "jhon25",
        password: "jhon1522"
    }
]

function logIn() {

    let userName = document.getElementById("loginUsername");
    let userNameValue = userName.value;
    let userPassword = document.getElementById("loginPassword");
    let userPasswordValue = userPassword.value;

    if (userData[0].user == userNameValue && userData[0].password == userPasswordValue) {

        window.location.assign("../html/home.html")
    }
    else {
        alert("Wrong username or password")
    }
};