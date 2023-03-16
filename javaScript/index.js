let boton = document.getElementById("boton");

let nav = document.querySelector("nav");

function mostrarMenu(){
    nav.classList.toggle("mostrarMenu")
    
}

boton.addEventListener("click", mostrarMenu)



/* repoducir audio */
let botonMusica = document.getElementById("botonMusica")

function playAudio(){
    document.getElementById("audioPrincipal").play();
}

botonMusica.addEventListener("click", playAudio)


/* pausar audio */
let botonPause = document.getElementById("botonPause")

function pause(){
    document.getElementById("audioPrincipal").pause();
}
botonPause.addEventListener("click", pause)



/* let audio = document.getElementsByTagName("audio")[0];
let botonMusica = document.getElementById("botonMusica");

function repoducirMusica() {
  if (audio.paused) {
    audio.play();
    botonMusica.innerHTML = "<span class='material-symbols-outlined'>volume_up</span>";
  } else {
    audio.pause();
    botonMusica.innerHTML = "<span class='material-symbols-outlined'>volume_off</span>";
  }
}

botonMusica.addEventListener("click", repoducirMusica) */