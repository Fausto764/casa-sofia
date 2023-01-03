import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './pages/Inicio.jsx'
import Galeria from './pages/Galeria.jsx'
import Ubicacion from './pages/Ubicacion.jsx';
import Contacto from './pages/Contacto.jsx';
import './css/app.css';


const App = ()=> {
  return(
  <BrowserRouter>
  {/* HEADER */}
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/galeria' element={<Galeria/>}/>
          <Route path='/ubicacion' element={<Ubicacion/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
  {/* FOOTER */}
  </BrowserRouter>
  )
}

export default App
