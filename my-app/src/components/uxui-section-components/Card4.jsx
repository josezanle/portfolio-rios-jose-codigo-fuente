import React from 'react';
import '../uxui-section-components/card4-styles.scss'


export default function Card4() {
    return (
        <div className="perfil-card" data-aos="fade-left">
            <span className="perfil-pic"></span>
            <span className="datos">
                <h4>Jose Rios</h4>
                <p>Junior FrontEnd</p>

                <span className="mini-datos">
                    <span className="post">
                        <h5>Post</h5>
                        <p>236</p>
                    </span>
                    <span className="followers">
                        <h5>Followers</h5>
                        <p>2210</p>
                    </span>
                    <span className="likes">
                        <h5>Likes</h5>
                        <p>11,436</p>
                    </span>
                </span>
                <span className="botones">
                    <button>Chat</button>
                    <button>Follow</button>
                </span>
            </span>
        </div>
    )
}
