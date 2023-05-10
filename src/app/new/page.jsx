"use client";

import { useTask } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

function New({ params }) {
  const { tasks, addTask, updateTasks } = useTask();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      updateTasks(params.id, task);
      toast.success("Tarea modificada con exito");
    } else {
      addTask(task.title, task.description);
      toast.success("Tarea creada con exito");
    }
    router.push("/");
  };

  useEffect(() => {
    if (params.id) {
      console.log(params.id);
      const taskFind = tasks.find((tarea) => tarea.id === params.id);
      if (taskFind) {
        setTask({ title: taskFind.title, description: taskFind.description });
      }
    }
  }, [params.id, tasks]);
  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={handleSubmit} className="bg-gray-700 p-10">
        <h1 className="pt-10">Nueva tarea</h1>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full "
            type="text"
            name="title"
            value={task.title}
            placeholder="title task"
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            className="bg-gray-800 py-3 px-4 mb-2 block focus:outline-none w-full "
            name="description"
            value={task.description}
            placeholder="description task"
            required
            onChange={handleChange}
          />
        </div>
        <button
          disabled={true}
          className="bg-green-500 hover:bg-green-400 px-4 py-2 rounded-sm disabled: opacity-300 "
          type="submit"
        >
          {params.id ? "Edit task" : "Add Task"}
        </button>
      </form>
    </div>
  );
}

export default New;
