class Empleado {
    #salario
    constructor(nombre, apellido, cargo, salario) {
        this.nombre = nombre
        this.apellido = apellido
        this.cargo = cargo
        this.#salario = salario
    }
    calcular() {
        return this.#salario * 0.2
    }
    calcularSueldoNeto() {
        const descontar = this.calcular()
        return this.#salario - descontar
    }
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre} ${this.apellido}, Cargo: ${this.cargo}, Salario: ${this.#salario}, Sueldo Neto: ${this.calcularSueldoNeto()}`)
    }
}
let empleado1 = new Empleado ('Mario', 'Benavides', 'Programador', 3500000)
empleado1.calcular()
empleado1.calcularSueldoNeto()
empleado1.mostrarDatos()

let empleado2 = new Empleado ('Julio', 'Bolaños', 'Desarrollador 3D', 2000000 )
empleado2.calcular()
empleado2.calcularSueldoNeto()
empleado2.mostrarDatos()


