import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';    
import { faPhone, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../../css/footer.css'

const Footer = ()=>{
    const handleClickI = () => {
    // Cambiar la URL a la que deseas redirigir
    window.location.href = 'https://www.instagram.com/casasofiadelbosque/';
  };
    const handleClickW = () => {
    // Cambiar la URL a la que deseas redirigir
    window.location.href = 'https://w.app/ecXbDd';
  };
    const handleClickP = () => {
    // Cambiar la URL a la que deseas redirigir
    window.location.href = 'tel:542234489136';
  };
    return(
        <footer className="footer">
            <section className="footer-section">
                <article className="footer-article">
                    <FontAwesomeIcon icon={faLocationDot} className="footer__div-icon"/>
                    <p>Boulevard del Bosque y Las Calas s/n<br/>
                        Bosque Peralta Ramos<br/>
                            Mar del Plata<br/></p>
                </article>
                <div className="footer-container__div__columns">
                    <h4>Casa Sofia <br/>    del Bosque</h4>
                </div>
                <div className="footer-container__div__columns">
                    <div className="footer-container__div__columns__icons">
                        <FontAwesomeIcon icon={faPhone} onClick={handleClickP} className="columns-icons"/>
                        <FontAwesomeIcon icon={faInstagram} onClick={handleClickI} className="columns-icons"/>
                        <FontAwesomeIcon icon={faWhatsapp} onClick={handleClickW} className="columns-icons"/>
                    </div>
                </div>
            </section>
            <div className="footer-container__div">
                <div>
                    <p>Powered by: FAST DEVELOPMENT - MAR DEL PLATA</p>
                </div>
            </div>
        </footer>
    )
}
export  default Footer
