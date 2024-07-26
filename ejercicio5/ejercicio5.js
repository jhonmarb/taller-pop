class Libro {
    #disponible; 
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
        this.#disponible = true; 
    }

    prestarLibro() {
        if (this.#disponible) {
            this.#disponible = false;
            console.log(`El libro "${this.titulo}" ha sido prestado`);
        } else {
            console.log(`El libro "${this.titulo}" no está disponible`);
        }
    }
    // metodo público 
    devolverLibro() {
        this.#disponible = true;
        console.log(`El libro "${this.titulo}" ha sido devuelto`);
    }
    
    getDisponible() {
        return this.#disponible;
    }
    // metodo público para mostrar el estado del libro
    mostrarEstado() {
        const estado = this.#disponible 
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Estado: ${estado}`);
    }
}

class LibroDigital extends Libro {
    constructor(titulo, autor, formato) {
        super(titulo, autor);
        this.formato = formato;
    }

    mostrarEstado() {
        const estado = this.getDisponible() 
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}, Estado: ${estado}`);
    }
}

let libro1 = new Libro('El Tunel', 'Ernesto Sabato');

libro1.mostrarEstado();
libro1.prestarLibro(); 
libro1.prestarLibro(); 
libro1.devolverLibro();
libro1.mostrarEstado(); 

let libroDigital1 = new LibroDigital('El Terror De Sexto B', 'Yolanda Reyes', 'PDF');

libroDigital1.mostrarEstado() 
libroDigital1.prestarLibro()
libroDigital1.mostrarEstado()
