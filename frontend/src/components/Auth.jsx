import React, { useState } from "react";
import { fetchLogin } from "./API";

function Auth(){

    const [login, setLogin] = useState('Admin');
    const [pass, setPass] = useState('olezha1388');

    async function fetchLoginBuffer(req){
        const result = await fetchLogin(req);
        console.log(result);
    }
    
    return(
        <form className="auth">
            <input value={login} onChange={event => setLogin(event.target.value)} />
            <input value={pass} onChange={event => setPass(event.target.value)} />
            <button onClick={() => fetchLoginBuffer((login, pass))}>Log In</button>
        </form>
    )
}

export default Auth;