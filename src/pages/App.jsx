import '../App.css'
import {useState, useEffect} from 'react';

import { NextPreviousButton } from '../components';


// Funcion principal en la que haremos fetch y guardaremos la data en un useState


export const App = ( ) => {



  //states saveData para guardar la infornmacion del fetch y tambien guardamos el previous y el next para poder hacer la paginacion  en infoNext e infoPrev

  const [saveData, setSavedata] = useState([]);
  const [infoNext, setInfoNext] = useState([]);
  const [infoPrev, setInfoPrev] = useState([]);


  // Al url inicial le annadiremos una constante $random que es un logaritmo que trae un numero dentrodel rango de 1 y el especificado en este caso el 477
    const random =  (1+Math.floor(Math.random()* 477));
    
   const gamesURL =`https://api.rawg.io/api/games?&page=${random}&page_size=40&key=f0263ed849ce41a6b32bdce70df10183&`;
    
    // const initialUrl= 'https://api.rawg.io/api/games?&search=shadow of the colossus&key=f0263ed849ce41a6b32bdce70df10183&'



    // hacemos fetch a a la api y seteamos nuestros states con la informacion requerida en este caso la data de los juegos y la pagina prev y next
  const fetchGames = async ( gamesURL ) =>{


    const response=  await fetch(gamesURL);
    const data = await response.json();
    // console.log({data});
    // console.log(`next${data.next}`);
    // console.log(`previous${data.previous}`);
    // console.log(data.results);
    setSavedata(data.results);
    setInfoPrev(data.previous)
    setInfoNext(data.next)


  }


  // usar el fetch dentro de un useEffect , sin poner la dependencia al useeffect para que al cargar la pagina vuelva a realizar el fetch y vuelva a traer otra tanda de juegos 

  useEffect(() => {
  
      fetchGames(gamesURL);
  }, []);

  // console.log({saveData}); siempre checar la data despues de hacer fetch  dentro del useEffect ya que solo despues de ejecutarse nos dira la informacion , si lo hacemos antes la informacion aun no estrara fecheada o seteada segun sea el caso
  

    // Las funciones onPrevious  y onNext , realizaran un fetch al ser ejecutadas , dentrto de ese fetch pusimos como argumento la informacion que nos traera la siguiente o anterior pagina de la api, esta informacion la obtuvimos al setear los states cn la informacion deseada, estas funciones se ejecutaran cuando demos click en los botones next y previous que colocaremos como un componente aparte den el codigo
  const onPrevious =() =>{
    fetchGames(infoPrev);
  }
  const onNext =()=>{

    fetchGames(infoNext);
  }

  return (
    <>
      <div className="container">

        {/* Renderizamos nuestro componente de button para pasar a ala siguiente pagina o a la anterior, para ello necesitamos hacer 2 funciones una que haga fetch en la pagina anterior y una que lo haga en la pagina siguiente,para que a la hora de hacer click en su respectivo boton nos lleve a la pagina adecuada, ahora no solo tenemos que pasar esas funciones para hacer fetch al componente, tambien necesitamos pasasrele la data para que las funciones reciban ese argumento y y acceder a la info que esta en un componente exterior y fuera de nuestra pagina principal , en este caso las funciones serian onPrev e onNext, y la informacion que le mandamos al componente es infoPrev e infoNext   */}
      <NextPreviousButton  prev={infoPrev} next={infoNext} onPrevious={onPrevious} onNext={onNext}/>    

        {
          saveData.map( ({id,name,background_image,ratings,genres,platforms,released,short_screenshots}) =>(
            <div key={id} className='card'>
              <img src={background_image} alt="image" className='image' />
              <p>{`Game :${name}`}</p>
              <p>{`Released Date :${released}`}</p>

              {
                      platforms.map( ({platform}) =>(
                        <div key={platform.id}>
                          <p>{`Platform :${platform.name}`}</p>
                        </div>
                      ))
              }

              {
                genres.map(({id,name}) =>(
                  <p key={id}>{`Genres: ${name}`}</p>
                ))
              }
             
      
              
              {
                ratings.map(rating =>(
                  <div key={`${rating.id}`}>

                        <p>Gamers Rating</p>
                        <p>{`# : ${rating.id}`}</p>
                        <p>{`Valoration: ${rating.title}`}</p>
                        <p>{`Percent:${rating.percent}`}</p>
                        
                  </div>
                ))
              }
            
            {

              short_screenshots.map(({id,image})=>(
                <div key={id} className='screenshotcontainer'>
                        <img src={image} alt="screenshot" className="screenshot" />
                </div>

              ))
            }

              

            </div>
          ))
        }


  
      </div>

      <NextPreviousButton  prev={infoPrev} next={infoNext} onPrevious={onPrevious} onNext={onNext}/>   
     
    </>
  )
}


