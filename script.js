async function getWeather() {
  const city = document.getElementById('cityInput').value.trim();
  const resultDiv = document.getElementById('weatherResult');

  if (city === "") {
    alert("🌍 Please enter a city name!");
    return;
  }

  const apiKey = "9650831c6f9a402ab83153633250511";
  const apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error("City not found ❌");
    const data = await response.json();

    document.getElementById('cityName').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('temperature').textContent = `🌡 ${data.current.temp_c}°C`;
    document.getElementById('condition').textContent = `☁ ${data.current.condition.text}`;
    document.getElementById('weatherIcon').src = `https:${data.current.condition.icon}`;

    resultDiv.classList.remove('hidden');
    resultDiv.style.animation = "slideIn 1s ease";
  } catch (error) {
    alert("⚠️ Error: " + error.message);
    resultDiv.classList.add('hidden');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

