import React from "react";
import { fetchGettingStarted } from "./API";

function Header(){


    return(
        
            <div className="header" >
                <button className="ahead" onClick={() => fetchGettingStarted("/GettingStarted")}>Getting Started</button>
                <button className="ahead" onClick={() => fetchGettingStarted("/Abilities")}>Abilities</button>
                <button className="ahead" onClick={() => fetchGettingStarted("/OurTeam")}>Our Team</button>
                <button className="ahead bigButton" onClick={() => fetchGettingStarted("/ContactUs")}>ContactUs</button>
            </div>
        
    )
}

export default Header;