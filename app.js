let contadorPedidos = 0;
const listaPedidos = document.getElementById("listaPedidos");
const btnAgregar = document.getElementById("btnAgregar");

// Crear un pedido//
function crearPedido() {
    contadorPedidos++;

    const pedido = {
        id: contadorPedidos,
        estado: "En Proceso"
    };

    mostrarPedido(pedido);
    procesarPedido(pedido);
}

//Imprimir//
function mostrarPedido(pedido) {
    const div = document.createElement("div");
    div.classList.add("pedido", "proceso");
    div.id = `pedido-${pedido.id}`;

    div.textContent = `Pedido #${pedido.id} - ${pedido.estado}`;

    listaPedidos.appendChild(div);
}

//Actualizar//
function actualizarPedido(pedido) {
    const div = document.getElementById(`pedido-${pedido.id}`);

    div.textContent = `Pedido #${pedido.id} - ${pedido.estado}`;

    if (pedido.estado === "Completado") {
        div.classList.remove("proceso");
        div.classList.add("completado");
    }
}

//Asincronia//
function prepararPedido(pedido) {
    return new Promise((resolve) => {

        const tiempo = Math.floor(Math.random() * 3000) + 2000;

        setTimeout(() => {
            pedido.estado = "Completado";
            resolve(pedido);
        }, tiempo);

    });
}

async function procesarPedido(pedido) {
    const pedidoFinal = await prepararPedido(pedido);
    actualizarPedido(pedidoFinal);
}

btnAgregar.addEventListener("click", crearPedido);