import React from "react";
import { Link } from "react-router-dom";
import style from './login.module.css';
import Nav from "../layouts/Nav";

const Login = () => {
    return(
        <>
        <Nav></Nav>
        <div className={style.containerLogin}>
            <h1 className={style.tittleLogin}>Login</h1>
            <input className={style.inputsLogin} type="text" placeholder="Usuario"/>
            <input className={style.inputsLogin} type="email" name="" id="" placeholder="Correo"/>
            <input className={style.inputsLogin} type="password" name="" id="" placeholder="Contraseña"/>
            <button className={style.btnLogin}>
                <Link className={style.logget} to='/home'>Login</Link>
            </button>
        </div>
        </>
    )
}
export default Login;