import React from "react";
import Header from "../components/Header";
import Auth from "../components/Auth";
import AddClient from "../components/AddClinet";
import ShowClients from "../components/ShowClients";



function Main(){
    return(
        <>
        
        <div className="main">
        <Header />
        <AddClient />

        <ShowClients />
            {/* <Auth /> */}
        </div>
        </>
    )
}

export default Main;