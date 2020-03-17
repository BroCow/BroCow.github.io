
  
/* Lesson 10 Preston Page Weather API Code */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=fbc04d5ec42da978089a013c07d62838";

fetch(apiURL)
    .then((Response) => Response.json())
    .then((jsObject) => {
        console.log(jsObject);
    
document.getElementById('description').textContent = jsObject.weather[0].description;

const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('temp').textContent = jsObject.main.temp;  
document.getElementById('humidity').textContent = jsObject.main.humidity;  
document.getElementById('windSpeed').textContent = jsObject.wind.speed;
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon1').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon1').setAttribute('alt', desc);
document.getElementById('icon2').setAttribute('src', imagesrc);  
document.getElementById('icon2').setAttribute('alt', desc);
document.getElementById('icon3').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon3').setAttribute('alt', desc);
document.getElementById('icon4').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon4').setAttribute('alt', desc);
document.getElementById('icon5').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon5').setAttribute('alt', desc);
});

const apiForecastURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=fbc04d5ec42da978089a013c07d62838";

fetch(apiForecastURL)
    .then((Response) => Response.json())
    .then((jsObject) => {
        console.log(jsObject);

const dayOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]

for (let i = 0; i < jsObject.list.length; i++ ){
    if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {
        
        document.getElementById('day1').textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
        }
    }
    });