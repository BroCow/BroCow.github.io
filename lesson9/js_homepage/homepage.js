
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

/*Storm rating number adjustment*/
function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}
