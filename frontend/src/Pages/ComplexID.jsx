import React from "react";
import Header from "../components/Header";
import { useSearchParams } from 'react-router-dom';
import ApartmentCard from "../components/apartmentCard";
import { getApartmentByComplexName } from "../components/API.js";
import {useState, useEffect} from 'react'
import Complex from "../components/Complex";
import '../styles/ComplexID.css'

function ComplexID(){

    const [searchParams] = useSearchParams();
    const ComplexID = searchParams.get('id');
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            console.log(ComplexID)
            getApartmentByComplexName(ComplexID)
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        },500)
    }, []);
    console.log(data)
    return(
        <div className="complex_with_id">
            <Header />
            <div className="complex_id_container">
                {data.map((item) => {
                   return <ApartmentCard item={item} />
                })}
            </div>
        </div>
    )
}

export default ComplexID;