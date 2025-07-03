let content = document.querySelector(".content")
   function TraerPuesto(){
   let empresa = JSON.parse(localStorage.getItem("nombreEmpresa"))
   fetch("http://localhost:8080/TraerPuestos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ empresaGestionaPuesto:empresa})
    })
    .then(response => response.json())
    .then(data => {
      if (data.mensaje === "true") {
        let table = document.createElement("table");
        table.border = "2";
        let thead = document.createElement("thead");
        let trHead = document.createElement("tr");

        let thPuesto = document.createElement("th");
        thPuesto.innerText = "Puesto";
        let thAccion = document.createElement("th");
        thAccion.innerText = "Acción";

        trHead.appendChild(thPuesto);

        trHead.appendChild(thAccion);
        thead.appendChild(trHead);
        table.appendChild(thead);

        let tbody = document.createElement("tbody");

        data.datos.forEach(element => {
          let tr = document.createElement("tr");

      
          let tdPuesto = document.createElement("td");
          tdPuesto.innerText = element.puesto;
          localStorage.setItem("puesto",JSON.stringify(tdPuesto.innerText))
         
         let botonVehiculos = document.createElement("button")
         let botonPersonas = document.createElement("button")
          let tdAccion = document.createElement("td");
          let DivBotones = document.createElement("div");
          let BotonVerRegistroPersonas = document.createElement("a");
          let BotonVerRegistroVehiculos = document.createElement("a");
          botonVehiculos.innerText = "Ver registros vehiculos";
          botonPersonas.innerText = "Ver registros personas"
          DivBotones.style.color = "blue";
          DivBotones.style.cursor = "pointer";
          DivBotones.classList.add("estiloDiv")

          BotonVerRegistroPersonas.appendChild(botonPersonas)
          BotonVerRegistroVehiculos.appendChild(botonVehiculos)

          
          BotonVerRegistroVehiculos.href = "/verRegistrosVehiculos/verRegistrosVehiculos.html"
          BotonVerRegistroPersonas.href = "/verRegistrosPersonas/verRegistrosPersonas.html"
          DivBotones.appendChild(BotonVerRegistroPersonas)
          DivBotones.appendChild(BotonVerRegistroVehiculos)

          tdAccion.appendChild(DivBotones);

          tr.appendChild(tdPuesto);
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


 
document.addEventListener("DOMContentLoaded", TraerPuesto);
