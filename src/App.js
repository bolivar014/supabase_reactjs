// imports
import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

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
import RegisterPW from './pages/RegisterPw';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // 
  useEffect(() => {
    // Función de supabase que detecta cambios en la sesión
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(location.pathname);
      console.log("event, session");
      console.log(event, session);
      // if(!session){ 
      //   navigate('/register')
      // } else {
      //   navigate('/')
      // }

      if(!session){
        // control de rutas sin sesión
        if(location.pathname == "/register") {
          navigate('/register')
        } else if(location.pathname == "/registerPw") {
          navigate('/registerPw')
        } else if(location.pathname == "/login") {
          navigate('/login')
        } else {
          navigate('/registerPw')
        }
      } else {
        // Rutas con sesión
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
            <Route path='/registerPw' element={<RegisterPW />}/>
            <Route path='/*' element={<NotFound />}/>
          </Routes>
        </div>
      </TaskContextProvider>
    </div>
  );
}

export default App;
