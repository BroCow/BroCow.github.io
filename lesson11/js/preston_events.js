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
      if (towns[i].name == 'Preston') {
      
      let card = document.createElement('section');

      let h2 = document.createElement('h2');
      /*Create variables to store info into "p" elements*/
      let event1 = document.createElement('p');
      let event2 = document.createElement('p');
      let event3 = document.createElement('p');

      h2.textContent = 'Upcoming ' + towns[i].name + ' Events';
      card.appendChild(h2);
      
      event1.textContent = towns[i].events[0];
      card.appendChild(event1);

      event2.textContent = towns[i].events[1];
      card.appendChild(event2);

      event3.textContent = towns[i].events[2];
      card.appendChild(event3);

      document.querySelector('div.cards').appendChild(card);
      }
    }
    
  });