
let BTNInicioSesion = document.querySelector(".BTNInicioSesion");
let BTNRegistrarse = document.querySelector(".BTNRegistrarse")
let BTNCrearPuesto = document.querySelector(".BTNCrearPuesto")
let BTNInicioAdministrador = document.querySelector(".BTNInicioAdministrador")


BTNCrearPuesto.addEventListener("click",() => {
window.location.href = "CrearBaseDatosclientes.html";
} )

BTNRegistrarse.addEventListener("click",() => {
window.location.href = "Formulario visitantes.html";
} )

BTNInicioSesion.addEventListener("click",() => {
window.location.href = "inicioSesion.html";
} )

BTNInicioAdministrador.addEventListener("click",() => {
window.location.href = "perfilAdministrador.html";
} )