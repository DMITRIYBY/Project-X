import Header from "../components/Header";
import ApartmentCard from "../components/apartmentCard";
import { getApartment } from "../components/API";
import React, {useState, useEffect} from "react";
import "../styles/Features.css"

function Features() {

    const [data, setData] = useState([]);

    useEffect(() => {
        
        getApartment()
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    console.log(data)
    
    return (
        <div className="features">
            <Header />
            <div className="cards_container">
                {data.map((item) => {
                   return <ApartmentCard item={item} />
                })}
            </div>
        </div>
    )
}

export default Features;