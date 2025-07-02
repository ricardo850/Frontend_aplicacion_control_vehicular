let content = document.querySelector(".content");

function Empresas() {
  fetch("http://localhost:8080/traerEmpresa")
    .then(response => response.json())
    .then(data => {
      if (data.mensaje === "true") {
        let table = document.createElement("table");
        table.border = "2";
        let thead = document.createElement("thead");
        let trHead = document.createElement("tr");

        let thEmpresa = document.createElement("th");
        thEmpresa.innerText = "Empresa";
        let thAccion = document.createElement("th");
        thAccion.innerText = "Acción";

        trHead.appendChild(thEmpresa);

        trHead.appendChild(thAccion);
        thead.appendChild(trHead);
        table.appendChild(thead);

        let tbody = document.createElement("tbody");

        data.datos.forEach(element => {
          let tr = document.createElement("tr");

      
          let tdEmpresa = document.createElement("td");
          tdEmpresa.innerText = element.empresa;
         let boton = document.createElement("button")
          let tdAccion = document.createElement("td");
          let linkVerPuestos = document.createElement("a");
          linkVerPuestos.href = "#"; 
          boton.innerText = "Ver Puestos";
          linkVerPuestos.style.color = "blue";
          linkVerPuestos.style.cursor = "pointer";

          linkVerPuestos.appendChild(boton)

         
          linkVerPuestos.addEventListener("click", (e) => {
            e.preventDefault(); 
          });

          tdAccion.appendChild(linkVerPuestos);

          tr.appendChild(tdEmpresa);
          tr.appendChild(tdAccion);

          tbody.appendChild(tr);
        });

        table.appendChild(tbody);
        table.classList.add("tableCss");
        content.appendChild(table);
      } else {
        content.innerText = "No se encontraron empresas.";
      }
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
      content.innerText = "Error al cargar los datos.";
    });
}

document.addEventListener("DOMContentLoaded", Empresas);
