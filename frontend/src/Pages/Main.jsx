import React from "react";
import Header from "../components/Header";
import Auth from "../components/Auth";



function Main(){
    return(
        <>
        
        <div className="main">
        <Header />
            <Auth />
            <div className="banner">
                <p>FIND HOME</p>
            </div>
        </div>
        </>
    )
}

export default Main;