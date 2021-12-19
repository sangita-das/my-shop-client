import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="Header-container">
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div className="logo-img">
            <img className="w-50" src='https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/68/9a/71/689a7130-beb3-32f9-b2ee-ea7fdf8b024d/source/512x512bb.jpg' alt="" />
            
          </div>
        </div>
        <div className="col-md-10">
          <div className="menu-container ">
            <ul className="d-flex align-items-end justify-content-end fw-bold ">
              <Link to="/home" className="items text-dark">
                <li>Home</li>
              </Link>
              <Link to="/products" className="items text-dark">
                <li>Products</li>
              </Link>

              <Link to="/about" className="items text-dark">
                <li>About us</li>
              </Link>
              <Link to="/contact" className="items text-dark">
                <li>Contact</li>
              </Link>
              {/* <Link to="/review" className="items text-dark">
                <li>Reviews</li>
              </Link> */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;