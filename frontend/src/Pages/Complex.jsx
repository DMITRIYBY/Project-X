import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getComplexes } from "../components/API";
import React, {useState, useEffect} from "react";

function Complex() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/complex?id=${props.item.id}`);
    };

    return(
        <>
            <div className="card_body">
                <img src={props.item.photo_key} alt="" />
                <div className="card_info">
                    <h3 className="apartments_card_p">{props.item.name}</h3>
                    <p className="apartments_card_p">Adress: {props.item.adress}</p>
          
                    <p onClick={handleClick}>learn more </p>
                </div>
            </div>
        </>
    )
}

export default Complex;