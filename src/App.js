import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import Header from "./containers/Header";
import "./App.css";
import ProductDetails from "./containers/ProductDetails";
import NotFound from "./Components/NotFound";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Home from "./containers/Home/Home";
import Products from "./Components/Products/Products";
import About from "./Components/About/About";
import Review from "./Components/Review/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Header />
        
        <Switch>
        <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>


          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/products" exact component={Products} />
          <Route path="/about" exact component={About} />
          <Route path="/review" exact component={Review} />
          <Route path="*" component={NotFound}/>
            
            
            

        </Switch>
     
      </Router>
    </div>
  );
}

export default App;