import Header from '../components/inicio/Header';
import Presentacion from '../components/galeria/Presentacion.jsx';
import ImagenesSeccion from '../components/galeria/ImagenesSeccion';
import Footer from '../components/inicio/Footer';

const Galeria = ()=>{
    return(
        <div>
            <Header/>
            <Presentacion/>
            <ImagenesSeccion/>
            <Footer/>
        </div>
    )
}
export default Galeria