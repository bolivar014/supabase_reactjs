import React, { useEffect } from "react";
import { useTasks } from '../context/TaskContext';

// Función TaskList
function TaskList() {
    const { tasks, getTasks } = useTasks();
    console.log(tasks)

    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div>TaskList</div>
    )
}

// Exportamos
export default TaskList