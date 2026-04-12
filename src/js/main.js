console.log("JS cargado");
const boton = document.getElementById("menu-equipo");
const menu = document.getElementById("dropdown-menu");

boton.addEventListener("click", function(e){
    e.preventDefault();
    menu.classList.toggle("active");
});