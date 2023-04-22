import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";

// Exportamos contexto global
export const TaskContext = createContext()

// Hoock compartido
export const useTasks = () => {
    const context = useContext(TaskContext)
    if(!context) 
        throw new Error('useTasks must be used within a TaskContextProvider')
    return context; 
}

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTask] = useState([]);

    const getTasks = async (done = false) => {
        const user = await supabase.auth.getUser();
        // Buscamos todas las task asociados a la sesión actual.
        const { error, data } = await supabase
            .from("tasks")
            .select()
            .eq("userid", user.data.user.id)
            .eq("done", done)
            .order("id", { ascending: true });

        if(error) throw error;

        setTask(data)
    }

    // Contexto para crear tareas
    const createTask = async (taskName) => {
        try
        {
            // Obtengo la información de la sesión en curso
            const user = await supabase.auth.getUser();

            // Inserto en la tabla 
            const { error, data } = await supabase.from('tasks').insert({
                name: taskName,
                userid: user.data.user.id
            })

            // si sucede un error, lo reportamos
            if(error) throw error;
            

            // Creamos nuevo arreglo con las task existentes + la nueva task
            getTasks()
        } 
        catch(error) {
            console.log(error);
        }
    }

    return <TaskContext.Provider value={{ tasks, getTasks, createTask }}>
        { children }
    </TaskContext.Provider>
}