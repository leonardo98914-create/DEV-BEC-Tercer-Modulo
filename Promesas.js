// Número de mesas disponibles en el restaurante
let mesasDisponibles = 5;

// Función para verificar disponibilidad
function verificarDisponibilidad(mesasSolicitadas) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (mesasSolicitadas <= mesasDisponibles) {
                resolve("Mesas disponibles para la reserva.");
            } else {
                reject("Error: No hay suficientes mesas disponibles.");
            }

        }, 2000);

    });
}

// Función para enviar correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            // Genera un número aleatorio
            let envioExitoso = Math.random() > 0.3;

            if (envioExitoso) {
                resolve(`Correo enviado correctamente a ${nombreCliente}.`);
            } else {
                reject("Error al enviar el correo de confirmación.");
            }

        }, 1500);

    });
}

// Función principal
async function hacerReserva(nombreCliente, mesasSolicitadas) {

    try {

        console.log(`\nProcesando reserva para ${nombreCliente}...`);

        // Verificar disponibilidad
        let disponibilidad = await verificarDisponibilidad(mesasSolicitadas);
        console.log(disponibilidad);

        // Confirmar reserva
        console.log("Reserva confirmada.");

        // Enviar correo
        let correo = await enviarConfirmacionReserva(nombreCliente);
        console.log(correo);

    } catch (error) {

        console.log(error);

    }

}

// Prueba
hacerReserva("Leonardo", 3);
hacerReserva("Carlos", 7);
hacerReserva("Ana", 2);