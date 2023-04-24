// imports
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";

// Importamos modulos vistas
import Login from "./pages/Login";
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

// Importamos client Supabase
import { supabase } from './supabase/client';

// Importamos contexto provider
import { TaskContextProvider } from './context/TaskContext';

// Importamos navbar
import Navbar from './components/Navbar';

function App() {
  const navigate = useNavigate();

  // 
  useEffect(() => {
    // Función de supabase que detecta cambios en la sesión
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("event, session");
      console.log(event, session);
      if(!session){ 
        navigate('/register')
      } else {
        navigate('/')
      }
    })
  }, [navigate])

  return (
    <div className="App">
      <TaskContextProvider>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
