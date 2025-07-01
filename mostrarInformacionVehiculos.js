let datosBaseDatos = JSON.parse(localStorage.getItem("nombreEmpresa") || "[]");
let datosPuesto = JSON.parse(localStorage.getItem("puesto") || "[]");
let content = document.querySelector(".content");
function VerVehiculos() {

    let datos = {
        empresaGestionaPuesto:datosBaseDatos,
        nombrePuesto:datosPuesto
    }

fetch("http://localhost:8080/verVehiculos", {
        method :"POST",
        headers : {
            "Content-Type": "application/json"
        },

        body : JSON.stringify(datos)
    })
    .then(response => response.json())
    .then(data => {
      if(data.mensaje == "ok"){
      
const tabla = document.createElement("table");
tabla.border = "1";
tabla.style.borderCollapse = "collapse";
tabla.style.width = "100%";

const thead = document.createElement("thead");
const encabezado = document.createElement("tr");

const columnas = [
    "ID", "Nombre y Apellidos", "Cédula", "Empresa", "Puesto", "Tipo de vehiculo",
    "placa vehiculo", "observaciones",
];

columnas.forEach(texto => {
    const th = document.createElement("th");
    th.textContent = texto;
    th.style.padding = "8px";
    th.style.backgroundColor = "#f2f2f2";
    th.style.border = "1px solid #ccc";
    encabezado.appendChild(th);
});

thead.appendChild(encabezado);
tabla.appendChild(thead);

// Crear cuerpo de la tabla
const tbody = document.createElement("tbody");

data.datos.forEach(element => {
    const fila = document.createElement("tr");

    const celdas = [
        element.id,
        element.nombreApellidos,
        element.cedula,
        element.empresaGestionaPuesto,
        element.nombrePuesto,
        element.tipoVehiculo,
        element.numeroPlaca,
        element.observacion,
    ];

    celdas.forEach(valor => {
        const td = document.createElement("td");
        td.textContent = valor || "N/A";
        td.style.padding = "8px";
        td.style.border = "1px solid #ccc";
        fila.appendChild(td);
    });

    tbody.appendChild(fila);
});

tabla.appendChild(tbody);
content.appendChild(tabla);

    
      }
    }
      )
      }


      document.addEventListener("DOMContentLoaded", function () {
    VerVehiculos()
});