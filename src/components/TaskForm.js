import React from "react";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
    const [taskName, setTaskName] = useState("");
    const { createTask } = useTasks();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(taskName);
        
        // Evento para la creación de Task
        createTask(taskName);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="taskName" 
                    placeholder="Write a Task Name"
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

// 
export default TaskForm