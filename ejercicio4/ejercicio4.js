class Auto {
    #velocidadMaxima
    #combustibleActual
    marca
    modelo
    velocidad

    constructor(marca, modelo, velocidadMaxima, combustibleInicial) {
        this.marca = marca
        this.modelo = modelo
        this.#velocidadMaxima = velocidadMaxima
        this.#combustibleActual = combustibleInicial
        this.velocidad = 0 
    }
    acelerar(incremento) {
        if (this.#combustibleActual > 0) {
            this.velocidad += incremento
            if (this.velocidad > this.#velocidadMaxima) {
                this.velocidad = this.#velocidadMaxima
            }
            this.#combustibleActual -= incremento * 0.1
            if (this.#combustibleActual < 0) {
                this.#combustibleActual = 0
                this.velocidad = 0
                console.log('El auto se ha detenido por falta de combustible.')
            }
        }
    }
    frenar(decremento) {
        this.velocidad -= decremento
        if (this.velocidad < 0) {
            this.velocidad = 0;
        }
    }
    recargarCombustible(cantidad) {
        this.#combustibleActual += cantidad
    }
    mostrarEstado() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
        console.log(`Velocidad: ${this.velocidad} km/h, Combustible actual: ${this.#combustibleActual} litros`)
        console.log(`Velocidad máxima: ${this.#velocidadMaxima} km/h`)
    }
}
let auto1 = new Auto('Honda RED Bull', 'RB20', 300, 350)
auto1.acelerar(150) 
auto1.mostrarEstado()