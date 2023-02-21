import React, { useEffect } from "react";
import axios from "axios";


async function App() {

  // const host = axios.create({
  //   baseURL: "localhost:3001"
  // });
  const fetchData = async () => {
                const result = await axios(
                    'http://localhost:3001',
                );
                return result.data;
            };
  const test = await fetchData();
            console.log(test);
    

  return (
    <div className="App">
      Heklo
    </div>
  );
}

export default App;
