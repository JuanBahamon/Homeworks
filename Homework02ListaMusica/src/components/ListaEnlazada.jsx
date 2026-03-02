class NodoCancion {
  constructor(cancion) {
    this.cancion = cancion
    this.siguiente = null
  }
}

class ListaEnlazada {
  constructor() {
    this.cabeza = null
    this.actual = null
  }

  agregar(cancion) {
    const nuevoNodo = new NodoCancion(cancion)
    if (!this.cabeza) {
      this.cabeza = nuevoNodo
      this.actual = nuevoNodo
    } else {
      let temp = this.cabeza
      while (temp.siguiente !== null) {
        temp = temp.siguiente
      }
      temp.siguiente = nuevoNodo
    }
  }

  siguiente() {
    if (this.actual && this.actual.siguiente) {
      this.actual = this.actual.siguiente
      return true
    }
    return false
  }

  tieneSiguiente() {
    return this.actual !== null && this.actual.siguiente !== null
  }

  obtenerActual() {
    return this.actual ? this.actual.cancion : null
  }

  obtenerTodo() {
    const lista = []
    let temp = this.cabeza
    while (temp !== null) {
      lista.push(temp.cancion)
      temp = temp.siguiente
    }
    return lista
  }
}

export { ListaEnlazada }