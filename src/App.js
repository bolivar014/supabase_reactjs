// imports
import './App.css';
import { Routes, Route } from "react-router-dom";

// Importamos modulo Login
import Login from "./pages/Login";
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function App() {
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
