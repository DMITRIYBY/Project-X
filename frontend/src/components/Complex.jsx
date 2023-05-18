import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getComplexes } from "./API";
import  {useState, useEffect} from "react";
import '../styles/Complex.css';

function Complex(item) {

    const navigate = useNavigate();

    function handlerEventTo(){
        navigate(`/complexID?id=${item.item.id}`);
    }
    return(
        <>
            <div className="complex_card">
                <div className="card_info">
                    <h3 className="apartments_card_p">{item.item.name}</h3>
                    <p className="apartments_card_p">Adress: {item.item.address}</p>
                    <p className="learn_more" onClick={handlerEventTo}>learn more </p>
                </div>
            </div>
        </>
    )
}

export default Complex;