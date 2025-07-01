document.addEventListener("DOMContentLoaded", function () {
    let contentDatos = document.querySelector(".contentDatos");

    let nombreBaseDatosDatos = document.querySelector(".nombreBaseDatosDatos");
    let puesto = document.querySelector(".puesto");
    let enviar = document.querySelector(".enviar");
    let contrasena = document.querySelector(".contrasena");

let nombreEmpresa = JSON.parse(localStorage.getItem("nombreEmpresa"));

        nombreBaseDatosDatos.textContent = nombreEmpresa;
   
    function crearPuesto() {
        let datos = {
            nombreBaseDatosDatos: nombreBaseDatosDatos.textContent,
            nombrepuesto: puesto.value,
            contrasena: contrasena.value
        };

        fetch("http://localhost:8080/crearPuesto", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        })
        .then(response => response.json())
        .then(data => {
            if (data.mensaje === "true") {
                alert("El puesto se creó correctamente");
            } else {
                alert("No se pudo crear el puesto");
            }
        })
        .catch(error => console.error("Error al crear el puesto:", error));
    }

    enviar.addEventListener("click", crearPuesto);
});
