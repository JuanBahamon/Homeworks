class NodoTrie {
    constructor() {
        this.hijos = {};
        this.esFinDePalabra = false;
        this.cancion = null;
    }
}

class Trie {
    constructor() {
        this.raiz = new NodoTrie();
    }

    insertar(cancion) {
        const titulo = cancion.titulo.toLowerCase();
        let nodoActual = this.raiz;

        for (const letra of titulo) {
            if (!nodoActual.hijos[letra]) {
                nodoActual.hijos[letra] = new NodoTrie();
            }
            nodoActual = nodoActual.hijos[letra];
        }

        nodoActual.esFinDePalabra = true;
        nodoActual.cancion = cancion;
    }

    buscar(titulo) {
        const nodo = this.recorrerHasta(titulo.toLowerCase());
        if (nodo && nodo.esFinDePalabra) {
            return nodo.cancion;
        }
        return null;
    }

    empiezaCon(prefijo) {
        return this.recorrerHasta(prefijo.toLowerCase()) !== null;
    }

    sugerir(prefijo, limite = 5) {
        const nodoPrefijo = this.recorrerHasta(prefijo.toLowerCase());
        if (!nodoPrefijo) return [];

        const resultados = [];
        this.recolectarCanciones(nodoPrefijo, resultados, limite);
        return resultados;
    }

    recorrerHasta(texto) {
        let nodoActual = this.raiz;

        for (const letra of texto) {
            if (!nodoActual.hijos[letra]) return null;
            nodoActual = nodoActual.hijos[letra];
        }

        return nodoActual;
    }

    recolectarCanciones(nodo, resultados, limite) {
        if (resultados.length >= limite) return;

        if (nodo.esFinDePalabra && nodo.cancion) {
            resultados.push(nodo.cancion);
        }

        for (const letra of Object.keys(nodo.hijos).sort()) {
            if (resultados.length >= limite) break;
            this.recolectarCanciones(nodo.hijos[letra], resultados, limite);
        }
    }

    contarCanciones() {
        let total = 0;
        const dfs = (nodo) => {
            if (nodo.esFinDePalabra) total++;
            for (const hijo of Object.values(nodo.hijos)) dfs(hijo);
        };
        dfs(this.raiz);
        return total;
    }
}

export default Trie;