let contentDatos = document.querySelector(".contentDatos")
let datosGuardados = sessionStorage.getItem("datosVisitantes");

let visitantes = JSON.parse(datosGuardados);

visitantes.forEach(element => {
    let divContent = document.createElement("div")
    let divNombreApellidos = document.createElement("div")
    let divCedula = document.createElement("div")
    let divempresaGestionaPuesto = document.createElement("div")
    let divnombrePuesto = document.createElement("div")
    let divtipoSangre = document.createElement("div")
    let divnombreApellidosEmergencia = document.createElement("div")
    let divtelefonoEmergencia = document.createElement("telefonoEmergencia")
    let diveps = document.createElement("div")
    let divarl = document.createElement("div")
    let divfuncionarioGestionVisita = document.createElement("div")
    let divtraeComputoExterno = document.createElement("div")
    let divmarcaEquipo = document.createElement("div")
    let divserialEquipo = document.createElement("div")
   let divid = document.createElement("div")


    divNombreApellidos.innerHTML = element.nombreApellidos
    divCedula.innerHTML = element.cedula
    divempresaGestionaPuesto.innerHTML = element.empresaGestionaPuesto
    divnombrePuesto.innerHTML = element.nombrePuesto
    divtipoSangre.innerHTML = element.tipoSangre
    divnombreApellidosEmergencia.innerHTML = element.nombreApellidosEmergencia
    divtelefonoEmergencia.innerHTML = element.telefonoEmergencia
    diveps.innerHTML = element.eps
    divarl.innerHTML = element.arl
    divfuncionarioGestionVisita.innerHTML = element.funcionarioGestionaVisita
    divtraeComputoExterno.innerHTML = element.traeComputoExterno
    divmarcaEquipo.innerHTML = element.marcaEquipo
    divserialEquipo.innerHTML = element.serialequipo
    divid.innerHTML = element.id

    divNombreApellidos.classList.add("estiloDiv")
    divCedula.classList.add("estiloDiv")
    divempresaGestionaPuesto.classList.add("estiloDiv")
    divnombrePuesto.classList.add("estiloDiv")
    divtipoSangre.classList.add("estiloDiv")
    divnombreApellidosEmergencia.classList.add("estiloDiv")
    divtelefonoEmergencia.classList.add("estiloDiv")
    diveps.classList.add("estiloDiv")
    divarl.classList.add("estiloDiv")
    divfuncionarioGestionVisita.classList.add("estiloDiv")
     divtraeComputoExterno.classList.add("estiloDiv")
    divmarcaEquipo.classList.add("estiloDiv")
    divserialEquipo.classList.add("estiloDiv")
    divid.classList.add("estiloDiv")

    divContent.append(divid,divNombreApellidos,divCedula,divempresaGestionaPuesto,divnombrePuesto,divtipoSangre,divnombreApellidosEmergencia,divtelefonoEmergencia,
        diveps,divarl,divfuncionarioGestionVisita,divtraeComputoExterno,divmarcaEquipo,divserialEquipo
    )


    contentDatos.appendChild(divContent)

    divContent.style.display = "flex"
    
});

