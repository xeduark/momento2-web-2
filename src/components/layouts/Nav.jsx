import React from "react";
import { Link } from "react-router-dom";
import style from './nav.module.css';

const Nav = () => {
    return(
        <div className={style.containerNav}>
            <button className={style.btnLogget}>
                <Link className={style.irLogin} to='/'>Login</Link>
            </button>
            <button className={style.btnRegister}>
                <Link className={style.irRegister} to='/register'>Register</Link>
            </button>
        </div>
    )
}

export default Nav;