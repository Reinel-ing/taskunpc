import { useNavigate, useParams } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function DetalleTarea() {
  const { id } = useParams();
  const { tareas, eliminarTarea, toggleTarea } = useTareas();
  const navigate = useNavigate();

  const tarea = tareas.find((t) => t.id === Number(id));

  if (!tarea) {
    return (
      <div style={{ padding: "24px" }}>
        <p>Tarea no encontrada.</p>
        <button onClick={() => navigate("/")}>Volver</button>
      </div>
    );
  }

  function handleEliminar() {
    if (confirm("¿Eliminar esta tarea?")) {
      eliminarTarea(tarea.id);
      navigate("/");
    }
  }

  return (
    <div style={{ padding: "24px", maxWidth: "500px", margin: "0 auto" }}>
      <button onClick={() => navigate("/")} style={{ marginBottom: "16px", cursor: "pointer" }}>
        ← Volver
      </button>
      <h2>{tarea.titulo}</h2>
      <p>📚 Materia: {tarea.materia}</p>
      <p>📅 Fecha: {tarea.fecha}</p>
      <p>Estado: <strong>{tarea.completada ? "Completada" : "Pendiente"}</strong></p>

      <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
        <button
          onClick={() => { toggleTarea(tarea.id); navigate("/"); }}
          style={{
            padding: "10px 20px",
            backgroundColor: tarea.completada ? "#888" : "green",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {tarea.completada ? "Marcar pendiente" : "Marcar completa"}
        </button>
        <button
          onClick={handleEliminar}
          style={{
            padding: "10px 20px",
            backgroundColor: "#e94560",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default DetalleTarea;