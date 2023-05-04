import { useLocation,useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'

export const GamePage = () => {

  const [savedGame, setSavedGame] = useState([]);
  const [chestAdd, setChestAdd] = useState([]);
 
  
  let {state} =useLocation();
  let navigate = useNavigate();

  
  

  useEffect(() => {
    setSavedGame([state]);
    let chestFirst = JSON.parse(localStorage.getItem('chest')) || [];
    
    console.log({chestFirst});
    setChestAdd(chestFirst)
    console.log(chestAdd);
    console.log({state});
   
  }, [])
  // console.log({savedGame});


  const handleRemove = () => {


    let chest= JSON.parse(localStorage.getItem('chest')) ; 

    let lastIdRemove =  chestAdd[chestAdd.length -1].id;
      
    let filteredChest = chestAdd.filter(item => item.id !== lastIdRemove );
    setChestAdd(filteredChest)
       
    chest.pop();
        
          localStorage.setItem('chest',JSON.stringify(filteredChest));
          console.log({chestAdd});
    
  
    
    
  
  };
  
  
  const handleAdd = () => {


    if (!chestAdd.includes(state)) {
      setChestAdd([...chestAdd, state]);
 
    }
    }

  useEffect(() => {
   console.log({chestAdd});

   if (chestAdd.length > 0) {
   
   
    const newChest = [...chestAdd];
    localStorage.setItem('chest', JSON.stringify(newChest));

    
  }


  

  }, [chestAdd]);



  
  



  return (
    <div className="gamepage">GamePage

        <button style= {{color:'black'}} onClick={() => navigate(-1)}>Go back</button>

 
    {
        savedGame  ?
        savedGame.map( game =>(

          <div className="search" key= {game.id}>
             

            <img src={game.background_image} width={500} height={277} />
            <p>{game.name}</p>

                    
          
          </div>
        ))

        : null
      } 

{         
      
        chestAdd.some(item => item === state)?
          
        
        ( <button  style={{color:'black',marginLeft: '20px'}}onClick={handleRemove}>Remove Game</button> )

          : ( <button  style={{color:'black'}}onClick={handleAdd}>Add Game</button> )
        
                }
            
          
        
        

 


    </div>
  )
}
