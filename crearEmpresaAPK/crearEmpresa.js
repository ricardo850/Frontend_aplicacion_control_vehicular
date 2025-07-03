let nombres = document.querySelector(".nombres")
let apellidos = document.querySelector(".apellidos")
let correo = document.querySelector(".correo")
let contrasena = document.querySelector(".contrasena")
let btnEnviar = document.querySelector(".btnEnviar")
let empresa = document.querySelector(".empresa")



function inicioSesion() {

    let datos = {
        nombres:nombres.value,
        apellidos:apellidos.value,
        empresa:empresa.value,
        correo:correo.value,
        contrasena:contrasena.value,
    }

fetch("http://localhost:8080/insertarDatosInicioSesion", {
        method :"POST",
        headers : {
            "Content-Type": "application/json"
        },

        body : JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
      if(data.mensaje == "ok"){
       alert("registro exitoso")
      }
    })


}

btnEnviar.addEventListener("click",inicioSesion)