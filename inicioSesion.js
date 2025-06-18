let nombreEmpresaVisitada = document.querySelector(".nombreEmpresaVisitada");
let puestoTrabajo = document.querySelector(".puestoTrabajo");
let contrasenaEmpresa = document.querySelector(".contrasenaEmpresa");
let BtnSession = document.querySelector(".BtnSession")

function inicioSesion() {
    let datos = {
        nombreEmpresaVisitada:nombreEmpresaVisitada.value,
        puestoTrabajo:puestoTrabajo.value,
        contrasenaEmpresa:contrasenaEmpresa.value
    }

fetch("http://localhost:8080/inicioSesion", {
        method :"POST",
        headers : {
            "Content-Type": "application/json"
        },

        body : JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
      if(data.mensaje == "tablaExiste"){
         sessionStorage.setItem("datosVisitantes", JSON.stringify(data.datos));
        window.location.href = "datosControlVisitantes.html";
      }else if(data.mensaje == "falso"){
        alert("usuario no encontrado vuelva a ingresar")
      }else if(data.mensaje == "tablaNoExiste"){
alert("puesto no encontrado")
      }

    })


}

BtnSession.addEventListener("click",inicioSesion )