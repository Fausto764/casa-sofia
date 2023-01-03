import '../../css/header.css';
import {useState} from "react";
import { Link } from "react-router-dom";
import icon from '../../assets/arbol.webp'
    
    const Header = ()=>{
        const [header, setHeader] = useState(false);
        window.addEventListener('scroll', ()=>{
            let scroll = window.scrollY;
            if(scroll >= 50){
                setHeader(true)
            }
            else{
                setHeader(false)
            }
        })
        const [responsive, setResponsive] = useState(false);
        function mover(){
            if(responsive){
                setResponsive(false)
            }else{
                setResponsive(true)
            }
        }
        return(
            <header className={header ? 'header h-active' : 'header'}>
                <div className="header-childs header__div">
                    <h1 className="header__div__h1"><Link to="/" className="header__div__h1__a">Casa Sofia</Link></h1>
                    <img src={icon} className="header__div__img"/>
                </div>
                <nav className={responsive ? 'header-childs header__nav toggle' : 'header-chil header__nav '}>
                    <ul className="header__nav__ul">
                        <li className="header__nav__ul__li"> <Link to="/galeria" className="header__nav__ul__li__a">Galeria</Link></li>
                        <li className="header__nav__ul__li"><Link to="/ubicacion" className="header__nav__ul__li__a">Ubicacion</Link></li>
                        <li className="header__nav__ul__li"><Link to="/contacto" className="header__nav__ul__li__a">Contacto</Link></li>
                    </ul> 
                </nav>  
                <div className="burger" onClick={mover}>
                    <div className="lines line1"></div>
                    <div className="lines line2"></div>
                    <div className="lines line3"></div> 
                </div>
            </header>
        )
}

export default Header;