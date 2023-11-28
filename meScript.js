/*var title = document.getElementById('myTitle');
tytle.style.color = 'grey';*/

var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');
var menuTrigger = document.getElementById('headerTrigger');
var headerMenu = document.getElementById('headerMenu');

menuTrigger.onclick = function() {
    $("#header menu").slideToggle(500);
}
$("#headerMenu a").click function(){
    if (headerMenu.style.display === "block"){
        $("#headerMenu").slideUp(500);
    }
}

function opacity1() {
    content.style.opacity = "1";
}

button.onclick = function(){
    title.style.color = 'grey';
}

