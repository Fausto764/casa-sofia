import '../../css/present.css';
import { Link } from "react-router-dom";
import image from '../../assets/frente-grande.webp'
import camasc from '../../assets/camas.jpeg'
import mesapp from '../../assets/mesa-ping-pong.jpeg'
import entrada from '../../assets/puerta.jpg'

const Present = ()=>{
    return(
        <section className="present__section">
            <p className="present__section__p">Es una casa moderna rodeada de un patio extenso muy bien cuidado.
            Posee las ultimas tecnologias en cuanto a electrodomesticos para garantizar tu comodidad. Se encuentra 
            a 10 cuadras de la playa y en una zona muy tranquila del bosque. La Casa Sofia esta para brindarte
            todo lo que necesitas para pasar de la mejor manera la estadia en nuestra ciudad junto a la familia.
            </p>
            <div className="present__section__container-cards">
                <div className="container-cards__div">
                    <img src={mesapp} className="cards__img"/>
                    <h4 className="container-cards__div__h4"><Link to="/galeria">Nuestros Servicios</Link></h4>
                </div>
                <div className="container-cards__div">
                <img src={camasc} className="cards__img"/>
                    <h4 className="container-cards__div__h4"><Link to="/galeria">Galeria </Link></h4>
                </div>
                <div className="container-cards__div">
                <img src={entrada} className="cards__img"/>
                    <h4 className="container-cards__div__h4"><Link to="/ubicacion">Ubicacion 📌</Link></h4>
                </div>
            </div>
            <div className="present__section__div">
                <div className="present__section__div-2">
                    <h4 className="present__section__div-2__h4">El Bosque Peralta Ramos</h4>
                    <p className="present__section__div-2__p">Arboles de diferentes especies, el canto de los pájaros, construcciones típicas,
                    lugares donde degustar exquisiteces, una feria artesanal y una plaza bien verde
                     con juegos son algunas de las atracciones del Bosque Peralta Ramos, una reserva
                      natural en plena ciudad de Mar del Plata, que constituye una alternativa de paseo
                            a la playa.</p>
                </div>
            </div>  
        </section>
    )
}
export default Present