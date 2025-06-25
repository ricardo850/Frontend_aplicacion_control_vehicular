let params = new URLSearchParams(window.location.search);
let nombre = params.get("nombreEmpresaCliente");
console.log(nombre)


let verPuestos = document.querySelector("#verPuestos")
let crearPuestos = document.querySelector("#crearPuestos")

crearPuestos.addEventListener("click",() => {
window.location.href = `crearPuesto.html?nombreEmpresaCliente=${encodeURIComponent(nombre)}`;
})


verPuestos.addEventListener("click",() => {
window.location.href = `verPuesto.html?nombreEmpresaCliente=${encodeURIComponent(nombre)}`;
})