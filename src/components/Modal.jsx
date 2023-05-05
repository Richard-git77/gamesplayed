import {useState,useEffect} from 'react';


//recibimos por props la funcion onCloseModal, que cierra el modal,para abrir lo hicimos desde el boron de la pagina GamePage desde el boton de add game
export const Modal = ({closeModal}) => {


    //este state servira para guardar la informacion que se vaya escribiendo en nuestros inputs, gracias a la ayuda de la funcion handleUnput Change
    const [gameData, setGameData] = useState({
        age: '',
        platform: '',
        finished: false,
        liked: '',

    })
    
    //useEffect para setear la informacion que este guardada en local storage dentro de nusetro gameData,importante reordar que la informacion se ira sobreescribiento en el array y es justo lo que queremos, ya que solo queremos tomar esta informacion y agregarsela a el juego que estamos por agregar a nuestro state de chestAdd,es por eso que tenemos la dependencia gameData al final de useEffect para que se sobreescriba 
    useEffect(() => {
      localStorage.setItem("gameData", JSON.stringify(gameData));
    }, [gameData]);
  
    //useEffect para traer la informcion que haya dentro del local storage de nuestro gameData
    useEffect(() => {
        const storedData = localStorage.getItem("gameData");
      
        if (storedData) {
          setGameData(JSON.parse(storedData));
        }
      }, []);




      //handleInputChange hace deconstruccion de las propiedades del evento,target que usaremos para tomar la informacion que el usuario ecriba en los inputs, despues seteams el etGameData con una copia de gameData anterior el cual se puede escribir prevGamedata,ademas de setear la informacion antes mencionada del evento.target y hacer una condicion, esta condicion es que el nombre del input que asignamos en el name de cada uno osea en el [name] puede ser "age", 'platform'... , checara ese input y si es de tipo checkbox lo dejara con la propiedad del checkbox[true,false] ,y si es un input que no sea del tipo checkbox le dara su propiedad value , para tomar lo que estamos ecribiendo
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setGameData((prevGameData) => ({
          ...prevGameData,
          [name]: type === "checkbox" ? checked : value
        }));
      };


      //funcion para hacer submit en el <form>  ademas de que hace una llamada a la funcion closeModal()
      const handleSubmit = (e) => {
        e.preventDefault();
       
        console.log({gameData});
        
       
        closeModal();
      };

    

  return (

    <div className="gamepage" style={{color: 'black'}}>
    <div className="modal-content">
      <h2>Game Card</h2>
      <form onSubmit={handleSubmit}>
      <p>At What Age Did You Played It:</p>
      <input 
        type="text" 
        name="age"
        value={gameData.age}
        onChange={handleInputChange}

        />
      <p>Wich Platform Did You Use It:</p>
      <select
      name="platform"
      value={gameData.platform}
      onChange={handleInputChange}
      >
        <option value="" >select </option>
        <option value="playstation1" >Playstation </option>
        <option value="Playstation2" >Playstation2 </option>
        <option value="Playstation3" >Playstation3 </option>
        <option value="Playstation4" >Playstation4 </option>
        <option value="Playstation5" >Playstation5 </option>
        <option value="Xbox" >Xbox </option>
        <option value="Xbox 360" >Xbox 360 </option>
        <option value="Xbox one" >Xbox one </option>
        <option value="Xbox Series" >Xbox Series </option>
        <option value="Famicon" >Famicon </option>
        <option value="Nintendo" > Nintendo</option>
        <option value="Super Nintendo" >Super Nintendo </option>
        <option value="Nintendo 64" > Nintendo 64</option>
        <option value="Gamecube" > Gamecube</option>
        <option value="Nintendo wii" >Nintendo wii </option>
        <option value="NIntendo" > NIntendo Switch</option>
       
       
        <option value="PC" > PC</option>
        <option value="GameBoy" > GameBoy</option>
        
        <option value="Maquinita" >Maquinita </option>
        <option value="PsP" > PsP</option>
        <option value="PsVita" > PsVita</option>
      </select>
      <p>Did You Finish The Game:</p>
      <input 
      
      type="checkbox"
      name="completed"
      checked={gameData.finished}
      onChange={handleInputChange} />
      <p>Did you Like It:</p>
      <input  type="radio"
        name="liked"
        value="yes"
        checked={gameData.liked === "yes"}
        onChange={handleInputChange}/> Yes
      <input type="radio"
            name="liked"
            value="no"
            checked={gameData.liked === "no"}
            onChange={handleInputChange} /> No
      <button onClick={closeModal}>Close</button>
      </form>
    </div>
  </div>
   
  )
}
