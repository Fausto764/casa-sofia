import React, {useState} from "react";

import '../../css/slider.css';

import rand1 from '../../assets/rand-images/rand1.jpg'
import rand2 from '../../assets/rand-images/rand2.jpg'
import rand3 from '../../assets/rand-images/rand3.jpg'
import rand4 from '../../assets/rand-images/rand4.jpg'

import izquierda from '../../assets/FlechaIzquierda.png'
import derecha from '../../assets/FlechaDerecha.png'   



const images =  [
    {
        index: 0,   
        img: '/src/imagen-galeria (37).jpeg',
        text: "Bienvenidos a la Casa Sofia ! "
    },
    {
        index: 1,
        img: '/src/imagen-galeria (6).jpeg',
        text: "Un lugar para pasar tiempo con la familia"
    },
    {
        index: 2,
        img: '/src/imagen-galeria (8).jpeg',
        text: "Que posee toda la comodidad que necesita"
    },
    {
        index: 3,
        img: '/src/imagen-galeria (16).jpeg',
        text: "Un lugar que cubre todas sus necesidades"
    }
]




const Slider = ()=>{

   


    const [currentIndex, setCurrentIndex] = useState(0);



    const anterior = ()=>{
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
    const siguiente = ()=>{
        setCurrentIndex((currentIndex + 1) % images.length)
    }

        const [slide, setSlide] = useState(false);
        window.addEventListener('scroll', ()=>{
            let scroll = window.scrollY;
            if(scroll >= 50){
                setSlide(true)
            }
            else{
                setSlide(false)
            }
        })

    return(
        <div className="contenedor-principal">
                <div className="slider">
                    <div className="contenedor-imagenes">   
                        <a href="#" className="contenedor-img">
                            <img src={images[currentIndex].img} className="img"/>
                        </a>
                    </div>
                    <div className={slide ? 'contenedor-texto p-active' : 'contenedor-texto'}>
                        <p className='absolute-p'>{ slide ? images[0].text : images[currentIndex].text}</p>
                    </div>
                </div>
                <div> 
                    <img src={izquierda} className="botones boton-izquierdo " onClick={anterior}/>
                    <img src={derecha} className="botones boton-derecho" onClick={siguiente}/>
                </div>
        </div>
    )
}








export default Slider

