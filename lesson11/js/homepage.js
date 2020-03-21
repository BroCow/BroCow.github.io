
/*Hamburger Navigation script*/
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
};

/*Current date & last modified script for footer*/
let date = new Date();
let year = date.getFullYear();
let lastModify = document.lastModified

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = "Last Updated: " + lastModify;

/*Town info from JSON*/

/*Store resource - JSON file from lesson - into variable*/
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
   
    /*Construct variable using name of JSON file*/
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
      
      let card = document.createElement('section');

      let h2 = document.createElement('h2');
      /*Create variables to store info into "p" elements*/
      let motto = document.createElement('p');
      let yearFounded = document.createElement('p');
      let currentPopulation = document.createElement('p');
      let averageRainfall = document.createElement('p');
      let image = document.createElement('img');

      h2.textContent = towns[i].name;
      card.appendChild(h2);
      
      motto.textContent = towns[i].motto;
      card.appendChild(motto);

      yearFounded.textContent = 'Year Founded:' + " " + towns[i].yearFounded;
      card.appendChild(yearFounded);

      currentPopulation.textContent = 'Current Population:' + " " + towns[i].currentPopulation;
      card.appendChild(currentPopulation);

      averageRainfall.textContent = 'Average Rainfall:' + " " + towns[i].averageRainfall;
      card.appendChild(averageRainfall);

      image.setAttribute('src', "images/" + towns[i].photo);
      card.appendChild(image);

      image.setAttribute('alt', towns[i].name + " photo");
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
      }
    }
    
  });
