import React from "react";
import PropTypes from "prop-types";

 function PriceCalculator(props) {
  let calculatedPrice = 0;
  console.log(props.cartList)
  Object.values(props.cartList).map((product) => {
    const selectedItemData = props.itemData.find(
      (item) => item.productType === product.item
    );
    console.log(selectedItemData);
    calculatedPrice += selectedItemData.pricePerUnit * product.quantity;
  });
  
  const centerAlign = {
    textAlign: "center"
  }

  return (
    <React.Fragment>
      <p style={centerAlign}>Total Price: ${calculatedPrice}</p>
    </React.Fragment>
  )
}

PriceCalculator.propTypes = {
  cartList: PropTypes.object,
  itemData: PropTypes.array
};

export default PriceCalculator