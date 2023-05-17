import React from "react";
import '../styles/addComplex.css';

function AddComplex(){
    return (
        <div className="add__complex">
            <h2>Add Complex</h2>
            <input type="text" placeholder="name"/>
            <input type="text" placeholder="adress"/>
            <input type="text" placeholder="realtor id"/>
            <button>Add!</button>
        </div>
    )
}

export default AddComplex;