
let DivnombreEmpresa = document.querySelector(".nombreEmpresa")
let selectpuestos = document.querySelector(".puestos")



let nombreEmpresa = JSON.parse(localStorage.getItem("nombreEmpresa"));

let contrasena = document.querySelector(".contrasena")
console.log(nombreEmpresa)

DivnombreEmpresa.textContent = nombreEmpresa

let EnviarPuesto = document.querySelector(".EnviarPuesto")
function traerPuestos() {
    if (!DivnombreEmpresa.textContent || DivnombreEmpresa.textContent.trim() === "") {
        selectpuestos.innerHTML = "<option>Seleccione una empresa primero</option>";
        return;
    }

    selectpuestos.innerHTML = ""; // limpia opciones anteriores

    fetch("http://localhost:8080/TraerPuestos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ empresaGestionaPuesto: DivnombreEmpresa.textContent })
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje === "true") {
            selectpuestos.innerHTML = ""; // Limpia antes de agregar nuevas opciones
            data.datos.forEach(element => {
                let option = document.createElement("option");
                option.textContent = element.puesto || "Nombre desconocido";
                selectpuestos.appendChild(option);
            });
        } else {
            selectpuestos.innerHTML = "<option>No hay puestos disponibles</option>";
        }
    })
    .catch(error => console.error('Error al enviar los datos:', error));
}

document.addEventListener("DOMContentLoaded", function() {
 
  console.log("La página ya se cargó y el DOM está listo");
  
  traerPuestos()
});




function traerDatosPuesto(){
    let datos = {
        nombreBaseDatosDatos:DivnombreEmpresa.innerHTML,
        nombrepuesto:selectpuestos.value,
        contrasena:contrasena.value
    }
fetch("http://localhost:8080/TraerPuestosInformacion", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje === "ok") {
             localStorage.setItem("puesto" , JSON.stringify(selectpuestos.value))
            window.location.href = "/mostraInformacionPuestosEmpresas/mostrarInformacionPuestosEmpresas.html"
           
        } else {
            alert("el puesto no se encuentra")
        }
    })
    .catch(error => console.error('Error al enviar los datos:', error));

}
  

EnviarPuesto.addEventListener("click",traerDatosPuesto)