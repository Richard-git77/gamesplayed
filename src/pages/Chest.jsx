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
    <div className="container">

            {/* si hay algo dentro de chestContainer hacer map, y renderizar informacion y si no no hagas nada */}
      {
        chestContainer  ?
        chestContainer.map( ({id,name,background_image,ratings,genres,platforms,released,short_screenshots,age,platform,liked,finished}) =>(

          <div className="container" key={id}>
             
             <Link to={`/gamePage/${name}`}state={
                        {id,name,background_image,ratings,genres,platforms,released,short_screenshots}
                    }>
              <img src={background_image} alt="image" className='image' />
              </Link>
              <p>{`Game :${name}`}</p>
              <p>{` How Old Were You When You Played This Game?:${age}`}</p>
              <p>{` Wich Platform you Played  This Game?:${platform}`}</p>
              <p>{`Do You Like It? :${liked}`}</p>
              <p>{`Do You Finished It :${finished}`}</p>

                    
          
          </div>

        ))

        
        : null

      }

      
    </div>
  )
}

