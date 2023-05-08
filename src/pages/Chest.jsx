import { useState ,useEffect} from "react"
import {Link} from 'react-router-dom'



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
        chestContainer.map( ({id,name,background_image,ratings,genres,platforms,released,short_screenshots}) =>(

          <div className="search" key={id}>
             
             <Link to={`/gamePage/${name}`}state={
                        {id,name,background_image,ratings,genres,platforms,released,short_screenshots}
                    }>
              <img src={background_image} alt="image" className='image' />
              </Link>
              <p>{`Game :${name}`}</p>

                    
          
          </div>

        ))

        
        : null

      }

      
    </div>
  )
}

