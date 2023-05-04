
export const Modal = () => {
  return (

    <div className="modal">
    <div className="modal-content">
      <h2>Modal Title</h2>
      <p>At What Age Did You Played It:</p>
      <input type="text" />
      <p>Wich Platform Did You Use It:</p>
      <input type="text" />
      <p>Did You Finish The Game:</p>
      <input type="checkbox" />
      <p>Did you Like It:</p>
      <input type="radio" name="like" value="yes" /> Yes
      <input type="radio" name="like" value="no" /> No
      <button onClick={closeModal}>Close</button>
    </div>
  </div>
   
  )
}
