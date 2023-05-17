import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(){

    return(
            <div className="header" >
                <Link path={""} className='ahead' to='/main' defaultChecked>Home</Link>
                <Link className="ahead" to='/features'>Features</Link>
                <button className="ahead" >About US</button>
                <button className="ahead" >Agents</button>
                <button className="ahead" >Contact US</button>
            </div>
    )
}

export default Header;