import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductType from './ProductType';
import productContext from './context';
const ProductSidebar = () => {

  let data = useContext(productContext)
  // console.log(data.productNameSet.size)
  return (
    <>
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
      style={{ width: "180px" }}
    >
      
        <center><span className="fs-4" style={{color:"grey"}}>Category    </span></center>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {data.productNameSet.map((item)=>
          <ProductType key={data.generateRandomId(5)}  item ={item}/>
        )}
      </ul>
      <hr />

    </div>
    </>
  );
};

export default ProductSidebar;
