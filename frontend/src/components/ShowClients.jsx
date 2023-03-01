import React, {useState, useEffect} from "react";
import { getClient } from "./API";
import host from "./setupHOST";
import "../styles/showclients.css"


function ShowClients(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
        getClient()
        .then(response => {
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, 500);
    }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          <th>Column 3</th>
          <th>Column 4</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.password}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}


export default ShowClients;