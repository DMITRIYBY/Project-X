import React, {useState} from "react";
import '../styles/finder.css'
import { getClientInfo } from "./API";

function Finder(){

    const [name, setName] = useState('');
    const [resp, setResp] = useState([]);

    function handleInputName(event) {
        setName(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log('Name from Front:', name)

        getClientInfo(name)
            .then(response => {
                setResp(response);
                console.log(resp[0]);
            })
        // do something with the input value
    }



    return(
        <>
        <form onSubmit={handleSubmit} className="finder">
                    <input type="text" value={name} onChange={handleInputName} />
                    <button type="sumbit">Search</button>
        </form>
        <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      <tbody>
      {resp.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
        {/* <tr>
            <td>{resp[0].id}</td>
            <td>{resp[0].name}</td>
            <td>{resp[0].email}</td>
            <td>{resp[0].password}</td>
          </tr> */}
      </tbody>
    </table>
    </>
    )
}

export default Finder;