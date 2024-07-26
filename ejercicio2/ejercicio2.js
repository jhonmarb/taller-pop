class AgendaContactos {
    #contactos

    constructor() {
        this.#contactos = []
    }
    agregarContacto(nombre, apellido, telefono, correo) {
        this.#contactos.push({ nombre, apellido, telefono, correo })
    }

    editarContacto(telefono, nuevoNombre, nuevoApellido, nuevoCorreo) {
        let contacto = this.#contactos.find(c => c.telefono === telefono)
        if (contacto) {
            contacto.nombre = nuevoNombre || contacto.nombre
            contacto.apellido = nuevoApellido || contacto.apellido
            contacto.correo = nuevoCorreo || contacto.correo
        }
    }
    eliminarContacto(telefono) {
        this.#contactos = this.#contactos.filter(c => c.telefono !== telefono)
    }

   
    mostrarContactos() {
        
        this.#contactos.forEach(c => {
             console.log(`Nombre: ${c.nombre}, Apellido: ${c.apellido}, Teléfono: ${c.telefono}, Correo: ${c.correo}`)
        })
        
    }
}

let agendaco = new AgendaContactos()
agendaco.agregarContacto('jhon', 'benavides', '123456789', 'jhonb@gmail.com')
agendaco.agregarContacto('juliana', 'bolaños', '987654321', 'jilianab@gmail.com')

// agendaco.editarContacto('123456789', 'jhon', 'muñoz', 'jhonmarb@outllok.com')

// agendaco.eliminarContacto('987654321')
agendaco.mostrarContactos()
