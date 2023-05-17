import React from "react";
import AddClient from "../components/addClient";
import AddComplex from "../components/addComplex";
import AddApartment from "../components/addApartment";
import { useState, useEffect } from "react";
import { addRealtor } from "../components/API";
import "../styles/Admin.css"

function Admin(){

    //for authorising
    const [username, setUsername] = useState('');
    const [passwod, setPassword] = useState('');

    function handleInputUsername(event){
        setUsername(event.target.value);
    }

    function handleInputPassword(event){
        setPassword(event.target.value);
    }

    function test(){
        console.log(username, passwod);
    }

    //for set realtor

    const [newRealtor, setRealtor] = useState('');

    function handleSetRealtor(event){ 
        setRealtor(event.target.value);
    }

    function GrandUserToRealtor(){
        addRealtor(newRealtor);
    }

    //for add residentional complex



    //for add apartments


    return(
        <div className="admin__container">
            <div className="auth_container">
                <h2>Authorization</h2>
                <input type="text" placeholder="username" onChange={handleInputUsername}/>
                <input type="text" placeholder="password" onChange={handleInputPassword}/>
                <button onClick={test}>Confirm</button>
            </div>    
            <div className="admin__panel">
                <AddClient />
                <div className="set__realtor">
                    <input type="text" placeholder="user id" onChange={handleSetRealtor}/>
                    <button onClick={GrandUserToRealtor}>Set!</button>
                </div>
                <AddComplex />
                <AddApartment />
            </div>
        </div>
    );
}

export default Admin;