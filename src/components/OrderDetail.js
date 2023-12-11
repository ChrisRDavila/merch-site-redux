import React from "react";
import PropTypes from "prop-types";
import album from "../img/album.jpg";
import shirt from "../img/Tshirt.png";
import button from "../img/button.jpg";

function OrderDetail(props){
  
  const itemStyling = {
    textAlign: "left",
    marginLeft: "30%",
    marginRight: "30%",
    borderStyle: "solid",
    padding: "10px"
  };

  const alignmentCenter = {
    // backgroundColor: "#61dafb",
    textAlign: "center"
  }
  
  let input;
  const { order, onClickingDelete } = props;
  if (order.item === "album") {
    input = album;
  } else if (order.item === "shirt") {
    input = shirt;
  } else if (order.item === "button") {
    input = button;
  }
  const altAttribute = `image of ${input}`;
  return (
    <React.Fragment>
      <div style={alignmentCenter}>
        <h3>Order Detail</h3>
        <div style={itemStyling}>
          <h4>Item: {order.item}</h4>
          <p>Quantity: {order.quantity}</p>
          <img src={input} alt= {altAttribute} />
          <p>Description: {order.description}</p>
          <div style={alignmentCenter}>
            <button onClick={props.onClickingEdit}>Update Order</button>
            <button onClick={()=> onClickingDelete(order.id) }>Delete Order</button>
          </div>
        </div>
        <hr/>
        <button onClick={props.onClickingBackToCart}>Return to Cart</button>
      </div>
    </React.Fragment>
  );
}

OrderDetail.propTypes = {
  order: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBackToCart: PropTypes.func
};

export default OrderDetail;