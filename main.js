var menu = ["Chicken Tandoori Pizza" , "Deluxe Veggie Pizza" , "Paneer Tikka Pizza" , "Veg Extravaganza Pizza" , "Veg Margherita Pizza" , "Veg Supreme Pizza"]

function getmenu(){
var htmldata;
htmldata ="<ol class='menulist'>";
menu.sort();
for(i = 0; i<menu.length; i++){
    console.log(menu[i]);
    htmldata = htmldata + menu[i] + "<br>";
}
htmldata=htmldata+"</ol>";
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
var item = document.getElementById("add_item").value;
menu.push(item)
menu.sort();
htmldata = "<section class='cards'>"
for(var i = 0; i<menu.length; i++){
    htmldata=htmldata + '<div class="card">' + '<img src = "images/pizzaimg.png" width="200" height="200">' + menu[i];
}
htmldata=htmldata + "</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;
}