class Cancion {
    #duracion //propiedad privada
    constructor(titulo, artista, duracion) {
        this.titulo = titulo
        this.artista = artista
        this.#duracion = duracion
       
        
    }

    // Método público que muestra detalles de la canción
    mostrarDetalles() {
        console.log(`Título: ${this.titulo}, Artista: ${this.artista}, Duración: ${this.#duracion}`)
    }
}

class BibliotecaMusical {
    constructor() {
        this.canciones = []
    }

  
    agregarCancion(cancion) {
        this.canciones.push(cancion)
    }
    eliminarCancion(titulo) {
        this.canciones = this.canciones.filter(cancion => cancion.titulo !== titulo);
    }

    mostrarDetalles() {
       
         this.canciones.forEach(cancion => cancion.mostrarDetalles())
    }
}
let cancion1 = new Cancion("sorry4much", "feid", "3:20")
let cancion2 = new Cancion("Stairway to Heaven", "Led Zeppelin", "8:02")
let cancion3 = new Cancion("yellow", "codplay", "4:30")

let biblioteca = new BibliotecaMusical()
biblioteca.agregarCancion(cancion1)
biblioteca.agregarCancion(cancion2)
biblioteca.agregarCancion(cancion3)
biblioteca.eliminarCancion("sorry4much")
biblioteca.mostrarDetalles()

// cancion1.mostrarDetalles()

