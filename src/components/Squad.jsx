//Para ver escuadrón mediante clic. Esto era un rescate, pero App ya funciona con componente Superheroe
import React, {useState} from 'react'

const Squad = () => {

  const [squad,setSquad]=useState();
  return (
    <>
    <button onClick={async function getSquad(){
      const result=await fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');
      const response=await result.json();
      setSquad(response);
      console.log(response.members);
      }}>
        Click Para Ver Escuadrón
    </button>
    <h1>{JSON.stringify(squad)}</h1>
    {/*TODO Show squad.members*/}
    </>
  )
}

export default Squad