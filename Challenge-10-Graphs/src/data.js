export const datosIniciales = {
    ciudades : [
        { id: 1, nombre: "Cali"},
        { id: 2, nombre: "Bogotá"},
        { id: 3, nombre: "Medellín"},
        { id: 4, nombre: "Barranquilla"},
        { id: 5, nombre: "Cartagena"},
    ],

    personas : [
        {id: 1, nombre: "MrSatan", edad: 20, ciudadId: 1},
        {id: 2, nombre: "Goku", edad: 25, ciudadId: 2},
        {id: 3, nombre: "Vegeta", edad: 30, ciudadId: 3},
        {id: 4, nombre: "Bulma", edad: 28, ciudadId: 4},
        {id: 5, nombre: "Krillin", edad: 22, ciudadId: 5},
    ],

    amigos : [
        {id: 1, personaId: 1, amigoId: 2},
        {id: 2, personaId: 1, amigoId: 3},
        {id: 3, personaId: 2, amigoId: 4},
        {id: 4, personaId: 3, amigoId: 5},
        {id: 5, personaId: 4, amigoId: 1},
    ]
}