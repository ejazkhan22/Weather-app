const API_KEY ="bce869e88210f137937ca8e512b2af29"

// Fetch weather data
const fetchWeather = async () => {
    const city = document.getElementById('city').value.trim();
    const weatherContainer = document.getElementById('weather');

    if (!city) {
        weatherContainer.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }
    weatherContainer.innerHTML = `<div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}&unit=matrik`;
    const response = await fetch(URL);
    const data = await response.json();
    return       displayWeather(data);
}

// Display weather data
const displayWeather = (data) => {
    const weatherContainer = document.getElementById('weather');



    weatherContainer.innerHTML = `
        <h2>${data.name}</h2>
        <img src = "https://openweathermap.org/img/wn/${`data.weather[0].icon`}@2x.png"></img>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Feels Like: ${data.main.feels_like}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
    `;
};
