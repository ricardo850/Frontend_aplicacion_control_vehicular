
let nombreApellido = document.querySelector(".NombreApellido");
let numeroIdentificacion = document.querySelector(".NumeroIdentificacion");
let empresaGestionaPermiso = document.querySelector(".EmpresaGestionaPermiso");
let puestoIngreso = document.querySelector(".PuestoIngreso");
let tipoSangre = document.querySelector(".TipoSangre");

let nombreContactoEmergencia = document.querySelector(".NombreContactoEmergencia");
let telefonoContactoEmergencia = document.querySelector(".TelefonoContactoEmergencia");
let eps = document.querySelector(".Eps");
let arl = document.querySelector(".Arl");
let funcionarioGestion = document.querySelector(".FuncionarioGestion");
let traeComputo = document.querySelector(".traeComputo");
let marcaComputador = document.querySelector(".MarcaComputador");
let serialComputador = document.querySelector(".SerialComputador");

let botonEnviar = document.querySelector(".EnviarDatos");


function EnviarDatos() {
    let datos = {
        NombreApellidos: nombreApellido.value,
        cedula: numeroIdentificacion.value,
        EmpresaPermiso: empresaGestionaPermiso.value,
        NombrePuesto: puestoIngreso.value,
        TipoSangre: tipoSangre.value,
        NombreApellidosEmergencia: nombreContactoEmergencia.value,
        TelefonoEmergencia: telefonoContactoEmergencia.value,
        Eps: eps.value,
        Arl: arl.value,
        FuncionarioGestionaVisita: funcionarioGestion.value,
        TraeComputoExterno: traeComputo.value,
        MarcaEquipo: marcaComputador.value,
        Serialequipo: serialComputador.value
    };

    fetch("http://localhost:8080/DatosVisitantes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    })
    .then(response => {
        if (!response.ok) throw new Error("Error al enviar los datos");
        return response.json();
    })
    .then(data => {
        console.log("Datos enviados correctamente:", data);
        alert("Datos enviados con éxito");
    })
    .catch(error => {
        console.error("Ocurrió un error:", error);
        alert("Error al enviar los datos.");
    });
}

// Agrega el evento al botón
botonEnviar.addEventListener("click", EnviarDatos);
