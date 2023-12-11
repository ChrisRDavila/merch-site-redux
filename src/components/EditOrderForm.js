import React from "react";
import PropTypes from "prop-types";
// import NewOrderForm from "./NewOrderForm";
import ReusableOrderForm from "./ReusableOrderForm";

function EditOrderForm(props) {
  const { order, onEditOrder, itemData } = props;
  function handleEditOrderFormSubmit(event) {
    event.preventDefault();
    const updateOrder = {
      ...order,
      quantity: parseInt(event.target.elements.quantity.value) || order.quantity,
      id: order.id
    }
    onEditOrder(updateOrder);
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
};

export default EditOrderForm;
