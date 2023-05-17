import React, { useEffect } from "react";
import axios from "axios";
import Main from "./Pages/Main.jsx";
import Features from "./Pages/Features.jsx";
import Apartment from "./Pages/Apartment.jsx";
import Admin from "./Pages/Admin.jsx";
import './styles/styles.css'
import {Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


function App() {

  // const host = axios.create({
  //   baseURL: "localhost:3001"
  // });
  // const fetchData = async () => {
  //               const result = await axios(
  //                   'http://localhost:3001',
  //               );
  //               return result.data;
  //           };
  // const test = await fetchData();
  //           console.log(test);
    

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Main/>} />
          <Route path='/main' element={<Main/>} />
          <Route path='/features' element={<Features/>} />
          <Route path='/apartment' element={<Apartment/>} />
          <Route path='/admin' element={<Admin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
