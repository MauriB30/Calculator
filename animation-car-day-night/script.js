const changeBackground = document.querySelector("#swicht");
const background = document.querySelector("#background");
const day = true;
const toggle = document.querySelector("#toggle-btn");
const imgCar = document.querySelector("#img-car");

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
