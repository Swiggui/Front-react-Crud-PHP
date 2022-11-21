import React from "react";
import Navbar from "../components/HeaderNoLogged";

const Contactanos = () => {
    return (
        <div>
            <Navbar />
            <div className="container py-4 my-4">
                <h2 className="text-center">¡Contáctanos!</h2>
                <p className="text-center">Estaremos encantados de leer tus opiniones</p>
                <form action method="post" className="pb-3">
                    <div className="input-group input-group">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Apellido</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group input-group">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Celular</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <p className="text-center">¡Dinos lo que nos quieras contar! :3</p>
                    <div className="form-floating">
                        <textarea className="form-control mb-3" placeholder="Leave a comment here" id="floatingTextarea" defaultValue={""} />
                        <label htmlFor="floatingTextarea">Comentarios</label>
                    </div>
                    <button type="submit" className="sub d-block mx-auto w-75 btn btn-outline-success">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Contactanos;