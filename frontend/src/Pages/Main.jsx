import React from "react";
import Header from "../components/Header";
import Auth from "../components/Auth";
import AddObject from "../components/AddObject";
import ShowClients from "../components/ShowClients";
import '../styles/main.css'
import Finder from "../components/finder";


function Main(){
    return(
        <>
        <Header />
        <div className="banner"></div>
        <Finder />
        <AddObject />
        <ShowClients />
        </>
    )
}

export default Main;