const express = require ('express');
const Producto = require('./ClassProducto')

const app = express();
const puerto = 8080;
const server = app.listen(puerto, () => { 
   console.log(`Servidor inicializado en ${server.address().port}`) 
})
server.on("error", error => console.log(`Error en servidor: ${error}`))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

var sesion = new Producto;
app.get('/api/productos/', (req, res) => {
    res.json(sesion.listar(0))
    console.log(`get Listado`)
})
app.get('/api/productos/:id', (req, res) => {
    res.json(sesion.listar(req.params.id))
    console.log(`get con id = ${req.params.id}`)
})

app.post('/api/productos/', (req, res) => { //tiene que recibir JSON
    console.log("Agregado: " + sesion.guardar(...Object.values(req.body)))
})


/*
rutas get(total/individual) y post (clases y modulo propio)
si no existe individual return {error:"producto no encontrado"}
si no existe total {error:"no hay productos cargados"}
respuestas en JSON
mensaje de conexion 8080, descripcion de error
{
    title:(nombre del producto),
    price:(precio),
    thumbnail:(url)
}*/