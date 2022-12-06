/* app.js */

const API_KEY = "2e7bdc741e08b8849666468a83a0040c";
let city_name = "Seoul";
let API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_KEY}`;

fetch(API_URL)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    console.log(data);

    // 각 속성을 불러오려면 데이터의 배열관계를 잘 확인해야 함
    const name = data.name;
    const desc = data.weather[0].main; // 날씨상태 설명
    const icon = data.weather[0].icon; // 날씨상태 아이콘
    const temp = Math.floor((data.main.temp - 273.15) * 100) / 100; // 현재온도
    console.log(name, desc, icon, temp);

    const nameEl = document.querySelector(".city_name");
    const descEl = document.querySelector(".desc");
    const iconEl = document.querySelector(".icon");
    const tempEl = document.querySelector(".temp");

    nameEl.innerHTML = name;
    descEl.innerHTML = desc;
    iconEl.innerHTML = `<img src="${icon}" alt="아이콘">`;
    tempEl.innerHTML = `${temp}&deg;`;
  });
