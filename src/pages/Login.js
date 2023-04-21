import { useState } from "react"
import { supabase }  from "../supabase/client";
// Inicializamos función login
function Login() {
    // Inicializamos variables donde almacenare el email por medio de evento onchange
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Imprimimos...
        console.log('Email: ' + email);

        // ejecutamos petición asincrona
        try
        {
            const { data , error } = await supabase.auth.signInWithOtp({
                email: email,
                options: {
                  emailRedirectTo: 'http://localhost:3001/',
                },
            });
            console.log('data:');
            console.log(data);
            console.log('errorDATA:');
            console.log(error);
        }
        catch(error)
        {
            console.log('error:');
            console.error(error);
        }
    }

    // Retornamos componente login
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="yourEmail@site.com"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button>Send</button>
            </form>
        </div>
    )
}


// Exportamos
export default Login