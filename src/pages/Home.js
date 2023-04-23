import React, { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { useTasks } from "../context/TaskContext";
import TaskList from "../components/TaskList";

function Home() {
    const [showTaskDone, setShowTaskDone] = useState(false);
    const navigate = useNavigate();
    // Obtenemos el contexto "Variable global en TaskContext"
    // const {tasks} = useTasks();
    // console.log(tasks)

    useEffect(() => {
        if(!supabase.auth.getUser()) {
            navigate("/login")
        }
    }, [navigate])
    
    return (
        <div className="row pt-4">
            Home

            <TaskForm />

            <header>
                <span>Task Pending</span>
                <button onClick={() => setShowTaskDone(!showTaskDone) }>
                    Show Tasks Done
                </button>
            </header>
            
            <TaskList done={ showTaskDone }/>
        </div>
    );
}

// 
export default Home