let nombreBaseDatos = document.querySelector(".nombreBaseDatos");
let contrasenaBaseDatos = document.querySelector(".contrasenaBaseDatos");
let BTNEnviarBaseDatosCrear = document.querySelector(".EnviarBaseDatosCrear")


function EnviarDatosEmpresaNueva(){
    let datos = {
        nombreBaseDatos:nombreBaseDatos.value,
        contrasenaBaseDatos: contrasenaBaseDatos.value

    }
    fetch("http://localhost:8080/CrearBaseDatosCliente" , {
        method :"POST",
        headers : {
            "Content-Type": "application/json"
        },

        body : JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => console.log(data.mensaje))
}

BTNEnviarBaseDatosCrear.addEventListener("click" , EnviarDatosEmpresaNueva)
