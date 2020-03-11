


const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&APPID=fbc04d5ec42da978089a013c07d62838";

fetch(apiURL)
    .then((Response) => Response.json())
    .then((jsObject) => {
        console.log(jsObject);
    });