import React from "react";
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";

function Home() {
    const navigate = useNavigate();
    // Obtenemos el contexto "Variable global en TaskContext"
    const obj = useTasks();
    console.log(obj)

    useEffect(() => {
        if(!supabase.auth.getUser()) {
            navigate("/login")
        }
    }, [navigate])
    
    return (
        <div>
            Home
            <button onClick={() => supabase.auth.signOut()}>Logout</button>

            <TaskForm />
        </div>
    );
}

// 
export default Home