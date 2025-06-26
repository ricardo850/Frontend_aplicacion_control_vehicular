let content = document.querySelector(".content")
let datos = JSON.parse(sessionStorage.getItem("resultadosDatos"));

datos.forEach(element => {
    let divContent = document.createElement("div")
    let divNombreApellidos = document.createElement("div")
    let divCedula = document.createElement("div")
    let divempresaGestionaPuesto = document.createElement("div")
    let divnombrePuesto = document.createElement("div")
    let divtipoSangre = document.createElement("div")
    let divnombreApellidosEmergencia = document.createElement("div")
    let divtelefonoEmergencia = document.createElement("div")
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

    const elementos = [
        divNombreApellidos, divCedula, divempresaGestionaPuesto, divnombrePuesto, divtipoSangre,
        divnombreApellidosEmergencia, divtelefonoEmergencia, diveps, divarl, divfuncionarioGestionVisita,
        divtraeComputoExterno, divmarcaEquipo, divserialEquipo, divid
    ];

    elementos.forEach(el => el.classList.add("estiloDiv"));

    divContent.append(...elementos)
    divContent.style.display = "flex"

    content.appendChild(divContent)
});
