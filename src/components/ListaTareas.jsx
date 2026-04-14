import { tareasIniciales } from "../data/tareas";
import TareaCard from "./TareaCard";

function ListaTareas() {
  return (
    <div>
      {tareasIniciales.map((tarea) => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default ListaTareas;