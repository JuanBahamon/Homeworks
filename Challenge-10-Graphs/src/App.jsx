import { useState } from "react"
import ForceGraph2D from "react-force-graph-2d"
import { datosIniciales } from "./data"
import { buildGraphData } from "./graphUtils"
import "./App.css"

export default function App() {
  const { ciudades, personas } = datosIniciales
  const { nodes, links } = buildGraphData(
    datosIniciales.ciudades,
    datosIniciales.personas,
    datosIniciales.amigos
  )

  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null)

  const personasDeCiudad = ciudadSeleccionada ? personas.filter(p => p.ciudadId === ciudadSeleccionada): []

  const graphData = {
    nodes: nodes.map(n => ({
      ...n, color: n.type === "ciudad" ? "#1D9E75" : "#378ADD",
    })),
    links: links.map(l => ({ ...l, color: "#aaa" })),
  }

  return (
    <div className="container">
      <h1 className="titulo">Grafo de amigos y ciudades</h1>

      <div className="leyenda">
        <span> C Ciudad</span>
        <span> P Persona</span>
      </div>

      <div className="grafo-wrapper">
        <ForceGraph2D
          graphData={graphData}
          nodeLabel="label"
          nodeRelSize={6}
          nodeCanvasObject={(node, ctx, globalScale) => {
            const label = node.label
            const fontSize = 12 / globalScale
            ctx.beginPath()
            ctx.arc(node.x, node.y, node.type === "ciudad" ? 8 : 5, 0, 2 * Math.PI)
            ctx.fillStyle = node.color
            ctx.fill()
            ctx.font = `${fontSize}px Sans-Serif`
            ctx.fillStyle = "#333"
            ctx.textAlign = "center"
            ctx.fillText(label, node.x, node.y - 10)
          }}
          linkColor={link => link.color}
          width={800}
          height={500}
        />
      </div>

      <div className="ciudades-section">
        <h2>Personas por ciudad</h2>

        <select
          onChange={e => setCiudadSeleccionada(Number(e.target.value))}
          defaultValue=""
        >
          <option value="" disabled>Selecciona una ciudad</option>
          {ciudades.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>

        {ciudadSeleccionada && (
          <ul className="personas-lista">
            {personasDeCiudad.length > 0 ? personasDeCiudad.map(p => (
                  <li key={p.id}>
                    Personas: <strong>{p.nombre}</strong> — {p.edad} años
                  </li>
                ))
              : <li>No hay personas en esta ciudad</li>
            }
          </ul>
        )}
      </div>
    </div>
  )
}