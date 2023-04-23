import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
            <div class="container">
                <a class="navbar-brand" to="/">Supabase React</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                   <li class="nav-item">
                        <a class="nav-link" 
                            href="!#" onClick={ async () => await supabase.auth.signOut()}
                            >Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar