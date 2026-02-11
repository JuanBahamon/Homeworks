// Destructuring Assignement (Nos permite desempacar valores que tenemos en un array, o las propiedades de un objeto en variables distintas)
// Puede pasar que si yo creo una variable y la desestructuro ya haya otra que se llame igual, o mejor es colocarle un Alias
const [a, b, c] = [10, 20, 30]

const {name: university, city} = { name: "Autonoma", city: "Cali"}

console.log(a + b)
console.log(university)

// Functions
// Las funciones se puede reutilizar, tienen un nombre, un cuerpo, un contenido, puede tener parametros, pueden retornar algo
function oldRegularFunction (a, b){
    return a + b
}

const newRegularFunction = function (a,b){
    return a + b
}

const arrowFunction = (a, b) => {
    return a + b
}

console.log(oldRegularFunction(2, 3))
console.log(newRegularFunction(2, 3))
console.log(arrowFunction(2, 3))