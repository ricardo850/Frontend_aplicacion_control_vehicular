let correo = document.querySelector(".correo")
let contrasena = document.querySelector(".contrasena")
let empresa = document.querySelector(".empresa")

let btnEnviar = document.querySelector(".btnEnviar")

function inicioSesion(e){
   e.preventDefault();
    datos = {
        empresa:empresa.value,
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
       window.location.href = "/MenuEmpresas/MenuEmpresas.html";
       
       localStorage.setItem("nombreEmpresa" , JSON.stringify(empresa.value))
      }else{
        alert("usuario no encontrado")
      }
    })

}

btnEnviar.addEventListener("click" , inicioSesion)