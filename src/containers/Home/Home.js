import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Footer from '../../Components/Footer/Footer';
import ProductListing from "../../containers/ProductListing";


const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ProductListing></ProductListing>
      <Footer></Footer>
    </div>
  );
};

export default Home;