import React from 'react';
import '../assets/styles/home.scss'
import { Contacto } from './Contacto';


const Home = () => {
    return (
        <div className="container">
      
        <div className="home-home">
            <div className="text-home">
                    <h1 className="animate__animated animate__fadeInDown">Jose <br /> Rios.</h1>
                    <hr className="animate__animated animate__fadeInDown"/>
                    <h4 className="animate__animated animate__fadeInDown">Frontend Developer</h4>
                    <p className="animate__animated animate__fadeInDown">-Web & Apps</p>

                    <span>
                        <i className="fas fa-star animate__animated animate__fadeInDown"></i>
                        <i className="fas fa-star animate__animated animate__fadeInDown"></i>
                        <i className="fas fa-star animate__animated animate__fadeInDown"></i>
                        <i className="fas fa-star animate__animated animate__fadeInDown"></i>
                        <i className="fas fa-star animate__animated animate__fadeInDown"></i>                  
                    </span>
                    <h4 className="animate__animated animate__fadeInDown"> Bs.As - Argentina.</h4>

            </div>
                <div className="text-right animate__animated animate__fadeInRight">
                    
                    <h2>Hola!</h2>
                    <p>Bienvenido/a, este es mi Portfolio, encuentra en el, mi enfoque, algunos Datos Personales, inclusive un video sobre este Documento Digital.
                    </p>
                    
                    

            </div>
               
            
        </div>
        
        <div className="me"> 
            <span className="indice">
                <h2>Indice</h2>
            </span>
            <div className="span1" data-aos="zoom-in-down">
                <span className="number">
                    <h2>1</h2>
                </span>
                <span className="text">
                    <h3>Home</h3>
                    <p>- Quien soy</p>
                    <p>- Y que es FrontEnd?</p>
                    <p>- Contacto</p>
                </span>
            </div>



            <div className="span2" data-aos="zoom-in-down">
                <span className="number">
                    <h2>2</h2>
                </span>
                <span className="text">
                    <h3>Skills</h3>
                    <p>- Mis Habilidades</p>
                    <p>- Making-of: My Portfolio</p>
                    <p>- Futuro Cercano
                    </p>
                </span>
            </div>

            <div className="span3" data-aos="zoom-in-down">
                <span className="number">
                    <h2>3</h2>
                </span>
                <span className="text">
                    <h3>UX/UI</h3>
                    <p>- Que es UX/UI?</p>
                        <p>- Algunos Diseños pasados a código</p>
                    <p>- Saludo</p>

                </span>
            </div>
        </div>

        <section className="section">
            <h2>Home</h2>
        </section>

        
        <div className="quien-soy">
            <span className="image-abstracte" data-aos="fade-left"
     data-aos-anchor-placement="center-bottom">
            </span>

            <span className="my-description" data-aos="fade-right">
                
                <p  data-aos="fade-right">Hola, mi nombre es Jose Ariel Rios, soy de Argentina, Provincia de Buenos Aires, me gusta ser Creativo, y soy bastante Inquieto.
                    <br/>
                    <br/>
                    Me gusta el Desarrollo FrontEnd, porque me permite distinguir la belleza armónica de las cosas, ser superficial, para algunas personas, es insultante, pero en lo que a mi respecta, habla de una persona que se recrea en el buen gusto.
     
                     <br/>
                     <br/>
                    No se trata de decirlo solamente, tengo una autocrítica muy grande, y pienso que si voy a soltar algo al mundo, debe por lo menos agradar.
                </p>
            </span>
        </div>



        <div className="frontend-estilo-vida">
            <h3>Y Que es FrontEnd ?</h3>
                <p data-aos="fade-left">Es, el encargado de traducir las definiciones de diseño y estilo visual realizadas en etapas previas, a códigos HTML y CSS semántico. Es una de las piezas fundamentales en un proyecto digital.</p>
                <p  data-aos="fade-right">
                    Se debe tener en cuenta la, diseño, estructura de páginas Web y aplicaciones para procurar que el usuario pueda tener una experiencia optimizada.</p>
                <p  data-aos="fade-left">
                    Varios desafíos son mencionados en este campo, como optimizar Webs, Adaptando a distintos dispositivos.
                    <br/> <br/>
            </p>
                

        </div>
        <Contacto />
        
        </div>
    );
}

export default Home;
