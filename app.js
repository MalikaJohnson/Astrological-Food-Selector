 
//                         ================= API Address and keys ==================

const DOMAIN = 'https://spoonacular.com/recipes/';
const API_KEY = "1b80ef314c9144b099e149272c37d2a1"
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

//           ===================== Description of each food compared to the sign ======================

const foodExplain = [
  {
    id: "642372", description: "So you're and Aries... Bold, ambitious, and most importantly, FIREY! Aries is a passionate, motivated, and confident leader who builds community with their cheerful disposition and relentless determination. Uncomplicated and direct in their approach, they often get frustrated by exhaustive details and unnecessary nuances. That is why a simple yet flavorful and spicy taco, is the best fit for your sign."
  },
  {
    id: "631750", description: "So you're a Taurus... Taureans enjoy relaxing in serene environments, surrounded by soft sounds, soothing aromas, and succulent flavors. Most Taurus are ambitious, focused, and resilient. That being said, this sign is quiet easily enchanted by any physical manifestation of comfort and luxury. It only makes sense that they would enjoy a decadent and lean cut of steak."
  },
  {
    id: "649030", description:"So you're a Gemini... Playful and intellectually curious, Gemini is constantly juggling a variety of passions, hobbies, careers, and friend groups. They are the social butterflies of the zodiac and these quick-witted twins can talk to anyone about anything. A Korean beef bowl made up of different, and refreshing flavors and textures, is a perfect choice for this sign."
  },
  {
    id: "640279", description:"So you're a Cancer... Cancers tend to be domestically oriented. They love to create cozy, safe spaces that serve as their personal sanctuaries, then spend lots of time in them. They usually make excellent hosts and enjoy entertaining with comfort food and free-flowing libations. The delicate yet filling crab cake seems like a no brainer for this sign. "
  },
  {
    id: "659677", description:"So you're a Leo... These spirited fire signs are the kings and queens of the celestial jungle. Leos are renowned for their stability, loyalty, and consistency, and they enjoy cultivating friendships and romances that are artistically and creatively inspired. These astrological divas never get tired of lavish dinners, exclusive parties, or decadent designer wear, so it only makes sense that they would enjoy a lavish and beautifully plated scallop meal."
  },
  {
    id: "644965", description:"So you're a Virgo... Virgos are logical, practical, and systematic in their approach to life. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice. Virgo rules the digestive system, which makes them especially attuned to the ingredients that make up a whole — in food and in everything else. They're hyper-aware of every detail. A crostini with well thought out layers of flavor, is the best fit for your sign."
  },
  {
    id: "631814", description:"So you're a Libra... Libra is obsessed with symmetry and strives to create equilibrium in all areas of life. Libras adore high art, intellectualism, and connoisseurship. Suave libras need to surround themselves with stunning objects and create environments that reflect their exquisite tastes. Thats why a high value burger so appropriately named the $50,000 burger seems like a well suited choice for this sign."
  },
  {
    id: "632021", description:"So you're a Scorpio... Life is a game of chess for these calculating water signs, who are constantly plotting several steps ahead in order to orchestrate an eventual checkmate. Scorpion energy is ambitious, enticing, and their enigmatic nature is what makes them so seductive and beguiling. That is why the surprisingly rich flavor of Ahi Tuna that you will not find in any other fish, is the perfect choice for this sign."
  },
  {
    id: "663144", description:"So you're a Sagittarius... Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures. Fueled by wanderlust, these archers can be found traversing all corners of the world on thrill-seeking expeditions. A dish that itself is worldly in nature, is the perfect pair for such a worldly and possibly well traveled sign."
  },
  {
    id: "636360", description:"So you're a Capricorn... Capricorns tap into their inner fortitude to overcome whatever stands between them and their long-term goals and they don’t let anything distract them from getting ahead. Capricorns are excellent at taking action and launching initiatives, and their can-do attitude leads to success in pretty much any industry. A Carbonara that is rich yet challenging to make due to fact that its sauce has to be a smooth and creamy consistency, made up of egg yolk, seems like a match made in heaven for this sign."
  },
  {
    id: "716381", description:"So you're a Aquarius... Aquarians are big thinkers, and sometimes can forget their immediate surroundings. These revolutionary thinkers fervently support “power to the people,” aspiring to change the world through radical social progress. Every Aquarian is a rebel at heart, this sign despises authority and anything that represents conventionality. Free-spirited and eccentric, a dish comprised of snails is extremely on brand with this noncomformist sign."
  },
  {
    id: "1095994", description:"So you're a Pisces... Pisces are the most empathetic and compassionate creatures of the astrological wheel. With such immense sensitivity, Pisces can easily become swallowed by emotions and must remember to stay grounded. Pisces love exploring their boundless imaginations, and due to their heads being in the clouds, can earn a reputation for being flaky or delusional. This rose-colored glasses wearing sign would absolutley get lost in a steamy and hearty bowl of pho."
  },
]

//                   =========================== Event Listener ===========================

const searchBtn = document.querySelector("form")
searchBtn.addEventListener("submit", getAll)

//          1========================  APL Call Request & Preventing the page refresh ===========================

async function getAll(e) {
  e.preventDefault();
  removeFood();
  const foodBtn = document.querySelector('.foodBtn').value
  const url = `https://api.spoonacular.com/recipes/${foodBtn}/information?includeNutrition=false&apiKey=${API_KEY}`
    try {
      const response = await axios.get(url)
      addFood(response.data)

  }
  catch (error) {
    console.error(error)
  }

}

//             ====================== Calling the food data per zodiac sign ======================

const addFood = (food, sign) => {
  const foodContainer = document.querySelector('.foodData')
  const foodBtn = document.querySelector('.foodBtn').value

  const signDes = foodExplain.find((sign) => {
    return sign.id === foodBtn
  }) 

//            ======================= Appending the Data to the DOM =========================

  const foodInfo = `
    <div class="card">
    <p class="description">${signDes.description}</p>   
    <h3 class="food-title">${food.title}</h3>
    <img class="food-img" src="${food.image}"/>
    <a class="link" target="_blank" href="${food.sourceUrl}">Click me for Recipe</a>
    </div>
  `
  foodContainer.insertAdjacentHTML("beforeend",foodInfo)
}

//        ========================== Removing the appended Data from the DOM ======================

function removeFood() {
  const removeAddFood = document.querySelector(".foodData")
  while (removeAddFood.lastChild) {
    removeAddFood.removeChild(removeAddFood.lastChild)
  }
    
}













