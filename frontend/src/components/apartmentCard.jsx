import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/apartmentCard.css'
import Apartment from "../Pages/Apartment";

function ApartmentCard(props){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/apartment?id=${props.item.id}`);
    };

    return(
        <>
            <div className="card_body">
                <img src={props.item.photo_key} alt="" />
                <div className="card_info">
                    <p className="apartments_card_p">Number: {props.item.number}</p>
                    <p className="apartments_card_p">Floor: {props.item.floor}</p>
                    <p className="apartments_card_p">Rooms: {props.item.rooms}</p>
                    <p className="apartments_card_p">Price: {props.item.price} $</p>
                    <p className="apartments_card_p">ID: {props.item.id} $</p>
                    <p onClick={handleClick}>learn more </p>
                </div>
            </div>
        </>
    )
}

export default ApartmentCard;