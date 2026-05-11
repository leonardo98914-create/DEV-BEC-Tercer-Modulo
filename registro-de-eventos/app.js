// Obtener formulario 
const formulario = document.getElementById("formulario");

const mensaje = document.getElementById("mensaje");

// submit 
formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    mensaje.innerHTML = "";

    // Campos
    const nombre = document.getElementById("nombre").value.trim();

    const correo = document.getElementById("correo").value.trim();

    const edad = document.getElementById("edad").value;

    const horario = document.getElementById("horario").value;

    const archivo =
        document.getElementById("archivo").files[0];

    // VALIDACIONES

    // Nombre mínimo
    if(nombre.length < 3){

        mostrarError(
            "El nombre debe tener mínimo 3 caracteres"
        );

        return;
    }

    // Correo válido
    if(!correo.includes("@")){

        mostrarError(
            "Ingresa un correo válido"
        );

        return;
    }

    // Edad mínima
    if(edad < 18){

        mostrarError(
            "Debes ser mayor de edad"
        );

        return;
    }

    // Horario obligatorio
    if(horario === ""){

        mostrarError(
            "Selecciona un horario"
        );

        return;
    }

    // Validar archivo
    if(archivo){

        const tiposPermitidos = [
            "image/png",
            "image/jpeg",
            "application/pdf"
        ];

        if(!tiposPermitidos.includes(archivo.type)){

            mostrarError(
                "Solo se permiten PNG, JPG o PDF"
            );

            return;
        }

    }

    mostrarExito(
        "✅ Registro enviado correctamente"
    );

});

// Funcion error 

function mostrarError(texto){

    mensaje.innerHTML = `
        <p class="error">${texto}</p>
    `;

}

// Funcion exito 

function mostrarExito(texto){

    mensaje.innerHTML = `
        <p class="success">${texto}</p>
    `;

}