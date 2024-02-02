let changeBackground = document.querySelector("#swicht");
let background = document.querySelector("#background");
let day = true;
let toggle = document.querySelector("#toggle-btn");
let imgCar = document.querySelector("#img-car");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    if (day) {
        background.style.backgroundImage = "url('/assets/Img_1.png')"
        imgCar.src = '/assets/Img_06.png';
        day = false;
    } else {
        background.style.backgroundImage = "url('/assets/Sunrise.jpg')"
        imgCar.src = '/assets/Img_05.png';
        day = true;
    }
});