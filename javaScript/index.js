let boton = document.getElementById("boton");

let nav = document.querySelector("nav");

function mostrarMenu(){
    nav.classList.toggle("mostrarMenu")
    
}
boton.addEventListener("click", mostrarMenu)



/* repoducir audio */
let botonMusica = document.getElementById("botonMusica")
let audio = document.getElementById("audioPrincipal");

function playAudio(){
    
    if (audio.paused) {
        audio.play();
        botonMusica.innerHTML = "<span class='material-symbols-outlined' style='font-size: 4rem;';>volume_up</span>";
    } else {
        audio.pause();
        botonMusica.innerHTML = "<span class='material-symbols-outlined' style='font-size: 4rem;';>volume_off</span>";
    }
}

botonMusica.addEventListener("click", playAudio)
