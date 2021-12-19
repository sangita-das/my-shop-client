import React from 'react';
import Flip from 'react-reveal/Flip';


const Header = () => {
  return (
    // <div className="ui fixed menu">
    //   <div className="ui container center">

    <div>  
          <Flip left>
       <h1 class="text-center fw-bold pt-5 heading">Welcome to <span class="text-info">MyShop</span> </h1>
       </Flip>
       </div>
    

 


    //   </div>
    // </div>
  )
};

export default Header;