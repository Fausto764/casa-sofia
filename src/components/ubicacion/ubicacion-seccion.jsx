import React from 'react';
import '../../css/ubicacion.css';
const UbicacionSeccion = ()=>{
    return(
        <section>
            <div className='presentacion-ubicacion-container'>
                    <div className="presentacion-ubicacion">
                        <div className='textos-container'>
                            <h3 className="presentacion-h3">Ubicacion  </h3>
                            <p className="presentacion-p">Conozca en que zona se encuentra...</p>
                        </div>
                    </div>
                <div className='ubicacion-seccion'> 
                    <h3>Cómo llegar...</h3>
                    <p>Llegando por la calle Vergara,
                         ingrese por Av. Don Arturo 9 cuadras, hasta la Inmobiliaria Donsini. <br/>
                         Una vez allí, doble a la izquierda dos cuadras.</p>
                         <span>Boulevard del Bosque entre Las Calas y los Malvones</span>
                </div>    
            </div>
            <div className="ubicacion-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.1998107164621!2d-57.56315827081059!3d-38.07505624300903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584e11797d67e65%3A0xef29527db2d0789c!2sSOFIA%20DEL%20BOSQUE!5e0!3m2!1ses!2sar!4v1672276188652!5m2!1ses!2sar"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="ubicacion"></iframe>
            </div>
        </section>
    )
}

export default UbicacionSeccion