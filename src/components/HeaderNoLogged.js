import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ApiInvoke from "../utils/ApiInvoke";

const Navbar = () => {

    const navigator = useNavigate();

    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        contrasena: "",
        rol: "",
        correo: "",
        telefono: ""
    });

    const { nombre, apellido, usuario, contrasena, correo, telefono } = user;
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const createUser = async () => {
        const data = {
            name: user.nombre,
            lastname: user.apellido,
            user: user.usuario,
            password: user.contrasena,
            role: "user",
            email: user.correo,
            phone: user.telefono
        }
        console.log(data);
        const response = await ApiInvoke.invokePOST("/users", data);
        if (response.status === "ok") {
            alert("Usuario creado exitosamente");

            navigator("/Contents");
        }
    }

    const onSubmit = (e) => {
        createUser();
        e.preventDefault();
    }

    const [userLogin, setUserLogin] = useState({
        nickName: "",
        password: ""
    });
    const {nickName, password} = userLogin;

    const loginOnChange = (e) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        });
    }

    //useEffect(()=>{
    //    document.getElementById("nickName").focus();
    //}, []);

    const auth = async () =>{

        const data = {
            user: userLogin.nickName,
            password: userLogin.password
        }
        console.log(data);

        const response = await ApiInvoke.invokePOST("/auth", data);

        console.log(response);

        if(response.status === "ok"){
            navigator("/Contents");
            window.location.reload(true);
        } else {
            alert(response.status + "\n" + response.result.error_msg);
        }

        setUserLogin({
            nickName: "",
            password: ""
        })
    }

    const onSubmitLogin = (e) => {
        e.preventDefault();
        auth();
    }

    return (
        <div>
            <header className="w-100 position-sticky">
                <nav className="navbar navbar-expand-lg bg-transparent w-100">
                    <div className="container-fluid">
                        <h1 className="logo">
                            <Link to={"/"} className="navbar-brand fw-bold" href="./index.php">W31rd W3bs1t3</Link>
                            <Link to={"/"} className="navbar-brand fw-bold dotcom" href="./index.php">.com</Link>
                        </h1>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item align-self-center">
                                    <Link to={"/Lorem"} className="nav-link " aria-current="page" href="./lorem.php">Lorem</Link>
                                </li>
                                <li className="nav-item align-self-center">
                                    <Link to={"/ContactUs"} className="nav-link" href="./contactanos.php">Contáctanos</Link>
                                </li>
                                <li className="nav-item align-self-center">
                                    <Link to={"/AboutUs"} className="nav-link" href="./aboutUs.php">Sobre Nosotros</Link>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-primary w-100 px-5 py-2" data-bs-toggle="modal" data-bs-target="#login">Ingresar</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div id="login" className="modal fade" tabIndex={-1} aria-hidden="true" aria-labelledby="Login">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header d-flex">
                            <h1 className="logo w-100">
                                <Link className="navbar-brand fw-bold modal-title" href="./index.php">W31rd W3bs1t3</Link>
                                <Link className="navbar-brand fw-bold modal-title dotcom" href="./index.php">.com</Link>
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form name="loging" onSubmit={onSubmitLogin}>
                            <div className="modal-body px-5">

                                <h2 className="modal-title">Ingresar</h2>
                                <div className="form-floating">
                                    <input type="text"
                                        className="form-control"
                                        id="nickName"
                                        name="nickName"
                                        placeholder="usuario"
                                        value={nickName}
                                        onChange={loginOnChange}
                                        required
                                    />
                                    <label htmlFor="floatingInput">Usuario</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        name="password"
                                        placeholder="contrasena"
                                        value={password}
                                        onChange={loginOnChange}
                                        required
                                    />
                                    <label htmlFor="floatingPassword">Contraseña</label>
                                </div>

                            </div>
                            <div className="modal-footer">
                                <div className="col d-flex">
                                    <button type="submit" className="mx-auto w-75 btn btn-outline-primary">¡Ingresa, y
                                        admira un nuevo mundo!</button>
                                </div>
                                <div className="col d-flex">
                                    <button type="button" className="mx-auto w-75 btn btn-outline-success" data-bs-target="#signin" data-bs-toggle="modal">Que mal que no tengas cuenta... ¡Pero puedes crearte una!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="signin" className="modal fade" tabIndex={-1} aria-hidden="true" aria-labelledby="Sign in">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header d-flex">
                            <h1 className="logo w-100">
                                <a className="navbar-brand fw-bold modal-title" href="./index.php">W31rd W3bs1t3</a>
                                <a className="navbar-brand fw-bold modal-title dotcom" href="./index.php">.com</a>
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <form className="modal-body px-5" onSubmit={onSubmit}>
                            <h2 className="modal-title">Registrarse</h2>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    name="nombre"
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={onChange}
                                    required
                                />
                                <label htmlFor="floatingPassword">Nombres</label>
                            </div>
                            <div className="form-floating">
                                <input type="text"
                                    className="form-control"
                                    id="apellido"
                                    name="apellido"
                                    placeholder="Apellido"
                                    value={apellido}
                                    onChange={onChange}
                                    required
                                />
                                <label htmlFor="floatingPassword">Apellidos</label>
                            </div>
                            <div className="form-floating">
                                <input type="text"
                                    className="form-control"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="usuario"
                                    value={usuario}
                                    onChange={onChange}
                                    required
                                />
                                <label htmlFor="floatingInput">Usuario</label>
                            </div>
                            <div className="form-floating">
                                <input type="password"
                                    className="form-control"
                                    id="contrasena"
                                    name="contrasena"
                                    placeholder="contrasena"
                                    value={contrasena}
                                    onChange={onChange}
                                    required
                                />
                                <label htmlFor="floatingPassword">Contraseña</label>
                            </div>
                            <div className="form-floating">
                                <input type="text"
                                    className="form-control"
                                    id="correo"
                                    name="correo"
                                    placeholder="correo"
                                    value={correo}
                                    onChange={onChange}
                                    required
                                />
                                <label htmlFor="floatingInputGroup2">Correo</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="telefono"
                                    value={telefono}
                                    onChange={onChange}
                                />
                                <label htmlFor="floatingPassword">Número de celular</label>
                            </div>

                            <div className="modal-footer">
                                <div className="col d-flex">
                                    <button type="button" className="mx-auto w-75 btn btn-outline-primary" data-bs-target="#login" data-bs-toggle="modal">¿Así que ya tenías una cuenta? ¡Ingresa de una vez por todas!</button>
                                </div>
                                <div className="col d-flex">
                                    <button type="submit" className="mx-auto w-75 btn btn-outline-success" data-bs-dismiss="modal">¡Todo listo para continuar
                                        Capitán!</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;