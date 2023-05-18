import React from "react";
import { useState } from "react";
import { add_apartment } from "./API"
import "../styles/addApartment.css";

function AddApartment(){

    const [complex_id, setComplexId] = useState('')
    const [number, setNumber] = useState('')
    const [floor, setFloor] = useState('')
    const [rooms, setRooms] = useState('')
    const [price, setPrice] = useState('')
    const [photo_url, setPhotoUrl] = useState('')
    const [realtor_id, setRealtorId] = useState('')
    const [description, setDescription] = useState('')

    function handleComplexId(event){
        setComplexId(event.target.value);
    }
    function handleNumber(event){
        setNumber(event.target.value);
    }
    function handleFloor(event){
        setFloor(event.target.value);
    }
    function handleRooms(event){
        setRooms(event.target.value);
    }
    function handlePrice(event){
        setPrice(event.target.value);
    }
    function handlePhotoUrl(event){
        setPhotoUrl(event.target.value);
    }
    function handleRealtorId(event){
        setRealtorId(event.target.value);
    }
    function handleDescription(event){
        setDescription(event.target.value);
    }


    function add_apartment_to_db(){
        add_apartment(complex_id, number, floor, rooms, price, photo_url, realtor_id, description);
    }

    return(
        <div className="add__apartment">
            <h2>Add apartment</h2>
            <input type="text" placeholder="complex id" onChange={handleComplexId}/>
            <input type="text" placeholder="apartment number" onChange={handleNumber}/>
            <input type="text" placeholder="floor" onChange={handleFloor}/>
            <input type="text" placeholder="how manu rooms?" onChange={handleRooms}/>
            <input type="text" placeholder="price" onChange={handlePrice}/>
            <input type="text" placeholder="photo link" onChange={handlePhotoUrl}/>
            <input type="text" placeholder="realtor" onChange={handleRealtorId}/>
            <textarea name="" id="" cols="30" rows="10" placeholder="decription" onChange={handleDescription}></textarea>
            <button onClick={add_apartment_to_db}>Add!</button>
        </div>
    )
}

export default AddApartment;