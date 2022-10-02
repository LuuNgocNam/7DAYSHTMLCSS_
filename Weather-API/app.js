var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value');
var shortDesc = document.querySelector('.short-decs');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var value = document.querySelector('.value');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changWeatherUI(capitalSearch) {
  let apiURl = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch} &appid=c62c7104c8e3ac2ab104a94ba81860c9
  `;

  let data = await fetch(apiURl).then((res) => res.json());
  if (data.cod == 200) {
    content.classList.remove('hide');
    console.log(data);
    city.innerText = data.name;
    country.innerText = data.sys.country;
    visibility.innerText = data.visibility + 'm';
    wind.innerText = data.wind.speed + 'm/s';
    sun.innerText = data.main.humidity + '%';
    let temp = Math.round(data.main.temp - 273.15);
    value.innerText = temp;
    shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';
    time.innerText = new Date().toLocaleString('vi');

    body.setAttribute('class', 'hot');
    if (temp <= 20) {
      body.setAttribute('class', 'cold');
    }
  } else {
    content.classList.add('hide');
  }
}

search.addEventListener('keypress', function (e) {
  if (e.code == 'Enter') {
    let capitalSearch = search.value.trim();

    changWeatherUI(capitalSearch);
  }
});

changWeatherUI('Ha Noi');
