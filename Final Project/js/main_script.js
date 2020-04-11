// Hamburger menu
const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
    document.querySelector(".navigation").classList.toggle("responsive");
}

//Riverguide JSON Info

/*Store resource - JSON file from lesson - into variable*/
const requestURL = 'https://raw.githubusercontent.com/BroCow/BroCow.github.io/master/Final%20Project/js/river_guides.json';



fetch(requestURL)
  //Returns promise which response we will work with as an argument to an asynchronous function
  .then(function (response) {
    //We need to extract the JSON content from the noise of the full HTTP response using the json() method
    return response.json();
  })
  //Sets us up to work with the converted response data in Javascript object format
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    //Store the results of the converted response into an array - MUST MATCH NAME OF JSON
    const guides = jsonObject['guides'];

    //Need to loop through every record and process them into their own 'cards' using FOR LOOP
    //IMPORTANT: Put this line of code directly after the console.table() line and before you close the .then() method });
    for (let i = 0; i < guides.length; i++) {

      //Now build the HTML of card using the createElement(), textContent(), and appendChild() methods
      //Make each 'card' a <section> element with standard <h2> and <p> for field items and an <img>
      let card = document.createElement('section');
      card.setAttribute('class', 'rg_section');
      
      let h2 = document.createElement('h2');
      h2.textContent = guides[i].firstname + ' ' + guides[i].lastname;
      card.appendChild(h2);

      let cert = document.createElement('p');
      cert.textContent = 'Certification Level:' + ' ' + guides[i].certlevel;
      card.appendChild(cert);

      let yearsOfExperience = document.createElement('p');
      yearsOfExperience.textContent = 'Years of Experience:' + ' ' + guides[i].experience;
      card.appendChild(yearsOfExperience);

      let email = document.createElement('p');
      email.textContent = 'Email:' + ' ' + guides[i].email;
      card.appendChild(email);

      let bio = document.createElement('p');
      bio.textContent = guides[i].bio;
      card.appendChild(bio);

      let image = document.createElement('img');
      image.setAttribute('src', guides[i].image);
      image.setAttribute('alt', 'Picture of river');
      image.setAttribute('class', 'rg_image');
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  });
    
  

  
  
    
    





    

    //for (let i = 0; i < guides.length; i++ ) {
      //let card = document.createElement('section');

      //let h2 = document.createElement('h2');
      //h2.textContent = guides[0].firstname + ' ' + guides[i].lastname;
      //card.appendChild(h2);

      
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
      
    //}
