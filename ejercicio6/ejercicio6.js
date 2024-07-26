class Producto {
    #cantidadEnStock
    constructor(codigoProducto, nombreProducto) {
        this.codigoProducto = codigoProducto
        this.nombreProducto = nombreProducto
        this.#cantidadEnStock = 0
    }

    agregarStock(cantidad) {
        if (cantidad > 0) {
            this.#cantidadEnStock += cantidad;
            console.log(`Se agrego ${cantidad} unidades del producto "${this.nombreProducto}"`)
        } 
    }
    retirarStock(cantidad) {
        if (cantidad > 0) {
            if (this.#cantidadEnStock >= cantidad) {
                this.#cantidadEnStock -= cantidad
                console.log(`Se retira ${cantidad} unidades del producto "${this.nombreProducto}"`)
            } 
        } 
    }
    mostrarStock() {
        console.log(`Producto: ${this.nombreProducto}, Codigo: ${this.codigoProducto}, Stock: ${this.#cantidadEnStock}`)
    }
}

class Inventario {
    constructor() {
        this.productos = new Map()
    }
    agregarProducto(codigoProducto, nombreProducto, cantidad) {
        if (this.productos.has(codigoProducto)) {
            this.productos.get(codigoProducto).agregarStock(cantidad)
        } else {
            const nuevoProducto = new Producto(codigoProducto, nombreProducto)
            nuevoProducto.agregarStock(cantidad)
            this.productos.set(codigoProducto, nuevoProducto)
            console.log(`el producto "${nombreProducto}" se agrego`)
        }
    }

    retirarProducto(codigoProducto, cantidad) {
        if (this.productos.has(codigoProducto)) {
            this.productos.get(codigoProducto).retirarStock(cantidad)
        }
    }

    mostrarStock() {
        this.productos.forEach(producto => producto.mostrarStock())
    }
}

let inventario = new Inventario()

inventario.agregarProducto('321', 'Manzanas', 50)
inventario.agregarProducto('456', 'Peras', 30)
inventario.mostrarStock()

inventario.agregarProducto('321', 'Manzanas', 20)
inventario.retirarProducto('456', 10)
inventario.mostrarStock()

