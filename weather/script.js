const searchField = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const weatherDisplay = document.querySelector(".weather-container");
const detailsDisplay = document.querySelector(".details");
const cardDisplay = document.querySelector(".card-container");
const error = document.querySelector(".error");


async function getWeather(city) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8968c679397300efc71109bbe3996366`);
        if (!response.ok) {
            throw new Error("Weather API request failed or city not found");
        }
        const data = await response.json();
        console.log(data);
        return [data.main.temp, data.name, data.wind.speed, data.main.humidity, data.weather[0].main];
};

searchBtn.addEventListener("click", () => {
    const cityName = searchField.value;
    getWeather(cityName)
        .then(data => {
            const temperature = document.querySelector(".temp");
            const city = document.querySelector(".city");
            const wind = document.querySelector(".wind");
            const humidity = document.querySelector(".humidity");
            const icon = document.querySelector(".weather-icon");

            temperature.innerHTML = (Number(data[0]) - 273.15).toFixed(0) + "°c";
            city.innerHTML = data[1];
            wind.innerHTML = data[2] + " km/h";
            humidity.innerHTML = data[3] + "%";

            switch (data[4]) {
                case "Rain":
                icon.src = "images/rain.png";
                break;
                case "Snow":
                icon.src = "images/snow.png";
                break;
                case "Clear":
                icon.src = "images/clear.png";
                break;
                case "Mist":
                icon.src = "images/mist.png";
                break;
                case "Drizzle":
                icon.src = "images/drizzle.png";
                break;
                case "Clouds":
                icon.src = "images/clouds.png";
                break;
            };
            showDetails();
        })
        
        .catch(e => {
            error.style.display = "flex";
            console.log(e);
        });
});


const showDetails = () => {
    weatherDisplay.style.display = "flex";
    detailsDisplay.style.display = "flex";
    cardDisplay.style.height = "600px";
    error.style.display = "none";
}
