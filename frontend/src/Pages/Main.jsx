import React from "react";
import Header from "../components/Header";
import Auth from "../components/Auth";
import AddObject from "../components/AddObject";
import ShowClients from "../components/ShowClients";
import AllComplexes from "./AllComplexes";
import '../styles/main.css'
import AddClient from "../components/addClient";


function Main(){
    return(
        <>
        <Header />
        <div className="banner"></div>
        {/* <Finder /> */}
        {/* <AddClient /> */}
        <AllComplexes />
        
        </>
    )
}

export default Main;