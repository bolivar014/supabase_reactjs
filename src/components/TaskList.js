import React, { useEffect } from "react";
import { useTasks } from '../context/TaskContext';
import TaskCard from "./TaskCard";

// Función TaskList
function TaskList() {
    const { tasks, getTasks, loading } = useTasks();

    useEffect(() => {
        getTasks(true);
    }, [])

    function renderTasks() {
        if(loading) {
            return <p>Loading...</p>
        } else if(tasks.length == 0) {
            return <p>No task found...</p>
        } else {
            return (
                <div>
                    {
                        tasks.map(task => (
                            <TaskCard task={task} key={task.id}/>
                        ))
                    }
                </div>
            );
        }
    }
    
    return <div>
        { renderTasks() }
    </div>
}

// Exportamos
export default TaskList