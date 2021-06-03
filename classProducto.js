var idCounter = 0;
var listado = [];
class Producto {
    constructor(){}
    
    listar(id){
        if (!id){
            if (listado.length === 0){
                return {error:"no hay productos cargados"}
            }
            return listado;
        }
        else {
            if (listado.find(e => e.id == id)){
                return {error:"producto no encontrado"}
            }
            return listado.find(e => e.id == id);
        }
    }
    
    guardar(titulo, precio, url){
        listado.push({
            title: titulo,
            price: precio,
            thumbnail: url,
            id: ++idCounter
        })
        return listado.find(e => e.id == idCounter);
    }

}
/*
var prueba = new Producto;
prueba.guardar("regla", 25, "url")
prueba.guardar("goma", 15, "url")
console.log(prueba.listar(1))
console.log(prueba.listar())
*/
module.exports = Producto;