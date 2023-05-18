import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getComplexes } from "../components/API";
import  {useState, useEffect} from "react";

function Complex() {

    const navigate = useNavigate();

    const [data, setData] = useState('')

    useEffect(() => {
        getComplexes()
              .then(response => {
                setData(response.data);
              })
              .catch(error => {
                console.log(error);
              });
    },[])

    const handleClick = () => {
        // navigate(`/complex?id=${props.item.id}`);
    };

    return(
        <>
            <div className="card_body">
                <div className="card_info">
                    <h3 className="apartments_card_p">{data.map((item) =>{return item.name;})}</h3>
                    <p className="apartments_card_p">Adress: {data.map((item) =>{return item.adress;})}</p>
                    <p onClick={handleClick}>learn more </p>
                </div>
            </div>
        </>
    )
}

export default Complex;