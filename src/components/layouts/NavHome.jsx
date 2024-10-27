import React from "react";
import { Link } from "react-router-dom";
import style from './navHome.module.css';

const NavHome = () => {
    return (
        <div className={style.containerNav}>
            <button className={style.btnLogout}>
                <Link to="/" className={style.irLogin}>Logout</Link>
            </button>
        </div>
    )
}
export default NavHome;