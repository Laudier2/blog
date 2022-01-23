import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react/cjs/react.development';
import RoutesRota from './routes';

function App() {

  const [ dados, setDados ] = useState([])

  useEffect(() => {
    
    const Processe = async () => {
      const req = await axios.get('http://localhost:3005')
      const res = await req.data

      setDados(res)
      //console.log(res)
    }
    Processe()
  },[])

  return (
    <>
      <RoutesRota valores={dados} />     
    </>
  );
}

export default App;
