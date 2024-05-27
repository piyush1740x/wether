const city = document.getElementById("city");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const search = document.getElementById("search");
const btn = document.getElementById("btn");

const api = `http://api.weatherapi.com/v1/current.json?key=708b7bdacc7d4fd2bc5174437242605&q=gorakhpur&aqi=yes
`;

async function getData() {
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
  temperature.innerHTML = data.current.temp_c + "°C";
  city.innerHTML = data.location.name;
  description.innerHTML = data.current.condition.text + "_sky";
  humidity.innerHTML = data.current.humidity;
  wind.innerHTML = data.current.wind_kph + "km/h";
}
getData() 


