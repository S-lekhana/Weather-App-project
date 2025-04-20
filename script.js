async function getWeather() {
    const city = document.getElementById('city').value;
    const response = await fetch('/api-key');
    const { apiKey } = await response.json();
  
    if (!city) {
      document.getElementById('weatherResult').innerHTML = `<p>Please enter a city name.</p>`;
      return;
    }
  
    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await weatherRes.json();
  
    if (data.main) {
      document.getElementById('weatherResult').innerHTML = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = `<p>City not found. Please try again.</p>`;
    }
  }
  