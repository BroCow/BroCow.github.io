// Hamburger menu
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

//Riverguide Jason Info
/*Store resource - JSON file from lesson - into variable*/


const riverguideJson = js/river_guides.json;


fetch(riverguideJson)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing


    const guides = jsonObject['guides'];

    for (let i = 0; i < guides.length; i++ ) {
      let card = document.createElement('section');

      let h2 = document.createElement('h2');
      h2.textContent = guides[i].firstname + ' ' + guides[i].lastname;
      card.appendChild(h2);

      
      /*Create variables to store info into "p" elements*/
      //let birthdate = document.createElement('p');
      //let birthplace = document.createElement('p');
      /*Create variable to store image into "image" element*/
      //let image = document.createElement('img');
      
      
      
     // birthdate.textContent = "Date of Birth:" + " " + prophets[i].birthdate;
      //card.appendChild(birthdate);

      //birthplace.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
     // card.appendChild(birthplace);

      //image.setAttribute('src', prophets[i].imageurl);
     // card.appendChild(image);

     // image.setAttribute('alt', prophets[i].name + " " + prophets[i].lastname + " - " + prophets[i].order);
      //card.appendChild(image);

      //document.querySelector('div.cards').appendChild(card);
      
    }
  });