import { useLocation,useNavigate } from "react-router-dom"
import {useState,useEffect} from 'react'

import {Modal} from '../components'
import {Gamecard} from '../components'
export const GamePage = () => {


  //states savedGame es para guardar toda la informacion de nuestro juego seleccionado en la pagina de search, con la ayuda d useLocation que es el que proporciona la informacion desde la pagina search llevandolo gracias a {state}, chestAdd es para  guardar o remover el juego con la ayuda del onClick ,ademas tambien servira para ayudar a setear y traer informacion en el local storage para llevar registro del array de juegos guardados
  const [savedGame, setSavedGame] = useState([]);
  const [chestAdd, setChestAdd] = useState([]);
 


  //el siModalOpen sirve para saber si el modal aparecera o no , este state se lo pasaremos como props a el componnte <Modal> para poder realizar la accion,seteado en false por defecto
  const [isModalOpen, setIsModalOpen] = useState(false);
 

  //use location es para traer la informacion de la pagina de search o de la de home ,del huego seleccionado, useNavigate lo utilizamos para volver a la pagina anterior
  let {state} =useLocation();
  let navigate = useNavigate();

  
  
    // Este useEffect, sin dependencias, lo utilizamos  para setear la informaciom del [state] de useLocation, y con el saveGame seteado renderizaos la informaciondel juego seleccionado, tambien nos estamos trayendo la informacion del localStorage de nusetros juegos guardados y si no hay ninguno estamos seteando un arreglo vacio para que no de errores a la hora de traer la informacion, seteamos el chestAdd con la informacion que trajimos del localStorage 
    
  useEffect(() => {
    setSavedGame([state]);
    let chestFirst = JSON.parse(localStorage.getItem('chest')) || [];
    // console.log({chestFirst});
    setChestAdd(chestFirst)
    // console.log(chestAdd);
    // console.log({state});
    if (chestFirst.some(item => item.id === state.id)) {
      setIsModalOpen(true);
    }
   
  }, []);
  // console.log({savedGame});

  // funcion para filtrar el array de chestAdd , en el localStorage y en el propio array de chestAdd y eliminar el ultimo elemento de los arrays, y actualiza la informacion despues de que se elimina el ultimo elemento en antes ,tambien pone el isModelOpen en false, para que se cierre cuando demos click en el button  remove
  const handleRemove = () => {


    let chest= JSON.parse(localStorage.getItem('chest')) ; 
    
    // let lastIdRemove =  chestAdd[chestAdd.length -1].id;
      
    let filteredChest = chestAdd.filter(item => item.id !== state.id );
    setChestAdd(filteredChest)
       
    chest.pop();
        
          localStorage.setItem('chest',JSON.stringify(filteredChest));
          console.log({chestAdd});
    
  
          setIsModalOpen(false);
         
    
  
  };
  
  // el handleAdd sirve para setear el chestAdd con una copia del chestAdd anterior y le annade el state del useLocation que trae la informacion del juego de la pagina de search o Home, ademas de que tambien activa la funcion para abrir el modal ,ambas funciones handleAdd y handleOpenModal se activan gracias a un boton con evento onClick  
  const handleAdd = () => {


    if (!chestAdd.includes(state)) {
      setChestAdd([...chestAdd, state]);
      // setChestAdd([undefined]);
 

      
    }

    handleOpenModal();
    setIsModalOpen(true);
    
    
    
    }

    //este use effect se utiliza para setear el nuevo elemento annadido a el localstorage y que vaya a la par con el chestAdd , uttilizamos el useEffect ya que el chestAdd se tarda en ver reflejado el cambio , es por eso que tomamos como dependencia el mismo chestAdd , a la hora de tener un cambio useEffect se dara cuenta y realizara loq ue este dentro de su hook 
  useEffect(() => {
   console.log({chestAdd});

   if (chestAdd.length > 0) {
   
   
    const newChest = [...chestAdd];
    localStorage.setItem('chest', JSON.stringify(newChest));
    
  }
  }, [chestAdd]);





  // handleOpenModal yhandleCloseModal sirven para setear cierto o falso, dependiendo de un evento onClick de un boton
  const handleOpenModal = () => {
    setIsModalOpen(true);
    // console.log({isModalOpen});
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // console.log({isModalOpen});

  };



 
  
  



  return (
    <>



      <button style= {{color:'white'}} onClick={() => navigate(-1)}>Go back</button>
{         
      
        chestAdd.some(item => item.id === state.id)?
          <div>
        
         <button  style={{color:'white',marginLeft: '20px'}}onClick={handleRemove}>Remove Game</button> 

         {isModalOpen && <Modal closeModal={handleCloseModal} handleRemove={handleRemove} />} 


        </div>
       
          : 
          <div>
           <button  style={{color:'white'}}onClick={handleAdd}>Add Game</button> 
        
          </div>
                }
    <div className={isModalOpen ? "gamepageblur" : "gamepage"}>

       


 
    {
        savedGame  ?

        <Gamecard savedGame={savedGame}/>
      
        : null
      } 

    </div>
    </>
  )
}
