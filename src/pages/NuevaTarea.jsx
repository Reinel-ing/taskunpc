import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTareas } from "../context/TareasContext";

function NuevaTarea() {
  const { agregarTarea } = useTareas();
  const navigate = useNavigate();
  const [form, setForm] = useState({ titulo: "", materia: "", fecha: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.titulo || !form.materia || !form.fecha) {
      alert("Por favor completa todos los campos.");
      return;
    }
    agregarTarea(form);
    navigate("/");
  }

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  return (
    <div style={{ padding: "24px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <label>Título</label>
          <input
            name="titulo"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Ej: Parcial de Cálculo"
            style={inputStyle}
          />
        </div>
        <div>
          <label>Materia</label>
          <input
            name="materia"
            value={form.materia}
            onChange={handleChange}
            placeholder="Ej: Matemáticas"
            style={inputStyle}
          />
        </div>
        <div>
          <label>Fecha de entrega</label>
          <input
            type="date"
            name="fecha"
            value={form.fecha}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: "#1a1a2e",
            color: "white",
            padding: "12px",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "1rem",
          }}
        >
          Agregar Tarea
        </button>
      </form>
    </div>
  );
}

export default NuevaTarea;