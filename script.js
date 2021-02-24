let whole = document.querySelector(".whole")
let container1 = document.querySelector(".container1")
let container2 = document.querySelector(".container2")
let container3 = document.querySelector(".container3")
let top1 = document.querySelector(".top1")
let top2 = document.querySelector(".top2")
let top3 = document.querySelector(".top3")
let mid1 = document.querySelector(".mid1")
let mid2 = document.querySelector(".mid2")
let mid3 = document.querySelector(".mid3")
let low1 = document.querySelector(".low1")
let low2 = document.querySelector(".low2")
let low3 = document.querySelector(".low3")


//appendchild
//do more html in here



let url = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php/"



fetch(url)
.then(response=> response.json())
.then(data=> console.log(data));

