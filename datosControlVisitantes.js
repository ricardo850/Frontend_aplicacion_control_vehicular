let contentDatos = document.querySelector(".contentDatos")
let params = new URLSearchParams(window.location.search);
let nombre = params.get("nombreEmpresaCliente");
console.log(nombre)

let nombreBaseDatosDatos = document.querySelector(".nombreBaseDatosDatos")
let puesto = document.querySelector(".puesto")
let enviar = document.querySelector(".enviar")

nombreBaseDatosDatos.innerHTML = nombre

function crearPuesto() {
    let datos = {
        nombreBaseDatosDatos:nombreBaseDatosDatos.textContent,
        puesto:puesto.value
    }

fetch("http://localhost:8080/crearPuesto", {
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


enviar.addEventListener("click",crearPuesto)
