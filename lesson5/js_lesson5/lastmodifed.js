let date = new Date();
let year = date.getFullYear();
let lastModify = document.lastModified

document.getElementById("currentYear").textContent = year;
document.getElementById("lastModif").textContent = "Last Updated: " + lastModify;