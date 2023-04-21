import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

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

    const getTasks = async () => {
        const result = await  supabase.from("tasks").select();
        console.log(result);
    }

    return <TaskContext.Provider value={{ tasks, getTasks }}>
        { children }
    </TaskContext.Provider>
}