
  
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
});

/* Forecast Script */
const apiForecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=35b12c8d999fdda2699d5d2204b76ea4";

fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
	console.log(jsObject);
	
	const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

	for (let i = 0; i < jsObject.list.length; i++ ){
		if (new Date(jsObject.list[i].dt_txt).getHours() == 18) {

			var forecastAPI = jsObject.list[i];
			
			let div1 = document.createElement('div');
			let div2 = document.createElement('div');
			let head = document.createElement('strong');
			let div3 = document.createElement('div');
			let image = document.createElement('img');
			let temp = document.createElement('p');

			const imageidentifier = forecastAPI.weather[0].main;
			if (imageidentifier == "Clear"){
				var imgSource = "images/sun.png";
			} 
			else if (imageidentifier == "Clouds"){
				var imgSource = "images/clouds.png";
			}
			else if (imageidentifier == "Snow"){
				var imgSource = "images/snow.png";
			}
			else if (imageidentifier == "Rain" || imageidentifier == "Drizzle"){
				var imgSource = "images/rain.png";
			}
			else if (imageidentifier == "Thunderstorm"){
				var imgSource = "images/rain.png";
			}
			else {
				var imgSource = "images/mist.png"
			}


			head.textContent = dayOfWeek[new Date(forecastAPI.dt_txt).getDay()];
			image.setAttribute('src', imgSource);
			image.setAttribute('alt', forecastAPI.weather[0].description);
			temp.innerHTML = forecastAPI.main.temp.toFixed(1) + " &#8457;";

			div1.appendChild(div2);
			div2.classList.add("Day");
			div2.appendChild(head);
			div3.classList.add("DayContent");
			div1.appendChild(div3);
			div3.appendChild(image);
			div3.appendChild(temp);

			document.querySelector('div.forecastTable').appendChild(div1);

		}
	}
  });
