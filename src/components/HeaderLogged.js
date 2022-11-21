import React from "react";
import { Link } from "react-router-dom";

const NavbarLogged = () => {
    return (
        <div>
            <header className="w-100 position-Sticky">
                <nav className="navbar navbar-expand-lg bg-transparent w-100">
                    <div className="container-fluid">
                        <h1 className="logo">
                            <p className="navbar-brand fw-bold">W31rd W3bs1t3</p>
                            <p className="navbar-brand fw-bold dotcom">.com</p>
                        </h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item align-self-center">
                                    <Link to={"/Contents"} className="nav-link">Contenidos</Link>
                                </li>
                                <li className="nav-item align-self-center">
                                    <Link to={"/Series"} className="nav-link">Series</Link>
                                </li>
                                <li className="nav-item align-self-center">
                                    <Link to={"/Music"} className="nav-link " aria-current="page">Musica</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/Users"} className="btn btn-primary w-100 px-5 py-2">Gestionar Usuarios</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavbarLogged;