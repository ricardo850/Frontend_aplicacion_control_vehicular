
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
let empresaGestionaPuesto = document.querySelector(".EmpresaGestionaPuesto")
let NombreMarcaEquipo = document.querySelector(".NombreMarcaEquipo")
let NombreSerialEquipo = document.querySelector(".NombreSerialEquipo")

function EnviarDatos() {
    let datos = {
       
    nombreApellidos: nombreApellido.value,
    cedula: numeroIdentificacion.value,
    empresaGestionaPuesto:empresaGestionaPuesto.value,
    empresaPermiso: empresaGestionaPermiso.value,
    nombrePuesto: puestoIngreso.value,
    tipoSangre: tipoSangre.value,
    nombreApellidosEmergencia: nombreContactoEmergencia.value,
    telefonoEmergencia: telefonoContactoEmergencia.value,
    eps: eps.value,
    arl: arl.value,
    funcionarioGestionaVisita: funcionarioGestion.value,
    traeComputoExterno: traeComputo.value,
    marcaEquipo: marcaComputador.value,
    serialEquipo: serialComputador.value
    };

    fetch("http://localhost:8080/DatosVisitantes" , {
        method :"POST",
        headers : {
            "Content-Type": "application/json"
        },

        body : JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => console.log(data.mensaje))
}

// Agrega el evento al botón
botonEnviar.addEventListener("click", EnviarDatos);
function TraeEquipo(){
if(traeComputo.value == "No"){
    marcaComputador.style.display = "none";
    serialComputador.style.display = "none";
    NombreMarcaEquipo.style.display = "none";
    NombreSerialEquipo.style.display = "none";

}else if(traeComputo.value == "Si"){
marcaComputador.style.display = "block";
    serialComputador.style.display = "block";
    NombreMarcaEquipo.style.display = "block";
    NombreSerialEquipo.style.display = "block";
}else{
    marcaComputador.style.display = "none";
    serialComputador.style.display = "none";
    NombreMarcaEquipo.style.display = "none";
    NombreSerialEquipo.style.display = "none"; 
}

}

TraeEquipo()
traeComputo.addEventListener("change",TraeEquipo)