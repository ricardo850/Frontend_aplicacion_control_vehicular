let nombreApellido = document.querySelector(".nombreApellido");
let numeroIdentificacion = document.querySelector(".cedula");
let nombrePuesto = document.querySelector(".nombrePuesto");
let tipoSangre = document.querySelector(".tipoSangre");

let nombreContactoEmergencia = document.querySelector(".nombreContactoEmergencia");
let telefonoContactoEmergencia = document.querySelector(".telefonoContactoEmergencia");
let eps = document.querySelector(".eps");
let arl = document.querySelector(".arl");
let funcionarioGestionaVisita = document.querySelector(".funcionarioGestionaVisita");
let traeComputo = document.querySelector(".traeComputo");
let marcaComputador = document.querySelector(".marcaComputador");
let serialComputador = document.querySelector(".serialComputador");

let botonEnviar = document.querySelector(".EnviarDatos");
let empresaGestionaPuesto = document.querySelector(".empresaGestionaPuesto");

let NombreMarcaEquipo = document.querySelector(".nombreMarcaEquipo");
let NombreSerialEquipo = document.querySelector(".nombreSerialEquipo");
let correofuncionarioGestionaVisita = document.querySelector(".CorreofuncionarioGestionaVisita")


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


function TraeEquipo() {
    if (traeComputo.value === "No") {
        marcaComputador.style.display = "none";
        serialComputador.style.display = "none";
        NombreMarcaEquipo.style.display = "none";
        NombreSerialEquipo.style.display = "none";
    } else if (traeComputo.value === "Si") {
        marcaComputador.style.display = "block";
        serialComputador.style.display = "block";
        NombreMarcaEquipo.style.display = "block";
        NombreSerialEquipo.style.display = "block";
    } else {
        marcaComputador.style.display = "none";
        serialComputador.style.display = "none";
        NombreMarcaEquipo.style.display = "none";
        NombreSerialEquipo.style.display = "none";
    }
}

TraeEquipo();
traeComputo.addEventListener("change", TraeEquipo);

// Función para enviar datos al servidor
function EnviarDatos(event) {
    event.preventDefault();

    if (
        nombreApellido.value === "" || numeroIdentificacion.value === "" ||
        empresaGestionaPuesto.value === "" || nombrePuesto.value === "" || tipoSangre.value === "Seleccione" ||
        nombreContactoEmergencia.value === "" || telefonoContactoEmergencia.value === "" || eps.value === "" ||
        arl.value === "" || funcionarioGestionaVisita.value === "" || traeComputo.value === "Seleccione"
    ) {
        alert("Le faltan algunos datos obligatorios");
        return;
    }

    if (traeComputo.value === "Si" && (marcaComputador.value === "" || serialComputador.value === "")) {
        alert("Debe ingresar marca y serial del equipo");
        return;
    }


        
  function obtenerFechaHoraActual() {
  const ahora = new Date();
  const dia = ahora.getDate().toString().padStart(2, '0');
  const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
  const anio = ahora.getFullYear();

  let horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');

  const ampm = horas >= 12 ? 'PM' : 'AM';
  horas = horas % 12;
  if (horas === 0) {
    horas = 12;
  }
  horas = horas.toString().padStart(2, '0');

  return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos} ${ampm}`;
}
    let datos = {
        nombreApellidos: nombreApellido.value,
        cedula: numeroIdentificacion.value,
        empresaGestionaPuesto: empresaGestionaPuesto.value,
        nombrePuesto: nombrePuesto.value,
        tipoSangre: tipoSangre.value,
        nombreApellidosEmergencia: nombreContactoEmergencia.value,
        telefonoEmergencia: telefonoContactoEmergencia.value,
        eps: eps.value,
        arl: arl.value,
        funcionarioGestionaVisita: funcionarioGestionaVisita.value,
        correofuncionarioGestionaVisita:correofuncionarioGestionaVisita.value,
        fechaIngresoPuesto:obtenerFechaHoraActual(),
        traeComputoExterno:traeComputo.value,
        marcaEquipo: traeComputo.value === "Si" ? marcaComputador.value : "N/A",
        serialEquipo: traeComputo.value === "Si" ? serialComputador.value : "N/A"
    };

    fetch("http://localhost:8080/DatosVisitantes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
        if (data.mensaje === "enviado") {
            window.location.href = "/procesoValidos/RegistroExitoso.html";
        }
    })
    .catch(error => console.error('Error al enviar los datos:', error));
    
}



botonEnviar.addEventListener("click",EnviarDatos );
