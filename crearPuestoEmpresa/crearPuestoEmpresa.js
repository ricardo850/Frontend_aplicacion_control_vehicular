document.addEventListener("DOMContentLoaded", function () {

    let nombreBaseDatosDatos = document.querySelector(".nombreBaseDatosDatos");
    let puesto = document.querySelector(".puesto");
    let enviar = document.querySelector(".enviar");
    let contrasena = document.querySelector(".contrasena");

   let nombreBaseDatos = JSON.parse(localStorage.getItem("nombreEmpresa"))
     let content = document.querySelector(".content")
     content.textContent = nombreBaseDatos
let ubicacionPuesto = document.querySelector(".ubicacionPuesto")

    function crearPuesto() {

        
  function obtenerFechaHoraActual() {
  const ahora = new Date();
  const dia = ahora.getDate().toString().padStart(2, '0');
  const mes = (ahora.getMonth() + 1).toString().padStart(2, '0');
  const anio = ahora.getFullYear();

  let horas = ahora.getHours();
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  const segundos = ahora.getSeconds().toString().padStart(2, '0');

  const ampm = horas >= 12 ? 'PM' : 'AM';
  horas = horas % 12;
  if (horas === 0) {
    horas = 12;
  }
  horas = horas.toString().padStart(2, '0');

  return `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos} ${ampm}`;
}


        let datos = {
            nombreBaseDatosDatos:content.textContent,
            nombrepuesto: puesto.value,
            ubicacionPuesto:ubicacionPuesto.value,
            fechaCreacionPuesto:obtenerFechaHoraActual(),
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
