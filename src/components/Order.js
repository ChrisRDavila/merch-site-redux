import React from "react";
import PropTypes from "prop-types";

function Order(props) {
  const centerAlign = {
    textAlign: "center",
  };
  const singleItem = {
    textAlign: "left",
    marginLeft: "30%",
    marginRight: "30%",
    borderStyle: "solid",
    padding: "10px"
  };

  return (
    <React.Fragment>
      <br />
      <div style={singleItem} onClick={() => props.whenOrderClicked(props.id)}>
        <h3>Item: {props.item}</h3>
        <hr />
        <p>Quantity: {props.quantity}</p>
        <p>
          <em>Description: {props.description}</em>
        </p>
      </div>
    </React.Fragment>
  );
}

Order.propTypes = {
  quantity: PropTypes.number,
  item: PropTypes.string,
  description: PropTypes.string,
  inventory: PropTypes.number,
  id: PropTypes.string,
  whenOrderClicked: PropTypes.func,
};

export default Order;
