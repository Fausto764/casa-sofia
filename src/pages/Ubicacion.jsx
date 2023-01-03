import Header from '../components/inicio/Header.jsx'
import Footer from '../components/inicio/Footer.jsx'
import UbicacionSeccion from "../components/ubicacion/ubicacion-seccion.jsx";
import '../css/ubicacion.css';

const Ubicacion = ()=>{
    return(
        <div>
            <Header/>
            <UbicacionSeccion/>
            <Footer/>
        </div>
    )
}

export default Ubicacion