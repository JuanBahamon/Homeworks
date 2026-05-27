class MaxHeap {
    constructor() {
        this.heap = [];
    }


    padre(i) { return Math.floor((i - 1) / 2); }
    hijoIzq(i) { return 2 * i + 1; }
    hijoDer(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insertar(cancion) {
        this.heap.push(cancion);
        this.heapifyArriba(this.heap.length - 1);
    }

    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const maximo = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyAbajo(0);
        return maximo;
    }

    verMaximo() {
        return this.heap[0] ?? null;
    }

    topN(n) {
        const copia = new MaxHeap();
        copia.heap = [...this.heap];

        const resultados = [];
        for (let i = 0; i < n && copia.heap.length > 0; i++) {
            resultados.push(copia.extractMax());
        }
        return resultados;
    }

    actualizarReproducciones(id, cantidad = 1) {
        const index = this.heap.findIndex((c) => c.id === id);
        if (index === -1) return false;

        this.heap[index] = {
            ...this.heap[index],
            reproducciones: this.heap[index].reproducciones + cantidad,
        };

        this.heapifyArriba(index);
        this.heapifyAbajo(index);
        return true;
    }

    tamaño() { return this.heap.length; }
    estaVacio() { return this.heap.length === 0; }

    heapifyArriba(i) {
        while (i > 0) {
            const p = this.padre(i);
            if (this.heap[p].reproducciones < this.heap[i].reproducciones) {
                this.swap(p, i);
                i = p;
            } else {
                break;
            }
        }
    }

    heapifyAbajo(i) {
        const n = this.heap.length;

        while (true) {
            let mayor = i;
            const izq = this.hijoIzq(i);
            const der = this.hijoDer(i);

            if (izq < n && this.heap[izq].reproducciones > this.heap[mayor].reproducciones) {
                mayor = izq;
            }
            if (der < n && this.heap[der].reproducciones > this.heap[mayor].reproducciones) {
                mayor = der;
            }

            if (mayor !== i) {
                this.swap(i, mayor);
                i = mayor;
            } else {
                break;
            }
        }
    }

    imprimirArbol() {
        if (this.estaVacio()) {
            console.log('MaxHeap vacío');
            return;
        }
        let nivel = 0;
        let inicio = 0;
        while (inicio < this.heap.length) {
            const fin = Math.min(inicio + Math.pow(2, nivel), this.heap.length);
            const fila = this.heap
                .slice(inicio, fin)
                .map((c) => `${c.titulo}(${c.reproducciones})`)
                .join('  ');
            console.log(`Nivel ${nivel}: ${fila}`);
            inicio = fin;
            nivel++;
        }
    }
}

export default MaxHeap;