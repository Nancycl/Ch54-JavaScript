function saludar () {
    alert("Hasta cuando, cuando mucho")
}
function cambiarFondo () {
    document.body.style.backgroundColor = "#aab7b8";
}
function bodyColor (color){
    document.body.style.backgroundColor = color ;
}
function changeToGreenColor(){
    const element = document.getElementById("green-pharagraph");
    console.log(element);
    element.style.color = "green";
}
function changeColor(element, color) {
    element.style.color = color;
}
function setUp(){
    document.getElementById("title").style.color = "blue";
    document.getElementById("title").style.fontSize = "50px";
};
setUp();