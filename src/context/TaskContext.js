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

    const getTasks = async (done = false) => {
        const user = await supabase.auth.getUser();
        // Buscamos todas las task asociados a la sesión actual.
        const { error, data } = await supabase.from("tasks")
            .select()
            .eq("userid", user.data.user.id)
            .eq("done", done)
            .order("id", { ascending: true });

        if(error) throw error;

        setTask(data)

        console.log("data - GetTask");
        console.log(data);
    }

    return <TaskContext.Provider value={{ tasks, getTasks }}>
        { children }
    </TaskContext.Provider>
}