import React from 'react';
import NavBar from './Header.js';
import CartControl from './CartControl.js';
import '../App.css';
import background from '../img/bGround.jpg';


function App(){
  const defaultStyle = {
    backgroundImage: `url(${background})`,
    opactiy: "90%",
    color: "#FFFC00",
    fontFamily: ['Deborah Fancy Dress', "sans-serif"],
    fontSize: "150%",
    minHeight: "100%",
    marginBottom: "0%"
  }

  
  
  return ( 
    <React.Fragment>
      <link href="https://fonts.cdnfonts.com/css/deborah-fancy-dress" rel="stylesheet"></link>
      <div className="background" style={defaultStyle}>
        <NavBar />
        <CartControl />
      </div>
    </React.Fragment>
  );
}

export default App;
