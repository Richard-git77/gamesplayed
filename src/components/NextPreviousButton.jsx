//  aqui estamos recibiendo la informacion requerida dentro del componente para que pueda funcionar adecuadamente

export const NextPreviousButton = ({onNext,onPrevious,prev,next}) => {


    // Creamos dos eventos onClick que seran los encargados de manejar las funciones que hacen fetch para ir a siguiente y anterior pagina onHandleClickNext y onHandleClickPrev
    const onHandleClickNext =()=>{
        onNext();
    }
   
    const onHandleClickPrev =() =>{
        onPrevious();

    }


  return (
    

    <nav>
        <div >

            
            {/* aqui hacemos un renderizado condicional de los botones para hacer atras o siguiente,
            preguntamos si prev tiene algo entonces renderiza el botton si no no hagas nada, lo hacemos con ambos botones a los que ademas les annadimos un evento onclick y dentro la funcion correspondiente */}
        {
                   prev ?
                
                
                    <button style={{color: 'white', fontSize: 27}} onClick={onHandleClickPrev}>Previous</button>

                    : null
                
            }
                   {
                    next ? 
                    <button style={{color: 'white', fontSize: 27}}  onClick={onHandleClickNext}>Next </button>
                    : null
                    
                }
            
        </div>
    </nav>
  )
}
