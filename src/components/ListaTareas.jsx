import { useState } from "react";
import { useTareas } from "../context/TareasContext";
import TareaCard from "./TareaCard";

function ListaTareas() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState("todas");

  const tareasFiltradas = tareas.filter((t) => {
    if (filtro === "pendientes") return !t.completada;
    if (filtro === "completadas") return t.completada;
    return true;
  });

  const btnStyle = (activo) => ({
    padding: "6px 16px",
    borderRadius: "20px",
    border: "none",
    cursor: "pointer",
    fontWeight: activo ? "bold" : "normal",
    backgroundColor: activo ? "#1a1a2e" : "#eee",
    color: activo ? "white" : "#333",
  });

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        <button style={btnStyle(filtro === "todas")} onClick={() => setFiltro("todas")}>
          Todas
        </button>
        <button style={btnStyle(filtro === "pendientes")} onClick={() => setFiltro("pendientes")}>
          Pendientes
        </button>
        <button style={btnStyle(filtro === "completadas")} onClick={() => setFiltro("completadas")}>
          Completadas
        </button>
      </div>

      {tareasFiltradas.length === 0 ? (
        <p style={{ color: "#888" }}>No hay tareas en esta categoría.</p>
      ) : (
        tareasFiltradas.map((tarea) => (
          <TareaCard key={tarea.id} {...tarea} />
        ))
      )}
    </div>
  );
}

export default ListaTareas;