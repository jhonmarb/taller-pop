class CuentaBancaria {
    #tipoCuenta
    saldo
    nombreTitular

    constructor(nombreTitular, saldoInicial, tipocuenta){
        this.nombreTitular = nombreTitular
        this.saldo = saldoInicial
        this.#tipoCuenta = tipocuenta
    }
    depositar(monto) {
        if (monto > 0) {
            this.saldo += monto
            console.log(`Se han depositado ${monto}. Nuevo saldo: ${this.saldo}.`)
        } 
    }
    retirar(monto) {
        if (monto > 0) {
            if (this.saldo >= monto) {
                if (this.#tipoCuenta === 'ahorro' && monto > 5000) {
                } else {
                    this.saldo -= monto
                    console.log(`Se han retirado ${monto}. Nuevo saldo: ${this.saldo}.`)
                }
            } 
        }
    }
    consultarSaldo() {
        console.log(`Saldo actual: ${this.saldo}.`)
    }

    
    mostrarInformación() {
        console.log(`Titular: ${this.nombreTitular}, Saldo: ${this.saldo}, Tipo de cuenta: ${this.#tipoCuenta}`)
    }
}

let cuenta1 = new CuentaBancaria('Mario Benavides', 10000, 'ahorros')
let cuenta2 = new CuentaBancaria('Mariela Paz', 50000, 'ahorros')

cuenta1.depositar(20000)
cuenta1.consultarSaldo()
cuenta1.retirar(5000)
cuenta1.mostrarInformación()
cuenta1.retirar(6000)
cuenta1.consultarSaldo()
cuenta2.depositar(2000)
cuenta2.consultarSaldo()
cuenta2.retirar(5000)
cuenta2.mostrarInformación()
cuenta2.retirar(6000)
cuenta2.consultarSaldo()