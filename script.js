 // Javascript start	
var countriesList = document.getElementById("countries");
var countries; 
countriesList.addEventListener("change", newCountrySelection);

function newCountrySelection(event) {
  displayCountryInfo(event.target.value);
}

//Fetch API data 
fetch("https://restcountries.com/v2/all")
.then(res => res.json())
.then(data => initialize(data))
.catch(err => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;
  var options = "";
 
  countries.forEach(country => options+=`<option value="${country.alpha3Code}">${country.name}</option>`);
 
  countriesList.innerHTML = options;
  
  countriesList.selectedIndex = Math.floor(Math.random()*countriesList.length);
  displayCountryInfo(countriesList[countriesList.selectedIndex].value);
}

//Api Data connection  
function displayCountryInfo(countryByAlpha3Code) {
  var countryData = countries.find(country => country.alpha3Code === countryByAlpha3Code);
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector("#flag-container img").alt = `Flag of ${countryData.name}`;  
  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("population").innerHTML = countryData.population.toLocaleString("en-US");
  document.getElementById("region").innerHTML = countryData.region;
 
}