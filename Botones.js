let correo = document.querySelector(".correo")
let contrasena = document.querySelector(".contrasena")

let btnEnviar = document.querySelector(".btnEnviar")

function inicioSesion(){
    datos = {
        correo:correo.value,
        contrasena:contrasena.value
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
       alert("el puesto se creo")
      }else {
        alert("el puesto no se creo")
      }

    })
}