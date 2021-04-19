//  Add HTML and connect all files (check-mate)
//  Create Dynamic drop down menu for Astrological signs (check-mate)
//  Write event handler 
//  Button that removes astrological/food  data
//  Append astrological blurb to the DOM
//  Connect Astrological data to API recipes/food 


const DOMAIN = 'https://spoonacular.com/recipes/';
const API_KEY = "1b80ef314c9144b099e149272c37d2a1"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;


async function getData() {

    try {
    const response = await axios.get(`${BASE_URL}complexSearch?query=${inputValue}`)
  } 



  catch (error) {
    console.error(error)
  }


}
//  Create Dynamic drop down menu for Astrological signs
function mySign() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbutton')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}











