import React from "react";
import {addClient} from "./API";
import {getClient} from "./API";

function Header(){

    const user1 = {
        name: 'John',
        id: 3,
        email: 'john@example.com',
        password: '123StrongPass321'
    }

    return(
        
            <div className="header" >
                
                <button className="ahead" onClick={() => getClient()}>Get Clients</button>
                <button className="ahead bigButton" onClick={() => addClient(user1.id, user1.name, user1.email, user1.password)}>Add Client</button>
            </div>
        
    )
}

export default Header;