import { useState } from "react"
import { Link,useLocation } from "react-router-dom";
import '../App.css';

export const Search = () => {
      let{state} =useLocation();
    

      // usaremos un state para guardar el juego que el cliente escribira en su input gameSearched y otro gameResult para guardar la informacion que trae el fetch
      const [gameSearched, setGameSearched] = useState('');
      const [gameResult, setGameResult] = useState([]);
        // haraemos un fetch en la pagina de search ya que aqui buscaremos en la base de datos de la api por un nombre en particular  y la api nos devolvera los resultados que contengan dicha palabra dentro de sus basesd datos, la funcion searchedGameFetch hara el fetch correspondiente,ademas se le pasara como parametro el state de gameSearched ya que este contara con la informacion seteada  el juego deseado, y se concatenara dentro de  la url en los params, finalmente setearemos el setGameResult con la informacion deseada
      const serchedGameFetch = async(gameSearched) =>{
            try {
              const response = await fetch(`https://api.rawg.io/api/games?&search=${gameSearched}&key=f0263ed849ce41a6b32bdce70df10183&`);
        
              const data = await response.json();
              setGameResult( data.results);
              // console.log({data});
              // console.log({gameResult});
              
            } catch (error) {
              console.log(error);
            }
       
      }

      //  serchedGame();



        // las funcion onChange sirve para capturar la informacion que se introduce en el input y la setea en el state de gameSearched

     const onChange =(e)=>{
        const writtedGame = e.target.value;
        // console.log({writtedGame});
        setGameSearched(writtedGame)
        console.log({gameSearched});

      }

      // la funcion onSubmit sirve para activar el evento onClick y llamar a la funcion serchedGameFetch la cual realizara el fetch del juego deseado

      const onSubmit = (e) =>{
        e.preventDefault();
        serchedGameFetch(gameSearched);
        console.log({gameSearched} );
        console.log({state});


      }
     
     



  return (
    <div>
      <form onSubmit={onSubmit}>
      <input type="text" className="input-writtingtext" onChange={onChange} />
      <input type="submit" className="input-writtingtext" onClick={onSubmit} value="Search" />
      </form>

      <div className="serached-games">

      {
        gameResult  ?
        gameResult.map( game =>(

          <div className="search" key={game.id}>
             <Link to={`/gamePage/${game.name}`}state={
                        {...game}
                    }>

            <img src={game.background_image} width={500} height={277} />
            <p>{game.name}</p>

                    </Link>
          
          </div>
        ))

        : null
      }

 


      </div>
      
      
          
      </div>
  )
      }

      