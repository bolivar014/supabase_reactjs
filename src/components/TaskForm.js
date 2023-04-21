import React from "react";
import { useState } from "react";
import { supabase } from "../supabase/client";

function TaskForm() {
    const [taskName, setTaskName] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        // console.log(taskName);
        try
        {
            const user = await supabase.auth.getUser();
            const result = await supabase.from('tasks').insert({
                name: taskName,
                userid: user.data.user.id
            })

            console.log(result);
        } 
        catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="taskName" 
                    placeholder="Write a Task Name"
                    onChange={(e) => setTaskName(e.target.value)}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

// 
export default TaskForm