
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
let empresaGestionaPuesto = document.querySelector(".empresaGestionaPuesto")
let NombreMarcaEquipo = document.querySelector(".nombreMarcaEquipo")
let NombreSerialEquipo = document.querySelector(".nombreSerialEquipo")

function EnviarDatos(event) {
    event.preventDefault()

    let datos = {
    nombreApellidos: nombreApellido.value,
    cedula: numeroIdentificacion.value,
    empresaGestionaPuesto:empresaGestionaPuesto.value,
    nombrePuesto: nombrePuesto.value,
    tipoSangre: tipoSangre.value,
    nombreApellidosEmergencia: nombreContactoEmergencia.value,
    telefonoEmergencia: telefonoContactoEmergencia.value,
    eps: eps.value,
    arl: arl.value,
    funcionarioGestionaVisita: funcionarioGestionaVisita.value,
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