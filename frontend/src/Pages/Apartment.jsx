import React from "react";
import Header from "../components/Header.jsx";
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getCurrentApartment } from "../components/API.js";
import "../styles/Apartment.css"

function Apartment(){

    const [searchParams] = useSearchParams();
    const apartmentId = searchParams.get('id');

    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            getCurrentApartment(apartmentId)
              .then(response => {
                setData(response.data);
              })
              .catch(error => {
                console.log(error);
              });
          }, 1000);
    }, []);    
    data.map((item) =>{console.log(item.id);});
    return(
        <div className="apartment_page">
            <Header className="header_apart"/>
            <div className="apartment_container">
                <img src={data.map((item) =>{return item.photo_key;})} alt="" />
                    <div className="info_container">
                        <h3>Apartment {data.map((item) =>{return item.id;})}</h3>
                        <p>Number: {data.map((item) =>{return item.number;})}</p>
                        <p>Floor:  {data.map((item) =>{return item.floor;})}</p>
                        <p>Rooms: {data.map((item) =>{return item.rooms;})}</p>
                        <p>Price: {data.map((item) =>{return item.price;})} $</p>
                    <button>Order</button>
                </div>
            </div>
            <div className="description">
                <h3>Описание</h3>
                <p>{data.map((item) =>{return item.description;})}</p>
            </div>
        </div>
    );
}

export default Apartment;