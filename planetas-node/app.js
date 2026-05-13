const http = require("http");

const fs = require("fs");

// Puerto
const PORT = 3000;

// Crear servidor
const server = http.createServer((req, res) => {

    // Ruta principal
    if(req.url === "/"){

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("🚀 Bienvenido explorador espacial");

    }

    // Ruta planetas
    else if(req.url === "/planetas"){

        fs.readFile(
            "planetas.json",
            "utf8",

            (error, data) => {

                if(error){

                    res.writeHead(500);

                    res.end("Error leyendo planetas");

                    return;
                }

                res.writeHead(200, {
                    "Content-Type": "application/json"
                });

                res.end(data);

            }

        );

    }

    // Ruta no encontrada
    else{

        res.writeHead(404);

        res.end("Ruta no encontrada");

    }

});

// Escuchar servidor
server.listen(PORT, () => {

    console.log(
        `Servidor funcionando en http://localhost:${PORT}`
    );

});