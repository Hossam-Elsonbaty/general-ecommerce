import React,{useState} from 'react';
import Product from './Product';
import ProductDetails from './ProductDetails';



const ProductList = ({ products }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [productDetailsToBeDisplayed, setProductDetailsToBeDisplayed] = useState({});

  const handleProductClick=(product)=>{
    setShowProductDetails(true);
    setProductDetailsToBeDisplayed(product);
  }
  return (
<>
{showProductDetails
  ?
  <ProductDetails product={productDetailsToBeDisplayed} setShowProductDetails={setShowProductDetails}/>
  :
  <div className="products-container">
    {products.map(product => (
      <div key={product.id} onClick={()=>{handleProductClick(product)}}><Product key={product.id} product={product}/></div>
    ))}
  </div>
}
</>
  );
};

export default ProductList;
