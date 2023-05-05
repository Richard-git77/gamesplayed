import { useState } from "react"
import { useEffect } from "react"




export const Chest = () => {


  // state que guardara el array  que haya en local storage
  const [chestContainer, setChestContainer] = useState()

  
  // useEffect para traer los datos del local storage ,apenas se renderize el componente, y setearlos al chestContainer
useEffect(() => {
  
  let chestFirst = JSON.parse(localStorage.getItem('chest')) || [];
    
    console.log({chestFirst});
    setChestContainer(chestFirst)
    console.log({chestContainer});

}, [])


console.log({chestContainer});


  return (
    <div>
            <p>Chest</p>

            {/* si hay algo dentro de chestContainer hacer map, y renderizar informacion y si no no hagas nada */}
      {
        chestContainer  ?
        chestContainer.map( game =>(

          <div className="search" key={game.id}>
             

            <img src={game.background_image} width={500} height={277} />
            <p>{game.name}</p>

                    
          
          </div>

        ))

        
        : null

      }

      
    </div>
  )
}

