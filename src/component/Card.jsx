import './Card.css'
import { useContext } from 'react'
import productContext from './context'
import { useState } from 'react'
function Card({item}) {
    let a = useContext(productContext)
    const handleOnDelete = (event)=>{
        a.deleteProduct(event.target.id);
        console.log(event)

    }
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = () => {
      setQuantity(prevQuantity => prevQuantity + 1);
    };
  
    const handleDecreaseQuantity = () => {
      if (quantity > 1) {
        setQuantity(prevQuantity => prevQuantity - 1);
      }
    };
  
    // const handleOnDelete = () => {
    //   onDelete(item.id);
    // };
  
    return (
        <>
      <div className="card" style={{ width: "18rem" }}>
        <button onClick={handleOnDelete} id={`${item.id}`} type="button" className="btn btn-danger delete-button" style={{ position: "absolute", top: "0", right: "0" }}>Delete</button>
        <img src={`${item.src}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.content}</p>
        </div>
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            Quantity: {item.quantity}
          </div>
          <div className="d-flex">
            <button className="btn btn-secondary mr-2" onClick={handleDecreaseQuantity}>-</button>
            <button className="btn btn-secondary" onClick={handleIncreaseQuantity}>+</button>
          </div>
        </div>
      </div>
    </>)
}
export default Card