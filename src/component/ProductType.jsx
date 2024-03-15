import { useContext } from "react"
import { Link } from "react-router-dom"
import ContextProvider from "./ContextProvider"
import productContext from "./context"
import './ProductType.css'
const ProductType = ({item})=>{
    let data = useContext(productContext)
    const handleOnType = (event)=>{
        event.preventDefault()
        // // console.log((event.target.innerText));
        data.handleSetCurrentType(event.target.innerText)
    }
    return (
        <>
        <div>
        <li onClick={handleOnType} key={data.generateRandomId(5)} className="nav-item-product">
          <Link 
            to='/productWithType'
            className={`nav-link text-white  "active"
          }`}
            aria-current="page"
          >
            {item}
          </Link>
        </li>
        </div>
        </>
    )
}
export default ProductType