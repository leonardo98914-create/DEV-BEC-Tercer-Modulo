// Numero aleatorio
let numeroSecreto =
    Math.floor(Math.random() * 100) + 1;

// Contador de intentos 
let contadorIntentos = 0;

//Intentos 
const inputNumero =
    document.getElementById("numero");

const mensaje =
    document.getElementById("mensaje");

const intentos =
    document.getElementById("intentos");

// Funcion principal

function verificarNumero(){

    const numeroUsuario =
        Number(inputNumero.value);

    contadorIntentos++;

    // Validar rango
    if(numeroUsuario < 1 || numeroUsuario > 100){

        mensaje.innerHTML =
            "⚠ Ingresa un número entre 1 y 100";

        return;
    }

    // Número correcto
    if(numeroUsuario === numeroSecreto){

        mensaje.innerHTML =
            `🎉 Correcto, el número era ${numeroSecreto}`;

    }

    // Muy alto
    else if(numeroUsuario > numeroSecreto){

        mensaje.innerHTML =
            "📈 El número es demasiado alto";

    }

    // Muy bajo
    else{

        mensaje.innerHTML =
            "📉 El número es demasiado bajo";

    }

    intentos.innerHTML =
        `Intentos: ${contadorIntentos}`;

}

// Eventos 

document
    .getElementById("btnIntentar")
    .addEventListener("click", verificarNumero);

document
    .getElementById("btnReiniciar")
    .addEventListener("click", reiniciarJuego);