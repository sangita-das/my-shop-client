import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from 'aos';
import 'aos/dist/aos.css';


const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;

    AOS.init();

    return (
      
     
  
        <div className="four wide column" key={id}>
        
        <Link to={`/product/${id}`}>
          <div className="ui link cards rounded" data-aos="fade-up" >
            <div className="card mt-5 pt-5 container d-flex align-items-center shadow-lg min-vh-100  my-4 rounded p-4 ">
              <div className="image">
                <img src={image} alt={title} />
              </div>
              <div className="content">
                <div className="header">{title}</div>
                <div className="meta price text-dark">Price: ${price}</div>
                <div className="meta text-primary">{category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;