/*Store resource - JSON file from lesson - into variable*/
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      /*Create variables to store info into "p" elements*/
      let birthdate = document.createElement('p');
      let birthplace = document.createElement('p');
      /*Create variable to store image into "image" element*/
      let image = document.createElement('img');
      
      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      card.appendChild(h2);
      
      birthdate.textContent = "Date of Birth:" + " " + prophets[i].birthdate;
      card.appendChild(birthdate);

      birthplace.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
      card.appendChild(birthplace);

      image.setAttribute('src', prophets[i].imageurl);
      card.appendChild(image);

      image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });

  
  