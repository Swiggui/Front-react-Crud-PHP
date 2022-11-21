import React from "react";
import Navbar from "../components/HeaderNoLogged";

const Inicio = () => {
    return (
        <div>
            <Navbar/>
            <div id="hero">
                <div className="row g-0 h-100">
                    <div className="col-lg-6 d-flex">

                        <div className="content mx-auto align-self-center my-5">

                            <p className="lead px-4">Esta es una página diseñada para la clase de Desarrollo WEB de la CUN <br /><br />
                                <br></br>
                                Disfruten del contenido
                                <br></br>
                                <br></br>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus repellat in esse dolorum dolor. Fuga rem
                                ullam veritatis, vero inventore dolore dignissimos iste, sequi optio praesentium vel porro consequuntur
                                repellendus!
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Inicio;