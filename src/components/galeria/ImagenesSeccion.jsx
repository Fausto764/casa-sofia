import '../../css/galeria.css';
import {useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight, faChevronLeft, faXmark} from '@fortawesome/free-solid-svg-icons'



    

const imagenesGaleria = 
    [   
        {
        img: '/src/imagen-galeria (1).jpeg',
        text: ""
        },

        {
        img: '/src/imagen-galeria (2).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (3).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (4).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (5).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (6).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (7).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (8).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (9).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (10).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (11).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (12).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (13).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (14).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (15).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (16).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (17).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (18).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (19).jpeg',
        text: ""
        },
        {
        img: '/src/imagen-galeria (20).jpeg',
        text: ""
        }
    ];

const ImagenesSeccion = ()=>{

        //imagen click full  screen
        let [imageClick, setImageClick] = useState(0);
        //full screen
        const [fullScreen, setfullScreen] = useState(false);
        // slider
        const [currentImage, setCurrentImage] = useState(0);
        const atras = ()=>{
            setImageClick((imageClick - 1 + imagenesGaleria.length) % imagenesGaleria.length);
            console.log("atras")
            console.log(imageClick);
        }
        const adelante = ()=>{
            setImageClick((imageClick + 1) % imagenesGaleria.length);
            console.log("adelante")
            console.log(imageClick);
        }
        const abrir = ()=>{
            setfullScreen(true);
        }
        const cerrar = ()=>{
            setfullScreen(false)
        }

    return(
        <div>
            <section className="galeria-container">
                <div className="grid-container">
                    <picture className="grid-item"><img src={'/src/imagen-galeria (1).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(0)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (2).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(1)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (3).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(2)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (4).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(3)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (5).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(4)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (6).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(5)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (7).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(6)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (8).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(7)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (9).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(8)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (10).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(9)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (11).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(10)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (12).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(11)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (13).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(12)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (14).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(13)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (15).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(14)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (16).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(15)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (17).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(16)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (18).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(17)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (19).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(18)}}/></picture>
                    <picture className="grid-item"><img src={'/src/imagen-galeria (20).jpeg'} loading= "lazy" onClick={()=>{abrir(); setImageClick(19)}}/></picture>

                </div>
            </section>
            <div className={fullScreen ? 'overlay' : 'overlay-off' }>
                <div className="slideshow">
                    <span className="btn-cerrar" ><FontAwesomeIcon icon={faXmark} className="btn-cerrar-font" onClick={cerrar}></FontAwesomeIcon></span>
                    <div className="btns atras">
                        <FontAwesomeIcon icon={faChevronLeft} onClick={atras}></FontAwesomeIcon>
                    </div>
                    <div className="btns adelante">
                    <FontAwesomeIcon icon={faChevronRight} onClick={adelante}></FontAwesomeIcon>
                    </div>
                    <img src={imagenesGaleria[imageClick].img} alt="" id="img_slideshow"/>
                </div>
            </div>
        </div>
        
    )
}

export default ImagenesSeccion;