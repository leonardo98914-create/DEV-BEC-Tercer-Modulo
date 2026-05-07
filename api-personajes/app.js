// API //

const API_URL = "https://rickandmortyapi.com/api/character";

const container = document.getElementById("data-container");

//Mostrar Personajes //

function mostrarPersonajes(personajes){

    container.innerHTML = "";

    personajes.forEach(personaje => {

        container.innerHTML += `
        
            <div class="card">

                <img src="${personaje.image}" alt="${personaje.name}">

                <h3>${personaje.name}</h3>

                <p>${personaje.species}</p>

            </div>

        `;

    });

}

//Obtener datos //

async function obtenerConFetch(){

    try{

        const respuesta = await fetch(API_URL);

        const datos = await respuesta.json();

        mostrarPersonajes(datos.results);

    }catch(error){

        console.log("Error con fetch:", error);

    }

}

// Obtener datos con AXIOS //

async function obtenerConAxios(){

    try{

        const respuesta = await axios.get(API_URL);

        mostrarPersonajes(respuesta.data.results);

    }catch(error){

        console.log("Error con axios:", error);

    }

}

// Botones //

document
    .getElementById("btnFetch")
    .addEventListener("click", obtenerConFetch);

document
    .getElementById("btnAxios")
    .addEventListener("click", obtenerConAxios);