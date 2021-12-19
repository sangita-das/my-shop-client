import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Banner.css'



const Banner = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src='https://t4.ftcdn.net/jpg/00/90/93/97/360_F_90939777_AREvg0n0SC0SZXOamWXfWyBretBCL0fL.jpg'
            alt="First slide"
          />
          <Carousel.Caption>
            <div className=" my-5">
              <div className="mb-5 pb-5">
                <h1><strong className="text-primary fw-bold">Buy your From
                  "MyShop", Enjoy Your Day.</strong></h1>
                <br />
                <br />
             
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Explore</button>
              </Link>
            </div>
          </Carousel.Caption>

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src="https://media.istockphoto.com/vectors/women-enjoy-shopping-in-mall-banner-or-background-vector-id1341651858?b=1&k=20&m=1341651858&s=612x612&w=0&h=OUnATPUh_Io2Q3m3-mSaHvNmBjbCCF_Z1Fa5NLaHB3I="
            alt="Second slide"
          />

          <Carousel.Caption>
            <div className=" my-5">
              <div className="mb-5 pb-5">
              <h1><strong className="">Buy your From
                  "MyShop", Enjoy Your Day.</strong></h1>
                <br />
                <br />
                <h5 className="text-light fw-bold">We provide travelers with an authentic Jordanian experience that they
                  <br />can remember for the rest of their lives </h5>
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Top Destination</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src='https://www.marketingjournal.org/wp-content/uploads/2017/03/Screen-Shot-2017-03-29-at-4.27.35-PM.png'
            alt="Third slide"
          />

          <Carousel.Caption>
            <div className=" my-5">
              <div className="mb-5 pb-5">
              <h1><strong className="text-light">Buy your From
                  "MyShop", Enjoy Your Day.</strong></h1>
                <br />
                <br />
                <h5 className="text-light fw-bold">We provide travelers with an authentic Jordanian experience that they
                  <br />can remember for the rest of their lives </h5>
              </div>
              <Link to={``}>
                <button className="btn btn-light text-success fw-bold">Top Destination</button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel >
    </div >
  );
};

export default Banner;