//Contiene llamada a Componente Plants
import React, {useState, useEffect} from 'react';

import Plant from "./components/Plant";
const handleSelectPlant=(userId)=>{
  console.log("User selected: ", userId);
}
const App=()=>{
  const [plants, setPlants]=useState();

  useEffect(()=>{
    async function getPlants(){
      const result=await fetch('http://localhost:3001/plants'); //Requires json server
      const response=await result.json();
      setPlants(response);
    }

    getPlants();

  },[]);
  console.log(plants);
  console.log(typeof(plants))

  return(
    <div>
      {plants && plants.length>0 ? plants.map((plant) => <Plant key={plant.id} {...plant} onClick={handleSelectPlant}/>) : null}
    </div>
  )
}

export default App