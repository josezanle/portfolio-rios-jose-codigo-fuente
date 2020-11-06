import React from 'react'
import '../uxui-section-components/card1-styles.scss'

export default function Card1() {
    return (
        <div className="a" data-aos="fadeInLeft">
            <span className="left">
                <i className="fas fa-chevron-left" />
            </span>
            <span className="lado-b">
                <h4>10 Datos curiosos que no sabias del Cafe.</h4>
                <p>maxime expedita totam alias quisquam molestiae! Quam, explicabo praesentium dolor consectetur voluptas a ex architecto voluptate unde nisi. <br />
                             Read more...
                          </p>

            </span>
            <span className="remitente">
                <div className="mini-foto"></div>
                <div className="nombre-fecha">
                    <h5>Rios Jose</h5>
                    <h5>Octubre 22 , 2020.</h5>
                </div>

                <div className="share-it">
                    <i className="fas fa-share"></i>
                </div>

            </span>
        </div>
    )
}
