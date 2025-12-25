const button = document.getElementById("getweather");
const result = document.getElementById("result");

button.addEventListener("click", getweather);

async function getweather() {
  const city = document.getElementById("city").value.trim();

  if (city === "") {
    result.textContent = "Please enter a city name";
    return;
  }

  const apikey = "5add3b8528d2d4780718cc9de6c6f676";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  result.textContent = "Loading...";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("City not found");
    }

    const data = await response.json();

    result.textContent = `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
  } catch (error) {
    result.textContent =
      "Unable to get touch with weather, please try again later.";
  }
}
