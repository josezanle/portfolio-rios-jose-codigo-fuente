import React from 'react';
import '../assets/styles/uxui.scss';

import Card1 from './uxui-section-components/Card1';
import Card2 from './uxui-section-components/Card2';
import Card3 from './uxui-section-components/Card3';
import Card4 from './uxui-section-components/Card4';
import Card5 from './uxui-section-components/Card5';
import Card6 from './uxui-section-components/Card6';





const UxUi = () => {

    return (
        <div className="container">
            <div className="home-ux-ui">
                <p className="animate__animated animate__fadeInUp">Todo lo que siempre has querido está al otro lado del miedo. <br/> -George Addair</p>
            </div>

            <section className="section">
                    <h2>UX/UI</h2>
                <p>Tomemos por <strong>UX</strong>, la optimización
 y las <strong>teorias</strong> alrededor <br />de la forma en la cual los usuarios utilizan el producto,<br /> y como mejorarlo,
                    
                      Mientras que el <strong>UI</strong>, cumple la funcion <br /> de vestir las apariencias, es el mismísimo <strong>diseño de interfaces</strong>.<br />Aquí te muestro algunos componentes hechos por mi. 
                    </p>
            </section>


            <div className="bloque1">
                  <Card1 />
                  <Card2 />
            </div>

            <div className="bloque3">
                <Card5 />
                <Card6 />
            </div>

            <div className="bloque2">
                  <Card3 />
                  <Card4 />
            </div>

           


           

            <div className="final">
                <p>Muchas Gracias por Visitar mi Portfolio, Recuerda que puedes ver mis <strong>Redes Sociales,</strong> <br /> dirigiéndote hacia la sección <strong>HOME</strong>. <br />
                Finalmente, quiero agradecer en especial a Carlos Acosta Parra, Docente e Investigador en Universidad Nacional de Catamarca, y a todo el Staff del Programa PILIS de Catamarca, Sin ellos , este sitio no seria posible.
                </p>
            </div>

            

            
        
      
        </div>
    );
}

export default UxUi;
