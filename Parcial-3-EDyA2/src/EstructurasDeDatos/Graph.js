class Grafo {
    constructor() {
        this.nodos = new Map();
    }

    agregarNodo(cancion) {
        if (!this.nodos.has(cancion.id)) {
            this.nodos.set(cancion.id, {
                cancion,
                vecinos: new Set(),
            });
        }
    }

    agregarArista(idA, idB) {
        if (!this.nodos.has(idA) || !this.nodos.has(idB)) {
            console.warn(`Grafo: uno de los nodos no existe (${idA}, ${idB})`);
            return;
        }
        if (idA === idB) return;

        this.nodos.get(idA).vecinos.add(idB);
        this.nodos.get(idB).vecinos.add(idA);
    }

    obtenerVecinos(id) {
        if (!this.nodos.has(id)) return [];
        const vecinos = this.nodos.get(id).vecinos;
        return [...vecinos].map((vid) => this.nodos.get(vid).cancion);
    }

    bfs(idOrigen, profundidad = 2) {
        if (!this.nodos.has(idOrigen)) return [];

        const visitados = new Set([idOrigen]);
        const cola = [{ id: idOrigen, nivel: 0 }];
        const resultados = [];

        while (cola.length > 0) {
            const { id, nivel } = cola.shift();

            if (nivel >= profundidad) continue;

            const vecinos = this.nodos.get(id).vecinos;
            for (const vecinoId of vecinos) {
                if (!visitados.has(vecinoId)) {
                    visitados.add(vecinoId);
                    resultados.push({
                        cancion: this.nodos.get(vecinoId).cancion,
                        distancia: nivel + 1,
                    });
                    cola.push({ id: vecinoId, nivel: nivel + 1 });
                }
            }
        }

        return resultados;
    }

    obtenerRecomendaciones(id, limite = 5, profundidad = 2) {
        const encontradas = this.bfs(id, profundidad);

        encontradas.sort((a, b) => a.distancia - b.distancia);

        return encontradas.slice(0, limite).map((r) => ({
            ...r.cancion,
            distancia: r.distancia,
        }));
    }

    caminoMasCorto(idOrigen, idDestino) {
        if (!this.nodos.has(idOrigen) || !this.nodos.has(idDestino)) return null;
        if (idOrigen === idDestino) return [idOrigen];

        const visitados = new Set([idOrigen]);
        const cola = [[idOrigen]];

        while (cola.length > 0) {
            const camino = cola.shift();
            const ultimo = camino[camino.length - 1];

            for (const vecinoId of this.nodos.get(ultimo).vecinos) {
                if (vecinoId === idDestino) return [...camino, vecinoId];
                if (!visitados.has(vecinoId)) {
                    visitados.add(vecinoId);
                    cola.push([...camino, vecinoId]);
                }
            }
        }

        return null;
    }

    existeNodo(id) {
        return this.nodos.has(id);
    }

    estanConectados(idA, idB) {
        if (!this.nodos.has(idA)) return false;
        return this.nodos.get(idA).vecinos.has(idB);
    }

    totalNodos() {
        return this.nodos.size;
    }

    totalAristas() {
        let suma = 0;
        for (const { vecinos } of this.nodos.values()) {
            suma += vecinos.size;
        }
        return suma / 2;
    }

    obtenerTodasLasCanciones() {
        return [...this.nodos.values()].map((n) => n.cancion);
    }

    imprimirGrafo() {
        for (const [id, { cancion, vecinos }] of this.nodos) {
            const nombres = [...vecinos]
                .map((v) => this.nodos.get(v).cancion.titulo)
                .join(', ');
            console.log(`[${cancion.titulo}] → ${nombres || '(sin conexiones)'}`);
        }
    }
}

export default Grafo;