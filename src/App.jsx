import { Link, Route, Routes } from "react-router-dom";
import { useTareas } from "./context/TareasContext";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";
import NuevaTarea from "./pages/NuevaTarea";
import DetalleTarea from "./pages/DetalleTarea";

function App() {
  const { tareas } = useTareas();
  const totalPendientes = tareas.filter((t) => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={totalPendientes} />

      <div style={{ padding: "16px 24px", maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <nav style={{ marginBottom: "20px", textAlign: "center" }}>
          <Link
            to="/"
            style={{ marginRight: "16px", color: "#1a1a2e", textDecoration: "none", fontWeight: "bold" }}
          >
            Mis Tareas
          </Link>
          <Link
            to="/nueva"
            style={{
              backgroundColor: "#e94560",
              color: "white",
              padding: "8px 16px",
              borderRadius: "20px",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            + Nueva Tarea
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/nueva" element={<NuevaTarea />} />
          <Route path="/tarea/:id" element={<DetalleTarea />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;