export class NodoMusica {
    constructor(titulo, artista) {
        this.titulo = titulo;
        this.artista = artista;
        this.siguiente = null;
    }
}

export class NodoHistorial {
    constructor(url) {
        this.url = url;
        this.anterior = null;
        this.siguiente = null;
    }
}

