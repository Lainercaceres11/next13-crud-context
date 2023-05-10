"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export const ContextTask = createContext();

export const useTask = () => {
  const context = useContext(ContextTask);
  if (!context) {
    throw new Error("No existe el provider");
  }
  return context;
};

export const ContextProvider = ({ children }) => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("tasks")
    const tasks = JSON.parse(item)
    setTask(tasks)
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  const addTask = (title, description) => {
    setTask([
      ...tasks,
      {
        title,
        description,
        id: uuid(),
      },
    ]);
  };

  const deleteTask = (id) => {
    setTask([...tasks.filter((task) => task.id !== id)]);
  };

  const updateTasks = (id, newData) => {
    setTask([
      ...tasks.map((task) => (task.id === id ? { ...task, ...newData } : task)),
    ]);
  };

  return (
    <ContextTask.Provider value={{ tasks, addTask, deleteTask, updateTasks }}>
      {children}
    </ContextTask.Provider>
  );
};
