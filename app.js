//  Add HTML and connect all files (check-mate)
//  Create Dynamic drop down menu for Astrological signs (check-mate)
//  Write event handler 
//  Button that removes astrological/food  data
//  Append astrological blurb to the DOM
//  Connect Astrological data to API recipes/food 
const foodIds = {
  "aries": 642372,
  "taurus": 631750,
  "gemini": 
 "pisces": 1095994,

}

const DOMAIN = 'https://spoonacular.com/recipes/';
const API_KEY = "1b80ef314c9144b099e149272c37d2a1"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

// "id": 1095994
async function getAll() {
  const url = `https://api.spoonacular.com/recipes/${foodIds.pisces}/information?includeNutrition=false&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      console.log(response.data)

  }
  catch (error) {
    console.error(error)
  }

}
getAll()

function addFood() {
  

}
//  Create Dynamic drop down menu for Astrological signs













