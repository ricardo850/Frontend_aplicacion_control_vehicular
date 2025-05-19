 let nombreApellido = document.querySelector(".NombreApellido");
    let numeroIdentificacion = document.querySelector(".NumeroIdentificacion");
    let empresaGestionaPermiso = document.querySelector(".EmpresaGestionaPermiso");
    let PuestoIngreso = document.querySelector(".PuestoIngreso");
    let nombreContactoEmergencia = document.querySelector(".NombreContactoEmergencia");
    let telefonoContactoEmergencia = document.querySelector(".TelefonoContactoEmergencia");
    let eps = document.querySelector(".Eps");
    let arl = document.querySelector(".Arl");
    let funcionarioGestion = document.querySelector(".FuncionarioGestion");
    let traeComputo = document.querySelector(".traeComputo");
    let SelecciontraeComputo = traeComputo.value
    let marcaComputador = document.querySelector(".MarcaComputador");
    let serialComputador = document.querySelector(".SerialComputador");
    let tipoSangre = document.querySelector(".TipoSangre");
let valorSeleccionadoTipoSangre = tipoSangre.value;

console.log("Tipo de sangre seleccionado:", valorSeleccionado);


    let datos = {
        NombreApellidos: nombreApellido,
        cedula:numeroIdentificacion,
        EmpresaPermiso:empresaGestionaPermiso,
        

    }
try{
fetch("http://localhost:8080/DatosVisitantes", {
    method:"POST",
    headers:{
        "Content-Type": "application/json"
    },
    body:JSON.stringify()
})
.then()
}catch(error){
    console.log(`error se hizo daño ${error}`)
}
