class ReservaHotel {
    #habitacionAsignada; 
    constructor(nombreCliente, fechaReserva) {
        this.nombreCliente = nombreCliente;
        this.fechaReserva = fechaReserva;
        this.#habitacionAsignada = null;
    }
    reservarHabitacion(habitacion) {
        this.#habitacionAsignada = habitacion
        console.log(`Habitación ${this.#habitacionAsignada} asignada a ${this.nombreCliente} para la fecha ${this.fechaReserva}`)
    }
    cancelarReserva() {
        if (this.#habitacionAsignada) {
            console.log(`Reserva de la habitación ${this.#habitacionAsignada} cancelada`)
            this.#habitacionAsignada = null
        }
    }
    mostrarReserva() {
        if (this.#habitacionAsignada) {
            console.log(`Cliente: ${this.nombreCliente}, Fecha: ${this.fechaReserva}, Habitación: ${this.#habitacionAsignada}`)
        }
    }
}

const habitacionesDisponibles = ['101', '102', '103', '104', '105']
const reserva1 = new ReservaHotel('Jhon Benavides', '2024-26-07')

reserva1.reservarHabitacion('101')
reserva1.mostrarReserva()
reserva1.cancelarReserva()
reserva1.mostrarReserva()
