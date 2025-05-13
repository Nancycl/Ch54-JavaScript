function cambiarNombre() {
   const nombre = prompt("¿Cuál es tu nombre?");
   document.getElementById("saludo").textContent= `¡Hola ${nombre}!`;
}