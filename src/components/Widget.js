import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Widget(props) {
  const cursorChange = {
    cursor: "pointer",
    marginTop: "1%",
    marginRight: "10%",
    float: "right"
  }
  let numOfItemsElement;
  if ((props.itemCount === 0) || (!props.itemCount))  {
    numOfItemsElement = <span>Empty</span>;
  } else {
    numOfItemsElement = <span>{props.itemCount}</span>;
  }
  return (
    
    <React.Fragment>
      <div id="navBarCart" >
        <p style={cursorChange} onClick={props.onClickEvent}>Cart ({numOfItemsElement})    
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        </p>
      </div>
      
    </React.Fragment>
  );
}

Widget.propTypes = {
  itemCount: PropTypes.number,
  onClickEvent: PropTypes.func
}

export default Widget;