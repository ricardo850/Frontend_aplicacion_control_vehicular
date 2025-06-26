let content = document.querySelector(".content");
let datos = JSON.parse(localStorage.getItem("resultadosDatos") || "[]");

// Crear la tabla y encabezado solo una vez
const tabla = document.createElement("table");
tabla.border = "1";
tabla.style.borderCollapse = "collapse";
tabla.style.width = "100%";

// Crear encabezado
const thead = document.createElement("thead");
const encabezado = document.createElement("tr");

const columnas = [
    "ID", "Nombre y Apellidos", "Cédula", "Empresa", "Puesto", "Tipo de Sangre",
    "Nombre Emergencia", "Teléfono Emergencia", "EPS", "ARL",
    "Funcionario Visita", "¿Trae Computo Externo?", "Marca Equipo", "Serial Equipo"
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

datos.forEach(element => {
    const fila = document.createElement("tr");

    const celdas = [
        element.id,
        element.nombreApellidos,
        element.cedula,
        element.empresaGestionaPuesto,
        element.nombrePuesto,
        element.tipoSangre,
        element.nombreApellidosEmergencia,
        element.telefonoEmergencia,
        element.eps,
        element.arl,
        element.funcionarioGestionaVisita,
        element.traeComputoExterno,
        element.marcaEquipo,
        element.serialequipo
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
