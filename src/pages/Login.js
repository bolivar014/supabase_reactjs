import { useEffect, useState } from "react"
import { supabase }  from "../supabase/client";
import { useNavigate } from "react-router-dom";
// Inicializamos función login
function Login() {
    // Inicializamos variables donde almacenare el email por medio de evento onchange
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

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
            // console.log('data:');
            // console.log(data);
            // console.log('errorDATA:');
            // console.log(error);
        }
        catch(error)
        {
            console.log('error:');
            console.error(error);
        }
    }

    useEffect(()=> {
        if(supabase.auth.getUser()){
            navigate("/");
        }
    }, [navigate]);

    // Retornamos componente login
    return (
        <div className="row pt-4">
            <div className="col-md-4 offset-md-4">
                <form onSubmit={ handleSubmit } className="card card-body">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="yourEmail@site.com"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control mb-2"
                    />
                    <button className="btn btn-primary">Send</button>
                </form>
            </div>
        </div>
    )
}


// Exportamos
export default Login