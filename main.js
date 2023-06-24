const payasos = "./json/data.json"

fetch(payasos)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos);
    mostrarPayasos(datos);
  })

//BUSCADOR

function filtrar(array){
    let buscador = document.getElementById("buscador");
    buscador.addEventListener("input", ()=>{
      let payasoFiltrado = array.filter(payaso => payaso.nombre.toLowerCase().includes(buscador.value));
      return mostrarProductos(payasoFiltrado)
    });
    mostrarProductos(array)
  }

//CARDS

function mostrarPayasos (arrayPayasos){
    let contenedor = document.getElementById("info__payasos")
    contenedor.innerHTML = ""
    arrayPayasos.forEach((payaso) => {
        let card = document.createElement("div")
        
        card.innerHTML = `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                        <div class="col-md-4">
                            <img src="${payaso.imagen}" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">${payaso.nombre}</h5>
                                <p class="card-text">${payaso.edad} ${payaso.altura} ${payaso.peso} </p>
                                <p class="card-text"><small class="text-body-secondary">${payaso.datos}</small></p>
                                <button class="boton__payaso" id="${payaso.id}">Buy clown</button>
                            </div>
                        </div>
                </div>
            </div>
        `
        
        contenedor.appendChild(card)
    })
}

