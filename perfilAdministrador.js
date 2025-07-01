let correoAdministrador = document.querySelector(".correo")
let contrasenaAdministrador = document.querySelector(".contrasena")

let botonEnviar = document.querySelector(".btnEnviar")



function inicioSesion(){
    datos = {
        correo:correoAdministrador.value,
        contrasena:contrasenaAdministrador.value
    }


    fetch("http://localhost:8080/inicioSesionAdministrador", {
        method :"POST",
        headers : {
            "Content-Type": "application/json"
        },

        body : JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
      if(data.mensaje == "true"){
       window.location.href = "opcionesAdminsitrador.html";
      }else{
        alert("usuario no encontrado")
      }
    })

}

botonEnviar.addEventListener("click",inicioSesion)