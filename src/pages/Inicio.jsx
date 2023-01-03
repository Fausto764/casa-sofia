import Header from '../components/inicio/Header.jsx';
import Slider from '../components/inicio/Slider.jsx';
import Present from '../components/inicio/Present.jsx';
import Footer from '../components/inicio/Footer.jsx';

const Inicio = ()=>{
    return(
        <>
            <Header/>
            <main className='main'>
                <Slider/>
                <Present/>
            </main>
            <Footer/>
        </>
    )
}

export default Inicio