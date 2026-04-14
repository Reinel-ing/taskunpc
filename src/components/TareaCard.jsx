function TareaCard({ titulo, materia, fecha, completada }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "12px",
      opacity: completada ? 0.6 : 1,
      backgroundColor: completada ? "#f0f0f0" : "#fff",
    }}>
      <h3 style={{ textDecoration: completada ? "line-through" : "none" }}>
        {titulo}
      </h3>
      <p>📚 Materia: {materia}</p>
      <p>📅 Fecha: {fecha}</p>
      <p>
        Estado:{" "}
        <strong style={{ color: completada ? "green" : "orange" }}>
          {completada ? "Completada" : "Pendiente"}
        </strong>
      </p>
    </div>
  );
}

export default TareaCard;