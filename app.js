//  Add HTML and connect all files (check-mate)
//  Create Dynamic drop down menu for Astrological signs (check-mate)
//  Write event handler 
//  Button that removes astrological/food  data
//  Append astrological blurb to the DOM
//  Connect Astrological data to API recipes/food 


const DOMAIN = 'https://spoonacular.com/recipes/';
const API_KEY = "1b80ef314c9144b099e149272c37d2a1"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const zodiacExplain = {
  642372: "this is aries",
  659677: "this is leo",

}

const searchBtn = document.querySelector("#search")
searchBtn.addEventListener("click", getAll)


async function getAll() {
  removeFood()
  const foodBtn = document.querySelector('.foodBtn').value
  const url = `https://api.spoonacular.com/recipes/${foodBtn}/information?includeNutrition=false&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      console.log(response.data)
      const selectedOption = document.querySelector(".foodBtn").selectedOptions[0]

      const foodIndex = selectedOption.dataset.index
      const sign = response.data[foodIndex]


      addFood(response.data, sign)
      return response

  }
  catch (error) {
    console.error(error)
  }

}
// getAll()
// removeFood()

const addFood = (food, sign) => {
  const explination = zodiacExplain[sign]
  const foodText = document.createElement('p')
  console.log(foodExplain.foodIndex)
  foodText.innerText = explination
  document.querySelector('.foodData').append(foodText)

    const foodTitle = document.createElement("h3")
    foodTitle.innerText = food.title
    console.log(food.title)
    document.querySelector(".foodData").append(foodTitle)

    const foodImage = document.createElement("img")
    foodImage.src = food.image
    document.querySelector(".foodData").append(foodImage)

    const foodSourceUrl = document.createElement("h4")
    foodSourceUrl.innerText = food.sourceUrl
    document.querySelector(".foodData").append(foodSourceUrl)
  // })

}

// remove previous search
function removeFood() {
  const removeAddFood = document.querySelector(".foodData")
  while (removeAddFood.lastChild) {
    removeAddFood.removeChild(removeAddFood.lastChild)
  }
    
}

// removeFood()











