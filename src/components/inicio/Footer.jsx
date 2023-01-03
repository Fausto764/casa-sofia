import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';    
import { faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import '../../css/footer.css'

const Footer = ()=>{
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
                        <FontAwesomeIcon icon={faFacebook} className="columns-icons"/>
                        <FontAwesomeIcon icon={faInstagram} className="columns-icons"/>
                        <FontAwesomeIcon icon={faWhatsapp} className="columns-icons"/>
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