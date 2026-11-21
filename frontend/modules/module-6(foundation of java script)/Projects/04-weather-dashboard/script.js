// PROJECT 04: WEATHER DASHBOARD
// Concepts: fetch(), async/await, URLSearchParams, Promise errors, API data mapping.

const form = document.querySelector("#search-form");
const cityInput = document.querySelector("#city-input");
const statusMessage = document.querySelector("#status");
const weatherCard = document.querySelector("#weather-card");

// Open-Meteo uses numeric weather codes. Convert them into readable labels and icons.
function describeWeather(code) {
  if (code === 0) return { label: "Clear sky", icon: "☀️" };
  if ([1, 2].includes(code)) return { label: "Mostly clear", icon: "🌤️" };
  if (code === 3) return { label: "Overcast", icon: "☁️" };
  if ([45, 48].includes(code)) return { label: "Fog", icon: "🌫️" };
  if ([51, 53, 55, 56, 57].includes(code)) return { label: "Drizzle", icon: "🌦️" };
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return { label: "Rain", icon: "🌧️" };
  if ([71, 73, 75, 77, 85, 86].includes(code)) return { label: "Snow", icon: "❄️" };
  if ([95, 96, 99].includes(code)) return { label: "Thunderstorm", icon: "⛈️" };
  return { label: "Mixed conditions", icon: "🌡️" };
}

// Fetch JSON and provide a useful error when the network or API fails.
async function getJson(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Weather service returned ${response.status}. Please try again.`);
  return response.json();
}

async function searchWeather(city) {
  statusMessage.textContent = "Finding city and loading weather…";
  weatherCard.hidden = true;

  try {
    // Step 1: Convert the city name into latitude and longitude.
    const geoParams = new URLSearchParams({ name: city, count: "1", language: "en", format: "json" });
    const geoData = await getJson(`https://geocoding-api.open-meteo.com/v1/search?${geoParams}`);

    if (!geoData.results || geoData.results.length === 0) {
      throw new Error("City not found. Check the spelling and try again.");
    }

    const place = geoData.results[0];

    // Step 2: Use the coordinates to request current conditions and today's high/low.
    const weatherParams = new URLSearchParams({
      latitude: place.latitude,
      longitude: place.longitude,
      current: "temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m",
      daily: "temperature_2m_max,temperature_2m_min",
      timezone: "auto"
    });
    const weather = await getJson(`https://api.open-meteo.com/v1/forecast?${weatherParams}`);

    displayWeather(place, weather);
    statusMessage.textContent = "Weather updated successfully.";
  } catch (error) {
    statusMessage.textContent = error.message || "Something went wrong. Please try again.";
  }
}

function displayWeather(place, data) {
  const current = data.current;
  const today = data.daily;
  const description = describeWeather(current.weather_code);

  document.querySelector("#location-name").textContent =
    [place.name, place.admin1, place.country].filter(Boolean).join(", ");
  document.querySelector("#local-time").textContent = `Local time: ${current.time.replace("T", " ")}`;
  document.querySelector("#condition").textContent = description.label;
  document.querySelector("#weather-icon").textContent = description.icon;
  document.querySelector("#temperature").textContent = `${Math.round(current.temperature_2m)}°`;
  document.querySelector("#feels-like").textContent = `${Math.round(current.apparent_temperature)}°C`;
  document.querySelector("#humidity").textContent = `${current.relative_humidity_2m}%`;
  document.querySelector("#wind").textContent = `${Math.round(current.wind_speed_10m)} km/h`;
  document.querySelector("#range").textContent =
    `${Math.round(today.temperature_2m_min[0])}° / ${Math.round(today.temperature_2m_max[0])}°`;
  weatherCard.hidden = false;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = cityInput.value.trim();
  if (city) searchWeather(city);
});

// Load a default city on the first visit so the dashboard is not empty.
searchWeather(cityInput.value);
