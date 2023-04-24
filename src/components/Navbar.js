import { Link } from "react-router-dom";
import { supabase } from "../supabase/client";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
            <div className="container">
                <a className="navbar-brand" to="/">Supabase React</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                   <li className="nav-item">
                        <a className="nav-link" onClick={ async () => await supabase.auth.signOut()}
                            >Logout</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar