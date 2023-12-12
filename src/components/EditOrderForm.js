import React from "react";
import PropTypes from "prop-types";
// import NewOrderForm from "./NewOrderForm";
import ReusableOrderForm from "./ReusableOrderForm";

function EditOrderForm(props) {
  let errorMessage = "";
  const { order, onEditOrder, itemData } = props;
  let selectedItemData;
  function handleEditOrderFormSubmit(event) {
    event.preventDefault();
    const updateOrder = {
      ...order,
      quantity: parseInt(event.target.elements.quantity.value) || order.quantity,
      id: order.id
    }
    selectedItemData = props.itemData.find(
      (item) => item.productType === order.item
    );
    console.log(selectedItemData);
    
    if (updateOrder.quantity <= selectedItemData.inventory) {
      onEditOrder(updateOrder);  
    } else if 
      (updateOrder.quantity > selectedItemData.inventory) {
      errorMessage =  "Not enough stock";
      window.alert(errorMessage);
    }

  }

  return (
    <React.Fragment>
      <ReusableOrderForm
        formSubmissionHandler={handleEditOrderFormSubmit}
        buttonText="Edit"
      />
    </React.Fragment>
  );
}

EditOrderForm.propTypes = {
  order: PropTypes.object,
  onFormSubmit: PropTypes.func,
  onEditOrder: PropTypes.func,
  itemData: PropTypes.array
};

export default EditOrderForm;
// return (
//   <div>
//     {iceCream.scoops <= 0 ? (
//       <div id="iceCream">
//         <h2>Flavor: {iceCream.flavor}</h2>
//         <h3>Buckets: Out of Stock </h3>
//         <h3>Scoops: {iceCream.scoops}Out of Stock</h3>
//         <p>Scoop Price: ${iceCream.price.toFixed(2)}</p>
//         <button onClick={onHandleRestockClick}>Restock</button>
       
//       </div>
//     ) : (
//       <div id="iceCream">
//         <h2>Flavor: {iceCream.flavor}</h2>
//         <h3>Buckets: {iceCream.buckets}</h3>
//         <h3>Scoops: {iceCream.scoops} </h3>
//         <p>Scoop Price: ${iceCream.price.toFixed(2)}</p>
//         <button onClick={onHandleRestockClick}>Restock Bucket</button>
//         <button onClick={onPurchaseClick}>Sell A Scoop</button>
     
//         <hr />
//       </div>
//     )}
//   </div>
// );
// };