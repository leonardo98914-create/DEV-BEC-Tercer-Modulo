let biblioteca = [
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fantasía",
        disponible: true
    },
    {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        disponible: true
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopía",
        disponible: false
    }
];

//Asincronia//
function leerLibros(callback) {

    console.log("Leyendo datos...");

    setTimeout(() => {
        callback(biblioteca);
    }, 2000);

}

//Mostrar Inventario//
function mostrarLibros() {

    leerLibros((libros) => {

        const resultado = document.getElementById("resultado");

        resultado.innerHTML = "";

        libros.forEach((libro) => {

            resultado.innerHTML += `
                <p>
                    <strong>${libro.titulo}</strong> -
                    ${libro.autor} -
                    ${libro.genero} -
                    ${libro.disponible ? "Disponible" : "Prestado"}
                </p>
            `;

        });

    });

}

//Agregar libro//

function agregarLibro(titulo, autor, genero, callback) {

    const nuevoLibro = {
        titulo,
        autor,
        genero,
        disponible: true
    };

    setTimeout(() => {

        biblioteca.push(nuevoLibro);

        callback(`Libro "${titulo}" agregado correctamente`);

    }, 1500);

}

//Simular prestamo o devolucion//
function actualizarDisponibilidad(titulo, estado, callback) {

    setTimeout(() => {

        const libro = biblioteca.find(libro => libro.titulo === titulo);

        if (libro) {

            libro.disponible = estado;

            callback(`Disponibilidad actualizada`);

        } else {

            callback(`Libro no encontrado`);

        }

    }, 1000);

}

//Botones//
document.getElementById("btnMostrar")
    .addEventListener("click", mostrarLibros);

// Agregar//

document.getElementById("btnAgregar")
    .addEventListener("click", () => {

        agregarLibro(
            "Harry Potter",
            "J.K Rowling",
            "Fantasía",

            (mensaje) => {
                alert(mensaje);
                mostrarLibros();
            }

        );

    });


// Prestar libro//

document.getElementById("btnPrestar")
    .addEventListener("click", () => {

        actualizarDisponibilidad(
            "El Principito",
            false,

            (mensaje) => {
                alert(mensaje);
                mostrarLibros();
            }

        );

    });