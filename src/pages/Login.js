import { useState } from "react"

// Inicializamos función login
function Login() {
    // Inicializamos variables donde almacenare el email por medio de evento onchange
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Imprimimos...
        console.log('Email: ' + email);
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