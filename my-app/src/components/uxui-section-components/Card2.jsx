import React from 'react'
import '../uxui-section-components/card2-styles.scss'


export default function Card2() {
    return (
        <div className="card_2"
            data-aos="fadeInRight">

            <div className="arriba">
                <i className="fas fa-chevron-left"></i>
                <i className="fas fa-bars"></i>
            </div>

            <div className="titulo">
                <h3>Home Comfortable Style</h3>
            </div>

            <div className="estrellas">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
            </div>

            <div className="producto"></div>

            <div className="texto-prueba">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo in quidem fuga.</p>
            </div>

            <div className="color-options">
                <h5>Color</h5>
                <span/>
                <span/>
                <span/>
            </div>

            <div className="tamaño">
                <h5>Size</h5>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
            </div>

            <div className="abajo">
                <button>Add to Cart</button>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
    )
}
