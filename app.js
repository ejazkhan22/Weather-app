const API_KEY ="bce869e88210f137937ca8e512b2af29"

// Fetch weather data
const fetchWeather = async () => {
    const city = document.getElementById('city').value.trim();
    const weatherContainer = document.getElementById('weather');

    if (!city) {
        weatherContainer.innerHTML = `<p>Please enter a city name.</p>`;
        return;
    }

    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();

        if (data.cod === 200) {
            displayWeather(data);
        } else {
            weatherContainer.innerHTML = `<p>${data.message}</p>`;
        }
    } catch (error) {
        weatherContainer.innerHTML = `<p>Unable to fetch weather data. Please try again later.</p>`;
    }
};

// Display weather data
const displayWeather = (data) => {
    const weatherContainer = document.getElementById('weather');
    const { name, main, weather } = data;

    weatherContainer.innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>Temperature: ${main.temp}°C</p>
        <p>Feels Like: ${main.feels_like}°C</p>
        <p>Humidity: ${main.humidity}%</p>
    `;
};
