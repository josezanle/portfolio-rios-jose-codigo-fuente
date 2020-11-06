import React from 'react';
import '../assets/styles/skills.scss';
import ReactPlayer from 'react-player';





export default function About() {
    return (
        <div className="container">
        <div className="home-skills">
        
            <h3 className="animate__animated animate__fadeInDown">Minimalismo</h3>
            <h1 className="animate__animated animate__fadeInDown">aveces es </h1>
            <h4 className="animate__animated animate__fadeInUp">Sutileza</h4>
           
        </div>

        <section className="section">
            <h2>Skills</h2>
                <p> En esta sección, quiero mostrarte, algunas <br />tecnologías que  utilizo,  eventualmente <br />incluiré otras, pero estas son algunas: 
                    </p>
        </section>

        
             
             <div className="cards">
                <span className="card-react"
                    data-aos="fade-right">
                    <h2>01</h2>
                    <h5>React js</h5>
                    <p>Framework de JavaScript para creación de Interfaces de Usuario.</p>
                    <span className="image"><i className="fab fa-react"></i></span>
                </span>
                <span className="card-javascript" 
                        data-aos="fade-up-right">
                    <h2>02</h2>
                    <h5>Javascript</h5>
                    <p> Del lado FrontEnd, se utiliza para interacción y animaciones,<br /> especialmente.</p>
                    <span className="image"><i className="fab fa-js"></i></span>               
                </span>

                    <span className="card-css3" 
                        data-aos="fade-down-right">
                    <h2>03</h2>
                    <h5>Css3</h5>
                    <p>Tecnologia que nos permite darle diseño y estilo a nuestros productos.</p>
                    <span className="image"><i className="fab fa-css3-alt"></i></span>               
                </span>

                <span className="card-html5" 
                        data-aos="fade-left"
                        data-aos-delay= "50">
                    <h2>04</h2>
                    <h5>Html5</h5>
                    <p>Herramienta que nos permite estructurar el documento a través de etiquetas que el navegador lee.</p>
                    <span className="image"><i className="fab fa-html5"></i></span>               
                </span>


                <span className="card-sass" 
                    data-aos="zoom-in-right"
                    data-aos-delay= "50">
                    <h2>05</h2>
                    <h5>Sass</h5>
                    <p>Es un Pre-Procesador de Css, permite reducir y trabajar el código de manera limpia.</p>
                    <span className="image"><i className="fab fa-sass"></i></span>               
                </span>

                <span className="card-git" 
                    data-aos="fade-down-right">
                    <h2>06</h2>
                    <h5>Git</h5>
                    <p>Es un controlador de Versiones, permite integrar el equipo, de manera remota o local.</p>
                    <span className="image"><i className="fab fa-git-alt"></i></span>               
                </span>


                <span className="card-npm" 
                        data-aos="zoom-in-left">
                    <h2>07</h2>
                    <h5>Npm</h5>
                    <p>Es un gestor de paquetes de datos Mundial, del cual se descargan todos los archivos para la web.</p>
                    <span className="image"><i className="fab fa-npm"></i></span>               
                </span>

            </div>

            
       
        <div className="video">
            
            <h3>Making of:</h3>
            <p>Mi Portfolio</p>

            <ReactPlayer 
                    url="https://www.youtube.com/watch?v=JkzJZWsDSE0"
                        controls
                        className="ReactPlayer"
                        width="80vw"
            />
        </div>

        <div className="espectativas">
         
                <h2>Futuro Cercano</h2>

                <p>Me gustaría incursionar en profundidad en la Tecnología, asumiendo la necesidad de certificar mis habilidades en alguna Institución, me veo aprendiendo continuamente,<br />  nuevos lenguajes de Programación , Idiomas, Conociendo Personas,<br /> Disfrutando una vida de Lecciones.</p>           
        </div>
        </div>
    )
}
