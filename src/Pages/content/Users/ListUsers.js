import React from "react";
import NavbarLogged from "../../../components/HeaderLogged";
import ApiInvoke from "../../../utils/ApiInvoke";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { confirm } from "react-confirm-box";

const ListUsers = () => {

    const [usuario, setUsuarios] = useState([]);

    const loadUsers = async () => {
        const response = await ApiInvoke.invokeGET("/users?page=1");
        console.log(response);
        setUsuarios(response);
    }

    const deleteUser = async (e, id) => {
        e.preventDefault();

        const confirmacion = await confirm("¿Desea eliminar a este usuario?");
        if(confirmacion){
            const respones = await ApiInvoke.invokeDELETE("/users?id="+id);
            console.log(respones);
            loadUsers();
        }
    }

    useEffect(() => {
        loadUsers();
    }, [])
    return (
        <div>
            <NavbarLogged />
            <div className="container-xxl">
                <Link to={"/Users/Create"} className="btn btn-success w-100 px-5 py-2 my-3">Crear usuario</Link>
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
                                            <td className="action-buttons">
                                                <Link to={`/Users/edit/${item.id_usuario}`} className="btn btn-outline-primary mx-3">Editar</Link>
                                                <button
                                                    onClick={(e) => deleteUser(e, item.id_usuario)}
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