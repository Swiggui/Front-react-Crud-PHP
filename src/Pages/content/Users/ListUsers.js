import React from "react";
import NavbarLogged from "../../../components/HeaderLogged";
import ApiInvoke from "../../../utils/ApiInvoke";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ListUsers = () => {

    const [usuario, setUsuarios] = useState([]);

    const loadUsers = async () => {
        const response = await ApiInvoke.invokeGET("/users?page=1");
        console.log(response);
        setUsuarios(response);
    }

    const deleteUser = async (e, id) => {
        e.preventDefault();
    }

    useEffect(() => {
        loadUsers();
    }, [])
    return (
        <div>
            <NavbarLogged />
            <div className="container-xxl">
                <h1 className="text-center">Lista de Usuarios</h1>
                <div className="container mx-auto">
                    <table className="table table-info table-striped">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Rol</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Celular</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                usuario.map(
                                    item =>
                                        <tr className="table-info">
                                            <td>{item.id_usuario}</td>
                                            <td>{item.usuario}</td>
                                            <td>{item.rol}</td>
                                            <td>{item.nombre}</td>
                                            <td>{item.apellido}</td>
                                            <td>{item.correo}</td>
                                            <td>{item.nro_cel}</td>
                                            <td>
                                                <Link to={`/editar/${item._id}`} className="btn btn-outline-primary mx-3">Editar</Link>
                                                <button
                                                    onClick={(e) => deleteUser(e, item._id)}
                                                    className="btn btn-outline-danger mx-3 "
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#exampleModal">Eliminar</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ListUsers;