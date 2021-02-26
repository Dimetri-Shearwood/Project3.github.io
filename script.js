let url =
  "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php/";

fetch(url)
  .then((response) => response.json())
  .then((data) => createDrinks(data.drinks));

let drinksList = document.querySelectorAll(".drink");
let imgTarget = document.querySelector("img");

function createDrinks(drinks) {
  for (let i = 0; i < drinks.length - 1; i++) {
    drinksList[i].innerHTML = `<img src ="${drinks[i].strDrinkThumb}">`;

        
  //  <h4>${drinks[i].strInstructions}</h4>`;

    //  console.log(drinksList[i])

    const currentDrink = drinksList[i];
    currentDrink.addEventListener("click", function (e) {
      e.preventDefault();
    //   console.log(drinks[i].strDrinkThumb);
    imgTarget.src = drinks[i].strDrinkThumb, 
    imgTarget.style.display = "block";
    document.querySelector(".instructions").innerHTML = `${drinks[i].strInstructions}`

    });
  }
  console.log(drinks);
}
let whole = document.getElementById(".whole");
let container1 = document.getElementById(".container1");
    imgTarget.addEventListener("click", function (e) {
        e.preventDefault();
    imgTarget.style.display = "none";
    imgTarget.src = "" 
    
    })

    //how to style a modal

