//  Add HTML and connect all files (check-mate)
//  Create Dynamic drop down menu for Astrological signs (check-mate)
//  Write event handler 
//  Button that removes astrological/food  data
//  Append astrological blurb to the DOM
//  Connect Astrological data to API recipes/food 


const DOMAIN = 'https://spoonacular.com/recipes/';
const API_KEY = "1b80ef314c9144b099e149272c37d2a1"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;


const foodExplain = [
  {
    id: "642372", description: "So you're and Aries... Bold, ambitious, and most importantly, FIREY! Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in their approach, they often get frustrated by exhaustive details and unnecessary nuances. That is why a simple yet flavorful and spicy taco, is the best fit for your sign."
  },
  {
    id: "631750", description: "So you're a Taurus... Taureans enjoy relaxing in serene environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Most Taurus are ambitious, focused, and resilient. That being said, this sign is quiet easily enchanted by any physical manifestation of comfort and luxury. It only makes sense that they would enjoy an expensive and lean cut of steak."
  },
  {
    id: "649030", description:"So you're a Gemini... Playful and intellectually curious, Gemini is constantly juggling a variety of passions, hobbies, careers, and friend groups. They are the social butterflies of the zodiac and these quick-witted twins can talk to anyone about anything. A Korean beef bowl made up of different, and refreshing flavors and textures, is a perfect choice for this sign."
  },
  {
    id: "640279", description:"So you're a Cancer"
  },
  {
    id: "659677", description: "this is leo"
  },
]

const searchBtn = document.querySelector("#search")
searchBtn.addEventListener("click", getAll)


async function getAll() {
  removeFood()
  const foodBtn = document.querySelector('.foodBtn').value
  const url = `https://api.spoonacular.com/recipes/${foodBtn}/information?includeNutrition=false&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      console.log(response.data)

      addFood(response.data)

  }
  catch (error) {
    console.error(error)
  }

}

const addFood = (food, sign) => {
  const foodContainer = document.querySelector('.foodData')
  const foodBtn = document.querySelector('.foodBtn').value

  const signDes = foodExplain.find((sign) => {
    console.log(sign.id)
    console.log(foodBtn)
    return sign.id === foodBtn
  }) 

  const foodInfo = `
    <p>${signDes.description}</p>   
    <h3>${food.title}</h3>
    <img src="${food.image}"/>
    <a href="${food.sourceUrl}"></a>
  `
  foodContainer.insertAdjacentHTML("beforeend",foodInfo)
  

}

// remove previous search
function removeFood() {
  const removeAddFood = document.querySelector(".foodData")
  while (removeAddFood.lastChild) {
    removeAddFood.removeChild(removeAddFood.lastChild)
  }
    
}













