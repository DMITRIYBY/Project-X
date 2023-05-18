import Header from "../components/Header";
import Complex from "../components/Complex";
import { getComplexes } from "../components/API";
import React, {useState, useEffect} from "react";
import "../styles/AllComplexes.css";

function AllComplexes(){

    const [data, setData] = useState([]);

    useEffect(() => {
        
        getComplexes()
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    // console.log(data[0].name)
    // data.map((item) => {console.log(item.name);})
    
    return(
        <div className="all_complexes">
            <Header />
            <div className="complexes_container">
                {data.map((item) => {return <Complex item={item}/>})}
            </div>
        </div>
    )
}

export default AllComplexes;
