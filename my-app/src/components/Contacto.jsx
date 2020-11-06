import React from 'react';
import '../assets/styles/contacto.scss'


export const Contacto = () => {
    return (
        <div className="contacto">
            <div className="box"
                data-aos="zoom-in-down"
            >
                <h3>Contacto</h3>
                <span className="icon">
                    <a
                        href="https://www.linkedin.com/in/jose-rios-66197a1a5/"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><i className="fab fa-linkedin"></i>
                    </a>
                    <div className="description">
                        <h4>LinkedIn</h4>
                        <p>Este es mi Contacto Profesional.</p>
                    </div>
                </span>

                <br/>

                <span className="icon">
                    <a
                        href="https://www.instagram.com/zanle_group/"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><i className="fab fa-instagram-square"></i>

                    </a>
                    <div className="description">
                        <h4>Instagram</h4>
                        <p>Aquí puedes encontrar mas Diseños</p>
                    </div>
                </span>

                <br/>

                <span className="icon">
                    <a
                        href="https://www.facebook.com/Josezanle"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><i className="fab fa-facebook-square"></i>

                    </a>
                    <div className="description">
                        <h4>Facebook</h4>
                        <p>De repente, quieres preguntarme algo extra.</p>
                    </div>
                </span>

                <br/>

                <span className="icon">
                    <a
                        href="https://github.com/josezanle"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><i className="fab fa-github-square"></i>

                    </a>
                    <div className="description">
                        <h4>Github</h4>
                        <p>Finalmente, aquí están mis repositorios/códigos.</p>
                    </div>
                </span>
                
            </div>
            
        </div>
    )
}
