import { useState } from "react"
import { useEffect } from "react"




export const Chest = () => {
  const [chestContainer, setchestContainer] = useState()

  

useEffect(() => {
  
 let chest= JSON.parse(localStorage.getItem('chest'))
  
  setchestContainer([chest]);

}, [])


console.log({chestContainer});


  return (
    <div>

      {

      }
      
    </div>
  )
}

