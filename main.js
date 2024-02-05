//api untuk memunculkan data

const apiKey = "16e8837a57253f21d726a7218dd9f782";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector("#search-box");
const input = document.querySelector(".search input");
const cloud = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const respons = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await respons.json();
  console.log(data);
  
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";
  
  if (data.weather[0].main == "Clouds") {
    cloud.src = "cerah.png";
  }else if (data.weather[0].main == "Rain") {
    cloud.src = "hujan.png";
  }else if (data.weather[0].main == "Thunderstorm") {
    cloud.src = "hujan-petir.png";
  }else if (data.weather[0].main == "Clear") {
    cloud.src = "clear.png";
  }else if (data.weather[0].main == "Mist") {
    cloud.src = "mist.png";
  }else if (data.weather[0].main == "Snow") {
    cloud.src = "salju.png";
  }
  
}

document.querySelector("#search-box").onclick = () => {
  checkWeather(input.value);
}

