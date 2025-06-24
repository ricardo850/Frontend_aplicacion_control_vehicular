let nombreEmpresaVisitada = document.querySelector(".nombreEmpresaVisitada");
let contrasenaEmpresa = document.querySelector(".contrasenaEmpresa");
let BtnSession = document.querySelector(".BtnSession")

function inicioSesion() {
    let datos = {
        nombreEmpresaVisitada:nombreEmpresaVisitada.value,
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
      if(data.mensaje == "true"){
        window.location.href = `EmpresaInicio.html?nombreEmpresaCliente=${encodeURIComponent(nombreEmpresaVisitada.value)}`
      }else if(data.mensaje == "falso"){
        alert("usuario no encontrado vuelva a ingresar")
      }

    })


}

BtnSession.addEventListener("click",inicioSesion )