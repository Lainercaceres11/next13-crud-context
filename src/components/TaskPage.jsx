import { useTask } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

function TaskPage({ task }) {
  const router = useRouter()
  const {deleteTask} = useTask();
  return (
    <div>
      {task.map((tarea) => {
        return (
          <div
            key={tarea.id}
            onClick={() => router.push(`/edit/${tarea.id}`)}
            className="bg-gray-700 hover:bg-gray-600 flex justify-between cursor-pointer px-20 py-5 m-2"
          >
            <div className="flex justify-between ">
            <h2>{tarea.title}</h2>
            <button
            className="bg-red-700 hover:bg-red-600 px-3 py-1 inline-flex items-center ml-2"
              onClick={(e) => {
                e.stopPropagation();
                const accept = window.confirm("¿Deseas elimiar la tarea?");
                if (accept) {
                  deleteTask(tarea.id);
                  toast.success("Tarea eliminada con exito");
                }
              }}
            >
              Delete
            </button>
            </div>
            <p className="text-gray-300">{tarea.description}</p>
            <span className="text-gray-400 text-xs">{tarea.id}</span>
          </div>
        );
      })}
    </div>
  );
}

export default TaskPage;
