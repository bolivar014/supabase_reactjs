import { createContext, useContext } from "react";

// Exportamos contexto global
export const TaskContext = createContext()

// Hoock compartido
export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context) throw new Error('useTasks must be used within a TaskContextProvider')
    return context; 
}

export const TaskContextProvider = ({ children }) => {
    return <TaskContext.Provider value={{name: "Hello world"}}>
        { children }
    </TaskContext.Provider>
}