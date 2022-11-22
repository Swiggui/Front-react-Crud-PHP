import React from "react";
import NavbarLogged from "../../../components/HeaderLogged";
import { useEffect, useState } from "react";
import ApiInvoke from "../../../utils/ApiInvoke";

const CreateUsers = () => {
    const [user, setUser] = useState({
        nombre: "",
        apellido: "",
        usuario: "",
        contrasena: "",
        rol: "",
        correo: "",
        telefono: ""
    });

    const { nombre,  apellido, usuario, contrasena, rol, correo, telefono } = user;
    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const createUser = async() => {
        const data = {
            name: user.nombre,
            lastname: user.apellido,
            user: user.usuario,
            password: user.contrasena,
            role: user.rol,
            email: user.correo,
            phone: user.telefono
        }
        console.log(data);
        const response = await ApiInvoke.invokePOST("/users", data);
        if(response.status === "ok"){
            alert("Usuario creado exitosamente");
        }
    }

    const onSubmit = (e) => {
        createUser();
        e.preventDefault();
    }

    return (
        <div>
            <NavbarLogged />
            <div className="my-4 container-xl">
                <h1 className="text-center mb-3">Crear Usuario</h1>
                <div className="container mx-auto">
                    <form className="row g-3" onSubmit={onSubmit}>
                        <div className="row mb-3">
                            <label htmlFor="Nombre" className="col-sm-2 col-form-label">Nombre</label>
                            <div className="col-sm-10">
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
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="Apellido" className="col-sm-2 col-form-label">Apellido</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="apellido"
                                    name="apellido"
                                    placeholder="Apellido"
                                    value={apellido}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="rol" className="col-sm-2 col-form-label">Rol</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="rol"
                                    name="rol"
                                    placeholder="rol"
                                    value={rol}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="usuario" className="col-sm-2 col-form-label">Usuario</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="usuario"
                                    name="usuario"
                                    placeholder="usuario"
                                    value={usuario}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="contrasena" className="col-sm-2 col-form-label">Contraseña</label>
                            <div className="col-sm-10">
                                <input type="password"
                                    className="form-control"
                                    id="contrasena"
                                    name="contrasena"
                                    placeholder="contrasena"
                                    value={contrasena}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="correo" className="col-sm-2 col-form-label">Correo</label>
                            <div className="col-sm-10">
                                <input type="text"
                                    className="form-control"
                                    id="correo"
                                    name="correo"
                                    placeholder="correo"
                                    value={correo}
                                    onChange={onChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="telefono" className="col-sm-2 col-form-label">Telefono</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="telefono"
                                    name="telefono"
                                    placeholder="telefono"
                                    value={telefono}
                                    onChange={onChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-success d-block mx-auto w-100 p-3">Editar Usuario</button>
                    </form>
                </div>
            </div>

        </div>

    );

}

export default CreateUsers;