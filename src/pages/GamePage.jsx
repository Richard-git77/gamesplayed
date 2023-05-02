import { useLocation,useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'

export const GamePage = () => {

  const [savedGame, setSavedGame] = useState([]);
  const [chestAdd, setChestAdd] = useState([]);
  let {state} =useLocation();
 
 
  let navigate = useNavigate();

  


  useEffect(() => {
    setSavedGame([state]);
  }, [])
  // console.log({savedGame});


  const handleRemove = () => {
    const filter =  chestAdd;
    filter.pop();
    // const filterCard = chestAdd;
    // filterCard.pop()
     console.log({filter});
     setChestAdd(filter);
    //  setgameCard(filterCard);

   
      
     
     let chest= JSON.parse(localStorage.getItem('chest')) ; 
      console.log({chest}+'hola')
         chest.pop();
       console.log({chest})
        localStorage.setItem('chest',JSON.stringify(chest));
    
    
    
  
  };
  
  
  const handleAdd = () => {
    setChestAdd([...chestAdd,state]);
    // handleShow();
    // setgameCard([...saved])
      
  };

  useEffect(() => {
   console.log({chestAdd});
   
   if(chestAdd.length > 0){
   localStorage.setItem('chest',JSON.stringify([chestAdd]));
   }
  }, [handleAdd])

  
  



  return (
    <div className="gamepage">GamePage

        <button style={{color:'black'}} onClick={() => navigate(-1)}>Go back</button>

 
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

      <button  style={{color:'black'}}onClick={handleAdd}>Add Game</button>
      <button  style={{color:'black',marginLeft: '20px'}}onClick={handleRemove}>Remove Game</button>
 


    </div>
  )
}
