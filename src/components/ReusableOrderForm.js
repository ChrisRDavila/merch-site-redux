import React from "react";
import PropTypes from "prop-types";

function ReusableOrderForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="number" name="quantity" placeholder="quantity"></input>
        <button type="submit">{props.buttonText}</button>
      </form>
      {props.errorMessage}
    </React.Fragment>
  );
}

ReusableOrderForm.propTypes = {
  onNewOrderCreation: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableOrderForm;
