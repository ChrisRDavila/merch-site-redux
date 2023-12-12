import React from "react";
import PropTypes from "prop-types";
// import ReusableOrderForm from "./ReusableOrderForm";

function EditOrderForm(props) {
  let errorMessage = "";
  const { order, onEditOrder, itemData, updateInventory, setErrorMessage } = props;
  let selectedItemData;
  
    // Branching Logic & Form Submission
    function handleEditOrderFormSubmission(event) {
      event.preventDefault();
      const updateOrder = {
        ...order,
        quantity: parseInt(event.target.elements.quantity.value) || order.quantity,
        id: order.id
      }
      const quantity = parseInt(event.target.quantity.value);
      const selectedItemData = props.itemData.find(
        (item) => item.productType === updateOrder.item
      );
      
      
      if (quantity <= (selectedItemData.inventory + props.order.quantity)) {
        
        if (quantity <= props.order.quantity) {
          console.log("A");
          const amountReturnedToStock = order.quantity - updateOrder.quantity
          const adjustedOrder = {
            ...order,
            quantity: updateOrder.quantity
          }
          props.updateInventory(
            adjustedOrder.item,
            amountReturnedToStock
          )
          props.onEditOrder(adjustedOrder); 
          return;
        } else {
          console.log("B");
          props.onEditOrder(updateOrder);
          props.updateInventory(
            order.item,
            selectedItemData.inventory + props.order.quantity
          )
          props.updateInventory(
            updateOrder.item,
            selectedItemData.inventory - quantity
          );
        }
      } else {
        props.setErrorMessage("Can't place order, out of stock");
      }
    }



  return (
    <React.Fragment>
      <h3>Modify Order</h3>
      <br />
      <form onSubmit={handleEditOrderFormSubmission}>
        <input type="number" name="quantity" placeholder="quantity" required></input>
        <button type="submit">Modify Order</button>
      </form>
    {props.errorMessage}
    </React.Fragment>

  );
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onEditOrder: PropTypes.func,
  itemData: PropTypes.array,
  updateInventory: PropTypes.func,
  setErrorMessage: PropTypes.func
};

export default EditOrderForm;
