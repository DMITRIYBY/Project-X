import React from "react";
import AddClient from "../components/addClient";
import AddComplex from "../components/addComplex";
import AddApartment from "../components/addApartment";
import { useState, useEffect } from "react";
import { addRealtor } from "../components/API";
import { set_auth_realtor } from "../components/API";
import "../styles/Admin.css"

function Admin(){

    //for authorising
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [auth_data, setAuthData] = useState([false]);

    function handleInputUsername(event){
        setUsername(event.target.value);
    }

    function handleInputPassword(event){
        setPassword(event.target.value);
    }

    async function test(){
        
         set_auth_realtor(username, password)
        .then(response => {
            setAuthData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
        
        console.log('status',auth_data.map((item) => { return item.auth_realtor})[0])
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
            { !auth_data.map((item) => { return item.auth_realtor})[0] && <div className="auth_container" >
                <h2>Authorization</h2>
                <input type="text" placeholder="username" onChange={handleInputUsername}/>
                <input type="text" placeholder="password" onChange={handleInputPassword}/>
                <button onClick={test}>Confirm</button>
            </div>  }
           { auth_data.map((item) => { return item.auth_realtor})[0] && <div className="admin__panel">
                <AddClient />
                <div className="set__realtor">
                    <h2>Grand user to realtor</h2>
                    <input type="text" placeholder="user id" onChange={handleSetRealtor}/>
                    <button onClick={GrandUserToRealtor}>Set!</button>
                </div>
                <AddComplex />
                <AddApartment />
            </div>}
        </div>
    );
}

export default Admin;