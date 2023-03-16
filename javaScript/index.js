let boton = document.getElementById("boton");

let nav = document.querySelector("nav");

function mostrarMenu(){
    nav.classList.toggle("mostrarMenu")
    
}
boton.addEventListener("click", mostrarMenu)



/* repoducir audio */
let botonMusica = document.getElementById("botonMusica")
let audio = document.getElementById("audioPrincipal");
audio.play();

function playAudio(){
    
    if (audio.paused) {
        audio.play();
        botonMusica.innerHTML = "<span class='material-symbols-outlined'>volume_up</span>";
    } else {
        audio.pause();
        botonMusica.innerHTML = "<span class='material-symbols-outlined'>volume_off</span>";
    }
}

botonMusica.addEventListener("click", playAudio)






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