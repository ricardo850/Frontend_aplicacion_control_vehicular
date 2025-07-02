

const nombreApellidoIngreso = document.querySelector(".nombreApellidoIngreso");
const cedula = document.querySelector(".cedula");

const empresaGestionaPuesto = document.querySelector(".empresaGestionaPuesto");
const nombrePuesto = document.querySelector(".nombrePuesto");

const tipoVehiculo = document.querySelector(".tipoVehiculo");
const numeroPlaca = document.querySelector(".numeroPlaca");
const observacion = document.querySelector(".observacion");

const btnEnviarVehiculo = document.querySelector(".btnEnviarVehiculo");

fetch("http://localhost:8080/traerEmpresa")
    .then(response => response.json())
    .then(data => {
        if (data.mensaje === "true") {
            data.datos.forEach(element => {
                let option = document.createElement("option");
                option.textContent = element.empresa;
                option.value = element.empresa; 
                empresaGestionaPuesto.appendChild(option);
            });
        }
    })
    .catch(error => console.error('Error al enviar los datos:', error));


function traerPuestos() {
    if (!empresaGestionaPuesto.value || empresaGestionaPuesto.value.trim() === "") {
        nombrePuesto.innerHTML = "<option>Seleccione una empresa primero</option>";
        return;
    }

    nombrePuesto.innerHTML = ""; // limpia opciones anteriores

    fetch("http://localhost:8080/TraerPuestos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ empresaGestionaPuesto: empresaGestionaPuesto.value })
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje === "true") {
            nombrePuesto.innerHTML = ""; // Limpia antes de agregar nuevas opciones
            data.datos.forEach(element => {
                let option = document.createElement("option");
                option.textContent = element.puesto || "Nombre desconocido";
                nombrePuesto.appendChild(option);
            });
        } else {
            nombrePuesto.innerHTML = "<option>No hay puestos disponibles</option>";
        }
    })
    .catch(error => console.error('Error al enviar los datos:', error));
}

empresaGestionaPuesto.addEventListener("change", traerPuestos);


function EnviarDatosVehiculos(e){
    e.preventDefault()
    let datos = {
        nombreApellidoIngreso:nombreApellidoIngreso.value,
        cedula:cedula.value,
        empresaGestionaPuesto:empresaGestionaPuesto.value,
        nombrePuesto:nombrePuesto.value,
        tipoVehiculo:tipoVehiculo.value,
        numeroPlaca:numeroPlaca.value,
        observacion:observacion.value

    }
    fetch("http://localhost:8080/EnviarVehiculos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje === "ok") {
           alert("datos Vehiculos Enviados Correctamente")
        } 
    })
    .catch(error => console.error('Error al enviar los datos:', error));

}

btnEnviarVehiculo.addEventListener("click",EnviarDatosVehiculos)