import { tareasIniciales } from "./data/tareas";
import Header from "./components/Header";
import ListaTareas from "./components/ListaTareas";

function App() {
  const totalPendientes = tareasIniciales.filter((t) => !t.completada).length;

  return (
    <div>
      <Header totalPendientes={totalPendientes} />
      <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto" }}>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;