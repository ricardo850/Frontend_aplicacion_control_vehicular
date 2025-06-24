let params = new URLSearchParams(window.location.search);
let nombre = params.get("nombreEmpresaCliente");
console.log(nombre)


let crearPuestos = document.querySelector("#crearPuestos")

crearPuestos.addEventListener("click",() => {
window.location.href = `crearPuesto.html?nombreEmpresaCliente=${encodeURIComponent(nombre)}`;
})