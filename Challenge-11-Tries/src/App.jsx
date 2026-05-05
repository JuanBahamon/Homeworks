import { useState } from "react";
import { SmartSearch } from "./Tries/SmartSearch.js";

const engine = new SmartSearch();

engine.insert("air max", 90);
engine.insert("air force", 95);
engine.insert("air jordan", 85);
engine.insert("adidas boost", 80);
engine.insert("adidas ultraboost", 88);
engine.insert("nike react", 78);
engine.insert("nike pegasus", 82);
engine.insert("puma ignite", 70);
engine.insert("reebok classic", 65);
engine.insert("new balance 990", 75);
engine.insert("asics gel", 72);
engine.insert("converse chuck taylor", 68);

function App() {
  const [prefix, setPrefix] = useState("");
  const [results, setResults] = useState([]);
  const [topK, setTopK] = useState(3);

  const handleSearch = () => {
    const top = engine.searchTopK(prefix, topK);
    setResults(top);
  };

  return (
    <div style={{ fontFamily: "sans-serif", maxWidth: 500, margin: "40px auto", padding: 20 }}>
      <h2>Motor de busqueda zapatillas</h2>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Buscar prefijo (ej: air)"
          value={prefix}
          onChange={(e) => setPrefix(e.target.value)}
          style={{ flex: 1, padding: 8, fontSize: 16 }}
        />
        <input
          type="number"
          value={topK}
          min={1}
          onChange={(e) => setTopK(Number(e.target.value))}
          style={{ width: 60, padding: 8, fontSize: 16 }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 16px", fontSize: 16 }}>
          Buscar
        </button>
      </div>

      {results.length === 0 ? (
        <p>No hay resultados</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {results.map((r, i) => (
            <li key={i} style={{ padding: 12, marginBottom: 8, background: "#f0f0f0", borderRadius: 8 }}>
              <strong>{r.name}</strong> — popularidad: {r.popularity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;