"use client"

import { useTask } from "@/context/ContextProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
    const router = useRouter();
    const {tasks} = useTask();
    return (
      <header className="flex justify-between items-center bg-gray-800 px-28 py-3">
        <Link href="/" className="font-bold tex-3xl text-white">
          Task App
          <span className="text-yellow-300 ml-5">{tasks.length} tasks </span>
        </Link>
        <div>
          <button
            className="bg-green-500 hover:bg-green-400 px-5 py-2 text-gray-50 font-bold rounded-sm inline-flex items-center"
            onClick={() => router.push("/new")}
          >
            Add Task
          </button>
        </div>
      </header>
    );
}

export default Navbar;