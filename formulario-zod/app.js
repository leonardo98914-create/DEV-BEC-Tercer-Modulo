// Obtener elementos 
const formulario =
    document.getElementById("registroForm");

const errores =
    document.getElementById("errores");

// Obtener Zod

const { z } = window.Zod;

const esquema = z.object({

    nombre: z
        .string()
        .min(3, "El nombre debe tener mínimo 3 caracteres"),

    correo: z
        .string()
        .email("Correo electrónico inválido"),

    password: z
        .string()
        .min(6, "La contraseña debe tener mínimo 6 caracteres")

});

// submit 
formulario.addEventListener("submit", (e) => {

    e.preventDefault();

    errores.innerHTML = "";

    // Datos del formulario
    const datos = {

        nombre:
            document.getElementById("nombre").value,

        correo:
            document.getElementById("correo").value,

        password:
            document.getElementById("password").value

    };

    // Validación
    const resultado = esquema.safeParse(datos);

    // Si hay errores
    if(!resultado.success){

        resultado.error.errors.forEach((error) => {

            errores.innerHTML += `
                <p class="error">
                    ${error.message}
                </p>
            `;

        });

        return;
    }

    // Éxito
    errores.innerHTML = `
        <p class="success">
            ✅ Registro exitoso
        </p>
    `;

    console.log("Datos válidos:", resultado.data);

});