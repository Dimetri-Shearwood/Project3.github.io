let url =
  "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php/";

fetch(url)
  .then((response) => response.json())
  .then((data) => createDrinks(data.drinks));

let drinksList = document.querySelectorAll(".drink");
let imgTarget = document.querySelector("img");
let modal = document.querySelector(".modal");

function createDrinks(drinks) {
  for (let i = 0; i < drinks.length - 1; i++) {
    drinksList[i].innerHTML = `<img src ="${drinks[i].strDrinkThumb}">`;

    //  <h4>${drinks[i].strInstructions}</h4>`;

    //  console.log(drinksList[i])

    const currentDrink = drinksList[i];
    currentDrink.addEventListener("click", function (e) {
      e.preventDefault();
      //   console.log(drinks[i].strDrinkThumb);
      (imgTarget.src = drinks[i].strDrinkThumb),
        (imgTarget.style.display = "block");
      document.querySelector(".instructions").innerHTML = `${drinks[i].strInstructions}`;
      document.querySelector(".name").innerHTML = `${drinks[i].strDrink}`;
      modal.style.display = "block";

      // document.querySelector(".ingredients").innerHTML = `${drinks[i].strIngredient[i]}`
    });
  }
  console.log(drinks);
}
let whole = document.getElementById(".whole");
let container1 = document.getElementById(".container");
modal.addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "none";
  imgTarget.src = "";
});
