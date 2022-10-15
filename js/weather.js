const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");
const API_KEY = "19f3652db34d8a91d5c7022b79613ee9";

const successCallback = (position) => {
  console.log(position);
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.weather[0].main} / ${Math.floor(
        data.main.temp
      )}`;
      city.innerText = data.name;
    });
};

const errorCallback = () => {
  alert("no position");
};
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
