const foodStuff = document.getElementById("foodstuffs")
const fruits = document.getElementById("fruits")
const provision = document.getElementById("provisions")
const snacks = document.getElementById("snacks")
const market = document.getElementById("market")
const inputSearch = document.getElementById("search-place")
const searchButton = document.getElementById("search")
let cartItems = document.getElementById("items")
const searchBar = document.getElementById("search-bar")
const header = document.getElementById("header")
let cartList = document.getElementById("cart-list")
const cart = []
let clickNo = 1






const foodArray = [
    {
        name: 'beans',
        show: 'Foodstuffs/beans.jpeg'
    },
    {
        name: 'eggs',
        show: 'Foodstuffs/eggs.jpeg'
    },
    {
        name: 'egusi',
        show: 'Foodstuffs/egusi.jpeg'
    },
    {
        name: 'fufu',
        show: 'Foodstuffs/fufu.jpeg'
    },
    {
        name: 'garri',
        show: 'Foodstuffs/garri.jpeg'
    },
    {
        name: 'tomatoes',
        show: 'Foodstuffs/images (24).jpeg'
    },
    {
        name: 'maggi',
        show: 'Foodstuffs/maggi.jpeg'
    },
    {
        name: 'onions',
        show: 'Foodstuffs/onions.jpeg'
    },
    {
        name: 'pepper',
        show: 'Foodstuffs/pepper.jpeg'
    },
    {
        name: 'plantains',
        show: 'Foodstuffs/plantains.jpeg'
    },
    {
        name: 'potatoes',
        show: 'Foodstuffs/potatoes.jpeg'
    },
    {
        name: 'redoil',
        show: 'Foodstuffs/redoil.jpeg'
    },
    {
        name: 'rice',
        show: 'Foodstuffs/rice.jpeg'
    },
    {
        name: 'salt',
        show: 'Foodstuffs/salt.jpeg'
    },
    {
        name: 'spaghetti',
        show: 'Foodstuffs/spaghetti.jpeg'
    },
    {
        name: 'tintomatoes',
        show: 'Foodstuffs/tomatoes.jpeg'
    },
    {
        name: 'vegetables',
        show: 'Foodstuffs/vegetables.jpeg'
    },
    {
        name: 'yam',
        show: 'Foodstuffs/yam.jpeg'
    },
    {
        name: 'groundnutoil',
        show: 'Foodstuffs/groundnutoil.jfif'
    }
]

const fruitArray = [
    {
        name: 'apple',
        show: 'Fruits/apple.jpeg'
    },
    {
        name: 'banana',
        show: 'Fruits/banana.jpeg'
    },
    {
        name: 'cashew',
        show: 'Fruits/cashew.jpeg'
    },
    {
        name: 'mango',
        show: 'Fruits/mango.jpeg'
    },
    {
        name: 'orange',
        show: 'Fruits/orange.jpeg'
    },
    {
        name: 'pawpaw',
        show: 'Fruits/pawpaw.jpeg'
    },
    {
        name: 'pineapple',
        show: 'Fruits/pineapple.jpeg'
    },
    {
        name: 'watermelon',
        show: 'Fruits/watermelon.jpeg'
    }
]

const provisionArray = [
    {
        name: 'cabin',
        show: 'Provisions/cabin.jpeg'
    },
    {
        name: 'cornflakes',
        show: 'Provisions/cornflakes.jpeg'
    },
    {
        name: 'custard',
        show: 'Provisions/custard.jpeg'
    },
    {
        name: 'goldenmorn',
        show: 'Provisions/goldenmorn.jpeg'
    },
    {
        name: 'indomie',
        show: 'Provisions/indomie.jpeg'
    },
    {
        name: 'milk',
        show: 'Provisions/milk.jpeg'
    },
    {
        name: 'milo',
        show: 'Provisions/milo.jfif'
    },
    {
        name: 'oatmeal',
        show: 'Provisions/oatmeal.jpeg'
    },
    {
        name: 'sugar',
        show: 'Provisions/sugar.jpeg'
    }
]

const snackArray = [
    {
        name: 'cake',
        show: 'Snacks/cake.jpeg'
    },
    {
        name: 'coke',
        show: 'Snacks/coke.jpeg'
    },
    {
        name: 'doughnuts',
        show: 'Snacks/doughnuts.jpeg'
    },
    {
        name: 'exotic',
        show: 'Snacks/exotic.jpeg'
    },
    {
        name: 'fanta',
        show: 'Snacks/fanta.jpeg'
    },
    {
        name: 'fries',
        show: 'Snacks/fries.jpeg'
    },
    {
        name: 'hollandia',
        show: 'Snacks/hollandia.jpeg'
    },
    {
        name: 'mesha',
        show: 'Snacks/mesha.jpeg'
    },
    {
        name: 'parfait',
        show: 'Snacks/parfait.jpeg'
    },
    {
        name: 'pizza',
        show: 'Snacks/pizza.jpeg'
    },
    {
        name: 'popcorn',
        show: 'Snacks/popcorn.jpeg'
    },
    {
        name: 'rc',
        show: 'Snacks/rc.jpeg'
    },
    {
        name: 'shawarma',
        show: 'Snacks/shawarma.jpeg'
    },
    {
        name: 'smoothie',
        show: 'Snacks/smoothie.jpeg'
    },
]


const marketArray = foodArray.concat(fruitArray, provisionArray, snackArray)
setInterval(updateCart, 1)

searchBar.style.display = "none"

document.getElementById("shop").addEventListener("click", ()=>{
    market.innerHTML = ""
    for (let i = 0; i < marketArray.length; i++) {
        let container = document.createElement("div")
        let item = `<img src="${marketArray[i].show}" alt="${marketArray[i].name}"></img>
                    <p>${marketArray[i].name}</p>`
        container.innerHTML = item
        market.appendChild(container)
        container.addEventListener("click", ()=>{
            localStorage.setItem(marketArray[i].name, marketArray[i].name)
        })
    }
})
function updateCart(){
    cartList.innerHTML = ""
    for (let i = 0; i < localStorage.length; i++) {
        let list = document.createElement("li")
        list.innerHTML = clickNo +" "+ localStorage.key(i)
        cartList.appendChild(list)
        list.addEventListener("click",()=>{
            if (confirm("Do you want to remove")){
                localStorage.removeItem(localStorage.key(i))
                cartList.removeChild(list)
            }
        })
    }
    cartItems.innerHTML = localStorage.length
}



foodStuff.addEventListener("click", ()=>{
    market.innerHTML = ""
    for (let i = 0; i < foodArray.length; i++) {
        let container = document.createElement("div")
        let item = `<img src="${foodArray[i].show}" alt="${foodArray[i].name}"></img>
                    <p>${foodArray[i].name}</p>`
        container.innerHTML = item
        market.appendChild(container)
        container.addEventListener("click", ()=>{
            localStorage.setItem(foodArray[i].name, foodArray[i].name)
        })
    }
})
fruits.addEventListener("click", ()=>{
    market.innerHTML = ""
    for (let i = 0; i < fruitArray.length; i++) {
        let container = document.createElement("div")
        let item = `<img src="${fruitArray[i].show}" alt="${fruitArray[i].name}"></img>
                    <p>${fruitArray[i].name}</p>`
        container.innerHTML = item
        market.appendChild(container)
        container.addEventListener("click", ()=>{
            localStorage.setItem(fruitArray[i].name, fruitArray[i].name)
        })
    }
})
provision.addEventListener("click", ()=>{
    market.innerHTML = ""
    for (let i = 0; i < provisionArray.length; i++) {
        let container = document.createElement("div")
        let item = `<img src="${provisionArray[i].show}" alt="${provisionArray[i].name}"></img>
                    <p>${provisionArray[i].name}</p>`
        container.innerHTML = item
        market.appendChild(container)
        container.addEventListener("click", ()=>{
            localStorage.setItem(provisionArray[i].name, provisionArray[i].name)
        })
    }
})
snacks.addEventListener("click", ()=>{
    market.innerHTML = ""
    for (let i = 0; i < snackArray.length; i++) {
        let container = document.createElement("div")
        let item = `<img src="${snackArray[i].show}" alt="${snackArray[i].name}"></img>
                    <p>${snackArray[i].name}</p>`
        container.innerHTML = item
        market.appendChild(container)
        container.addEventListener("click", ()=>{
            localStorage.setItem(snackArray[i].name, snackArray[i].name)
        })
    }
})



inputSearch.addEventListener("mouseenter",()=>{
    searchBar.style.display = "block"
})
header.addEventListener("mouseleave",()=>{
    searchBar.style.display = "none"
})

searchButton.addEventListener("click",()=>{
    let filter = inputSearch.value.toLowerCase()
    setInterval(()=>{
        
    },1)
    
    for (let i = 0; i < foodArray.length; i++) {
        if (foodArray[i].name === filter){
           searchBar.innerHTML = "Find in FoodStuffs"
        }
    }
    for (let i = 0; i < snackArray.length; i++) {
        if (snackArray[i].name === filter){
            searchBar.innerHTML = "Find in Snacks"
        }
    }
    for (let i = 0; i < provisionArray.length; i++) {
        if (provisionArray[i].name === filter){
            searchBar.innerHTML = "Find in Provisions"
        }
    }
    for (let i = 0; i < fruitArray.length; i++) {
        if (fruitArray[i].name === filter){
            searchBar.innerHTML = "Find in Fruits"
        }
    }
})

document.getElementById("clear-cart").addEventListener("click", ()=>{
    localStorage.clear()
})


function myFunction() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block"
    }
  }
