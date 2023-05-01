import { useLocation } from "react-router-dom"
import {useState,useEffect} from 'react'

export const GamePage = () => {

  const [savedGame, setSavedGame] = useState([]);
  let {state} =useLocation();
 
 
  



  useEffect(() => {
    setSavedGame([state]);
  }, [])
  console.log({savedGame});



  return (
    <div className="gamepage">GamePage

          

   

 
    {
        savedGame  ?
        savedGame.map( game =>(

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
