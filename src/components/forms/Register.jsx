import React from "react";
import { Link } from "react-router-dom";
import Nav from "../layouts/Nav";
import style from './register.module.css';

const Register = () => {
    return(
        <>
        <Nav></Nav>
        <div className={style.containerLogin}>
            <h1 className={style.tittleRegister}>Register</h1>
            <input className={style.inputsLogin} type="text" placeholder="Usuario"/>
            <input className={style.inputsLogin} type="text" placeholder="Nombre"/>
            <input className={style.inputsLogin} type="text" placeholder="Telefono"/>
            <input className={style.inputsLogin} type="email" name="" id="" placeholder="Correo"/>
            <input className={style.inputsLogin} type="password" name="" id="" placeholder="Contraseña"/>
            <button className={style.btnRegister}>
                <Link className={style.regis} to='/'>Register</Link>
            </button>
        </div>
        </>
    )
}

export default Register;