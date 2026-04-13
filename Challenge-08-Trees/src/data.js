class Nodo {
  constructor(valor) {
    this.valor = valor;
    this.izquierda = null;
    this.derecha = null;
  }

  isLeaf() {
    return this.izquierda === null && this.derecha === null;
  }
}

class ArbolBinario {
  constructor() {
    this.raiz = null;
  }

  insertar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.raiz) {
      this.raiz = nuevoNodo;
      return;
    }

    let actual = this.raiz;
    while (true) {
      if (valor < actual.valor) {
        if (!actual.izquierda) {
          actual.izquierda = nuevoNodo;
          return;
        }
        actual = actual.izquierda;
      } else if (valor > actual.valor) {
        if (!actual.derecha) {
          actual.derecha = nuevoNodo;
          return;
        }
        actual = actual.derecha;
      } else {
        return;
      }
    }
  }

  preorden(nodo) {
    if (!nodo) return;
    console.log(nodo.valor);
    this.preorden(nodo.izquierda);
    this.preorden(nodo.derecha);
  }

  inorden(nodo) {
    if (!nodo) return;
    this.inorden(nodo.izquierda);
    console.log(nodo.valor);
    this.inorden(nodo.derecha);
  }

  postorden(nodo) {
    if (!nodo) return;
    this.postorden(nodo.izquierda);
    this.postorden(nodo.derecha);
    console.log(nodo.valor);
  }

  buscar(valor) {
    let actual = this.raiz;
    while (actual) {
      if (valor === actual.valor) return true;
      actual = valor < actual.valor ? actual.izquierda : actual.derecha;
    }
    return false;
  }
}

export const convertirParaD3 = (nodo) => {
  if (!nodo) return null;

  const resultado = { name: String(nodo.valor) };

  const izquierda = convertirParaD3(nodo.izquierda);
  const derecha = convertirParaD3(nodo.derecha);

  const hijos = [izquierda, derecha].filter(Boolean);
  if (hijos.length > 0) resultado.children = hijos;

  return resultado;
};

const arbol = new ArbolBinario();
[25, 15, 50, 10, 22, 35, 70, 12, 18, 19, 44, 66, 90, 11, 13, 64, 78].forEach(n => arbol.insertar(n));

export default arbol;