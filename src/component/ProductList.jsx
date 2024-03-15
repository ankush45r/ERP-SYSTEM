import Card from "./Card";
import { useContext } from "react";
import productContext from "./context";
import './ProductList.css'
import AddProduct from "./AddProduct";


const ProductList = () => {
  let a = useContext(productContext);
  
  let product_list = a.productList.filter(item => item.type==a.currentType)
  console.log(a.currentType)
  // console.log(typeof (a), a.productList);
  return (
    <>
    
      {product_list.length === 0 ? <center><h1>No Products</h1></center>:<div className="cards">
        {
          
        
        product_list.map((item) => (
          <Card  item={item} />
        ))}
        {/* <AddProduct></AddProduct> */}
        </div>}
    </>
  )
}
export default ProductList;