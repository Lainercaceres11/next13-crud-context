"use client";

import TaskPage from "@/components/TaskPage";
import { useTask } from "@/context/ContextProvider";

function HomePage() {
  const { tasks } = useTask();
  return (
   <div className="flex justify-center">
     <div className="w-7/12">
       <TaskPage task={tasks} />
    </div>
   </div>
  );
}

export default HomePage;
