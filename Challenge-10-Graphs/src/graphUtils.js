export function buildGraphData(ciudades, personas, amigos) {
    const nodes = []
    const links = []
  
    ciudades.forEach(ciudad => {
      nodes.push({
        id: `city-${ciudad.id}`,
        label: ciudad.nombre,
        type: "ciudad",
      })
    })
  
    personas.forEach(persona => {
      nodes.push({
        id: `person-${persona.id}`,
        label: `${persona.nombre} (${persona.edad})`,
        type: "persona",
      })
  
      links.push({
        source: `person-${persona.id}`,
        target: `city-${persona.ciudadId}`,
      })
    })
  
    amigos.forEach(amistad => {
      links.push({
        source: `person-${amistad.personaId}`,
        target: `person-${amistad.amigoId}`,
      })
    })
  
    return { nodes, links }
  }