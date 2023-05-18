import React from "react";
import { useState } from "react";
import { add_complex } from "./API";
import '../styles/addComplex.css';

function AddComplex(){

    const [name, setName] = useState('')
    const [adress, setAdress] = useState('')
    const [realtor_id, setRealtorId] = useState('')

    function handleSetName(event){
        setName(event.target.value)
    }
    function handleSetAdress(event){
        setAdress(event.target.value)
    }
    function handleSetRealtorId(event){
        setRealtorId(event.target.value)
    }

    function add_new_complex(){
        add_complex(name, adress, realtor_id)
    }

    return (
        <div className="add__complex">
            <h2>Add Complex</h2>
            <input type="text" placeholder="name" onChange={handleSetName}/>
            <input type="text" placeholder="adress" onChange={handleSetAdress}/>
            <input type="text" placeholder="realtor id" onChange={handleSetRealtorId}/>
            <button onClick={add_new_complex}>Add!</button>
        </div>
    )
}

export default AddComplex;