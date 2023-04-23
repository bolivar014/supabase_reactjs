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
            <form onSubmit={handleSubmit} className="card card-body">
                <input 
                    type="text" 
                    name="taskName" 
                    placeholder="Write a Task Name"
                    onChange={(e) => setTaskName(e.target.value)}
                    value={taskName}
                    className="form-control mb-2"
                />
               <div className="ms-auto">
                    <button className="btn btn-primary btn-sm">
                        { "Add" }
                    </button>
               </div>
            </form>
        </div>
    );
}

// 
export default TaskForm