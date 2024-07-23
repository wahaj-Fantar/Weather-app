let temperature = document.querySelector(".temperature");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchBtn = document.querySelector(".search-button");
let searchField = document.querySelector(".search-field");
let weather = document.querySelector(".weather-icon");

function checkWeather(cityName) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=dc499dd9e225a96a12b5b2b7f2fe9d85`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      wind.innerHTML = `${data.wind.speed}km/h <br> Wind Speed`;
      humidity.innerHTML = `${data.main.humidity}% <br> Humidity`;
      temperature.innerHTML = `${Math.floor(data.main.temp)}°C`;
      city.innerHTML = `${data.name}`;
      if (data.weather[0].main === "Clear") {
        weather.src = "images/clear.png";
      } else if (data.weather[0].main == "Clouds") {
        weather.src = "images/clouds.png";
      } else if (data.weather[0].main == "Rain") {
        weather.src = "images/rain.png";
      } else if (data.weather[0].main == "Snow") {
        weather.src = "images/snow.png";
      } else if (data.weather[0].main == "drizzle") {
        weather.src = "images/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weather.src = "images/mist.png";
      }
    })

    .catch((error) => {
      console.log(error);
    });
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchField.value);
});
