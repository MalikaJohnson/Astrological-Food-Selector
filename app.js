//  Add HTML and connect all files (check-mate)
//  Create Dynamic drop down menu for Astrological signs (check-mate)
//  Write event handler 
//  Button that removes astrological/food  data
//  Append astrological blurb to the DOM
//  Connect Astrological data to API recipes/food 
const foodIds = {
  "aries": 642372,
  "taurus": 631750,
  "gemini": 649030,
  "cancer": 640279,
  "leo": 659677,
  "virgo": 644965,
  "libra": 663357,
  "scorpio": 631756,
  "sag": 663144,
  "cap": 636360,
  "aquarius": 716381,
 "pisces": 1095994,

}

const DOMAIN = 'https://spoonacular.com/recipes/';
const API_KEY = "1b80ef314c9144b099e149272c37d2a1"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;


const searchBtn = document.querySelector("#search")
searchBtn.addEventListener("click", getAll)


async function getAll() {
  const url = `https://api.spoonacular.com/recipes/${foodIds.aries}/information?includeNutrition=false&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      console.log(response.data)
      addFood(response.data.search)
      return response

  }
  catch (error) {
    console.error(error)
  }

}
getAll()

const addFood = (data) => {
  data.forEach((food) => {
    const foodTitle = document.createElement("h3")
    foodTitle.innerText = food.Title
    document.querySelector(".foodData").append(foodTitle)

    const foodImage = document.createElement("img")
    foodImage.src = food.Image
    document.querySelector(".foodData").append(foodImage)

    const foodSourceUrl = document.createElement("h4")
    foodSourceUrl.innerText = food.SourceUrl
    document.querySelector(".foodData").append(foodSourceUrl)
  })

}















