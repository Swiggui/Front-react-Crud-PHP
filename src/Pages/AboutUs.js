import React from "react";
import Navbar from "../components/HeaderNoLogged";

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <div className="clearfix px-5 pt-5">
                <img src="https://images.hdqwalls.com/wallpapers/fox-snow-qi.jpg" className="col-md-4 float-md-end my-3 ms-md-3" alt="..." />
                <h2>Sobre Nosotros</h2>
                <p className="mt-5">
                    ¡Hola!
                    <br />
                    <br />
                    Mi nombre es Juan Camilo Figueredo Montaña, estudiante de ingeniería de sistemas en la CUN, soy amante de la informática, programación, videojuegos, comida, música indie, electrónica, metal y clásica, los paisajes y los zorritos :3
                </p>
                <p>
                    Aquí abajo podrán presenciar algunos de mis proyectos
                </p>
            </div>
            <aside className="border mb-3 pt-3">
                <h2 className="text-center fs-1">Algunos proyectos</h2>
                <div className="clearfix px-5 pt-3">
                    <img src={require('../Media/Images/aWeirdWebpage.png')} className="col-md-5 float-md-end my-3 ms-md-3" alt="..." />
                    <a className="text-decoration-none fs-3 d-block mb-4" href="https://aweirdwebpage.netlify.app/">A Weird Webpage</a>
                    <p>
                        Esta es una página sin ningún tipo de sentido, la cual habla sobre varios temas al azar cuya única finalidad fué practicar mejor los lenguajes HTML y CSS sin ningún tipo de framework
                    </p>
                    <p>
                        Se podría decir que esta página fué inspirada en esta... pero siendo una versión mejorada :3
                    </p>
                </div>
                <a role="button" className="btn btn-outline-light mx-auto d-block w-25 mb-3 align-items-center git" href="https://github.com/Swiggui"><img className="me-2" src={require('../Media/Icons/icons8-github-30.png')} alt="" />Enlace a GitHub</a>
            </aside>
        </div>
    );
}

export default AboutUs;