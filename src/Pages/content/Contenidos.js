import React from "react";
import NavbarLogged from "../../components/HeaderLogged";
import { Link } from "react-router-dom";

const Contenidos = () => {
    return (
        <div>
            <NavbarLogged />
            <main className="container p-5 mb-3 mx-auto">
                <h2 className="fs-1 text-center">Aquí iría un saludo con el nombre</h2>
                <h2 className="fs-3 text-center">¡Disfruta de nuestros contenidos!</h2>
                <Link to={"/Music"} className="container d-flex text-decoration-none mx-auto mt-3">
                    <div className="col-4">
                        <img src="https://images.alphacoders.com/709/70991.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className="fs-4">Musica</h2>
                        <p>Aquí podrás descubrir a algunos artistas y sus canciones</p>
                    </div>
                </Link>
                <Link to={"/Series"} className="container d-flex text-decoration-none mx-auto mt-3">
                    <div className="col-4">
                        <img src="https://images7.alphacoders.com/676/676020.jpg" alt="" />
                    </div>
                    <div className="col-6">
                        <h2 className="fs-4 ">Series</h2>
                        <p className>Aquí podrás descubrir algunas series interesantes</p>
                    </div>
                </Link>
            </main>
        </div>
    );
}

export default Contenidos;