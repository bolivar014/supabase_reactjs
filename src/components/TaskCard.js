import { useTasks } from "../context/TaskContext"

function TaskCard({ task }) {
    const { deleteTask } = useTasks()

    const handleDelete = () => {
        // alert('deleting')
        deleteTask(task.id)
    }

    const handleToggleDone = () => {
        alert('toggle')
    }

    return (
        <div>
            <h1>{ task.name }</h1>
            <p>{ JSON.stringify(task.done) }</p>
            <div>
                <button onClick={ () => handleDelete() }>
                    Delete
                </button>
                <button onClick={ () => handleToggleDone() }>
                    Done
                </button>
            </div>
        </div>
    )
}

export default TaskCard