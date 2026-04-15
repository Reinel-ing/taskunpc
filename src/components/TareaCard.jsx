import { Link } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function TareaCard({ id, titulo, materia, fecha, completada }) {
  const { toggleTarea } = useTareas();

  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      opacity: completada ? 0.6 : 1,
      backgroundColor: completada ? "#f0f0f0" : "#fff",
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
    }}>
      <input
        type="checkbox"
        checked={completada}
        onChange={() => toggleTarea(id)}
        style={{ marginTop: "4px", cursor: "pointer", width: "18px", height: "18px" }}
      />
      <div style={{ flex: 1 }}>
        <h3 style={{ margin: "0 0 6px", textDecoration: completada ? "line-through" : "none" }}>
          {titulo}
        </h3>
        <p style={{ margin: "2px 0" }}>📚 {materia}</p>
        <p style={{ margin: "2px 0" }}>📅 {fecha}</p>
        <p style={{ margin: "6px 0 0" }}>
          <strong style={{ color: completada ? "green" : "orange" }}>
            {completada ? "Completada" : "Pendiente"}
          </strong>
        </p>
      </div>
      <Link to={`/tarea/${id}`} style={{ fontSize: "0.85rem", color: "#1a1a2e" }}>
        Ver detalle →
      </Link>
    </div>
  );
}

export default TareaCard;