// Array de usuarios

const usuarios = [{ id: 1, nombre: "Andres", edad: 22 ,activo: true}, 
    { id: 2, nombre: "Maria", edad: 30 ,activo: false},
    { id: 3, nombre: "Juan", edad: 18 ,activo: true},
    { id: 4, nombre: "Ana", edad: 25 ,activo: false},
    { id: 5, nombre: "Luis", edad: 28 ,activo: true}
]

// .map() - Transforma cada elemento del array en otro valor
const nombres = usuarios.map(usuario => usuario.nombre);
console.log("Nombres de los usuarios:", nombres);

// .filter() - Filtra los elementos del array segun una condición
const usuariosActivos = usuarios.filter(usuarios => usuarios.activos);
console.log("Usuarios activos:", usuariosActivos);

// .find() - Encuentra el primer elemento que cumple una condicion
const usuarioMayor25 = usuarios.find(usuario => usuario.edad > 25);
console.log("Primero usuario mayor de 25 años:", usuarioMayor25);

// .reduce() - Reduce el array a un solo valor
const edadTotal = usuarios.reduce((total, usuario) => total + usuario.edad, 0);
console.log("Edad total de los usuarios:", edadTotal);