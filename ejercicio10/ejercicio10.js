class Proyecto {
    #estado 
    constructor(nombreProyecto, fechaInicio, fechaFin) {
        this.nombreProyecto = nombreProyecto
        this.fechaInicio = fechaInicio
        this.fechaFin = fechaFin;
        this.#estado = 'no iniciado'
    }
    iniciarProyecto() {
        if (this.#estado === 'no iniciado') {
            this.#estado = 'en progreso'
            console.log(`El proyecto ${this.nombreProyecto} inicio`)
        } else {
            console.log(`El proyecto ${this.nombreProyecto} no puede ser iniciado. Estado actual: ${this.#estado}`)
        }
    }
    finalizarProyecto() {
        if (this.#estado === 'en progreso') {
            this.#estado = 'completado'
            console.log(`El proyecto ${this.nombreProyecto} se completo`)
        } 
    }
    mostrarEstado() {
        console.log(`Proyecto: ${this.nombreProyecto}, Estado: ${this.#estado}`)
    }
}

let proyecto1 = new Proyecto('Seguridad Inteligencia Artificial', '2023-10-07', '2024-12-07')
proyecto1.mostrarEstado()
proyecto1.iniciarProyecto()
proyecto1.mostrarEstado()
proyecto1.finalizarProyecto()
proyecto1.mostrarEstado()
