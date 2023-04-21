import { createContext, useContext, useState } from "react";

// Exportamos contexto global
export const TaskContext = createContext()

// Hoock compartido
export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context) throw new Error('useTasks must be used within a TaskContextProvider')
    return context; 
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);

    return <TaskContext.Provider value={{ tasks }}>
        { children }
    </TaskContext.Provider>
}