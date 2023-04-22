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
        <div>
            {
                tasks.map(task => (
                    <div key={task.id}>
                        <h1>{ task.name }</h1>
                        <p>{ JSON.stringify(task.done) }</p>
                    </div>
                ))
            }
        </div>
    )
}

// Exportamos
export default TaskList