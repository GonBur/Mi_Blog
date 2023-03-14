let boton = document.getElementById("boton");

let nav = document.querySelector("nav");

function mostrarMenu(){
    nav.classList.toggle("mostrarMenu")
    
}

boton.addEventListener("click", mostrarMenu)