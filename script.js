//document.createElement
//appendchild
//do more html in here



let url = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php/"



fetch(url)
.then(response=> response.json())
.then(data=> console.log(data));

