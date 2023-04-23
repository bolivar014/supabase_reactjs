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
            <div className="col-md-4 offset-md-4">
                <TaskForm />

                <header className="d-flex justify-content-between my-3">
                    <span className="h5">
                        { showTaskDone ? "Task done" : "Tasks to do" }
                    </span>
                    <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => setShowTaskDone(!showTaskDone) }
                        >
                        { showTaskDone ? "Show Tasks to do" : "Show Tasks Done" }
                    </button>
                </header>

                <TaskList done={ showTaskDone }/>
            </div>
            
        </div>
    );
}

// 
export default Home