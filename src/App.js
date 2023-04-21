// imports
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

// Importamos modulo Login
import Login from "./pages/Login";
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { supabase } from './supabase/client';

function App() {
  const navigate = useNavigate();

  // 
  useEffect(() => {
    // Función de supabase que detecta cambios en la sesión
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("event, session");
      console.log(event, session);
      if(!session){ 
        navigate('/login')
      } else {
        navigate('/')
      }
    })
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
