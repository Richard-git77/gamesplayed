import { useState } from "react"
import { useEffect } from "react"




export const Chest = () => {
  const [chestContainer, setChestContainer] = useState()

  

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

