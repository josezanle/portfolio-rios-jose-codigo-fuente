import React from 'react';
import '../uxui-section-components/card3-styles.scss'


export default function Card3() {
    return (
        <div className="card-plant" data-aos="fade-right">
                <div className="top-plant">
                    <i className="fas fa-chevron-left" />
                    <i className="fas fa-star" />
                </div>
                <div className="mid-plant">
                    <h5 className="h5-plant">Diente de Leon.</h5>
                    <span className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <p>(1.4k Visitas)</p>
                    </span>
                    <span className="multi-plant">
                        <span className="uno-plant">
                            <h6 className="h6-plant">Tipo</h6>
                        <p className="p-plant">Silvestre</p>
                        </span>
                        <span className="dos-plant">
                        <h6 className="h6-plant">Clima</h6>
                        <p className="p-plant">Calido</p>
                        </span>
                        <span className="tres-plant">
                        <h6 className="h6-plant">Tamaño</h6>
                        <p className="p-plant">10Cm</p>
                        </span>
                    </span>
                <p className="p-description">Es una planta depurativa, indicada para purificar el organismo de elementos tóxicos. Puede actuar en el hígado, riñón y la vesícula biliar, y con su efecto diurético evita la aparición de piedras en el riñón. También es un tónico digestivo contra el estreñimiento y la resaca de alcohol.</p>
                </div>
                <div className="bottom-plant">
                    <button>
                        Ver
          </button>
                </div>

        </div>
    )
}
