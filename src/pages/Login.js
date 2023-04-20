import { useState } from "react"
import { client }  from "../supabase/client";
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
            const result = await client.auth.signInWithOtp({
                email,
                options: {
                  emailRedirectTo: 'https://www.facebook.com',
                },
            });
            console.log('result:');
            console.log(result);
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