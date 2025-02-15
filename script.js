const apiKey = "11f047520c5db23134d5eb7427fa6d22"; 

document.getElementById("getWeather").addEventListener("click", function () {
    const city = document.getElementById("city").value.trim();

    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found. Please check the city name.");
            }
            return response.json();
        })
        .then(data => {
            const weatherData = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;
            document.getElementById("weatherResult").innerHTML = weatherData;
        })
        .catch(error => {
            document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${error.message}</p>`;
        });
});