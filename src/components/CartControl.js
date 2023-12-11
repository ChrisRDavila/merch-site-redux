import React from "react";
import Widget from "./Widget.js";
import CartList from "./CartList.js";
import NewOrderForm from "./NewOrderForm.js";
import OrderDetail from "./OrderDetail.js";
import EditOrderForm from "./EditOrderForm.js";
import PriceCalculator from "./PriceCalculator.js";
import { connect } from 'react-redux';

class CartControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartOpen: false,
      selectedOrder: null,
      errorMessage: "",
      editing: false,
      itemData: [
        {
          productType: "album",
          description:
            "A vinyl record of the band's latest album.  Comes with a digital download.",
          pricePerUnit: 20,
          inventory: 50
        },
        {
          productType: "shirt",
          description: "A t-shirt with the band's logo on it.",
          pricePerUnit: 15,
          inventory: 45
        },
        {
          productType: "button",
          description: "A button with the band's logo on it.",
          pricePerUnit: 1,
          inventory: 33
        },
      ],
    };
  }

  handleEditClick = () => {
    console.log("handleEditClick!!");
    this.setState({ editing: true });
  };



  setErrorMessage = (message) => {
    this.setState({ errorMessage: message });
  };

  updateInventory = (productType, newInventory) => {
    this.setState((prevState) => ({
      itemData: prevState.itemData.map((item) =>
        item.productType === productType
          ? { ...item, inventory: newInventory }
          : item
      ),
    }));
    console.log(`Remaining stock of ${productType}: ${newInventory}`);
  };

  toggleCartVisibility = () => {
    if (this.state.selectedOrder != null) {
      this.setState({
        cartOpen: false,
        selectedOrder: null,
      });
    } else {
      this.setState((oldState) => ({
        cartOpen: !oldState.cartOpen,
      }));
    }
  };

  handleAddingNewOrderToList = (newOrder) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = newOrder;
    const action = {
      type: 'ADD_ORDER',
      id: id,
      name: name,
      description: description,
      quantity: quantity,
    }
    dispatch(action);
    this.setState({ cartOpen: false });
  };

  handleChangingSelectedOrder = (id) => {
    const selectedOrder = this.state.mainCartList.filter(
      (order) => order.id === id
    )[0];
    this.setState({ selectedOrder: selectedOrder });
  };

  handleEditingOrderInList = (orderToEdit) => {
    const { dispatch } = this.props;
    const { id, name, description, quantity } = orderToEdit;
    const action = {
      type: 'EDIT_ORDER',
      id: id,
      name: name,
      description: description,
      quantity: quantity
    }
    dispatch(action);
    this.setState({ editing: false, selectedOrder: null})
  };

  handleDeletingOrder = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({ selectedOrder: null })
  }

  // handleDeletingOrder = (id) => {
  //   const newMainCartList = this.state.mainCartList.filter(
  //     (order) => order.id !== id
  //   );
  //   this.setState({
  //     mainCartList: newMainCartList,
  //     selectedOrder: null,
  //   });
  // };

  render() {
    

    // Stylesheets
    const cartStyles = {
      // backgroundColor: "#61dafb",
      textAlign: "center"
    }

    // Branching for Current View
    let currentView = null;
    if (this.state.editing === true) {
      currentView = (
        <EditOrderForm
          order={this.state.selectedOrder}
          onEditOrder={this.handleEditingOrderInList}
          itemData={this.state.itemData}
        />
      );
    } else if (this.state.selectedOrder != null) {
      currentView = (
        <React.Fragment>
          <OrderDetail
            order={this.state.selectedOrder}
            onClickingDelete={this.handleDeletingOrder}
            onClickingEdit={this.handleEditClick}
            onClickingBackToCart={this.toggleCartVisibility}
          />
        </React.Fragment>
      );
    } else if (this.state.cartOpen === false) {
      currentView = (
        <NewOrderForm
          onNewOrderCreation={this.handleAddingNewOrderToList}
          updateInventory={this.updateInventory}
          itemData={this.state.itemData}
          errorMessage={this.state.errorMessage}
          setErrorMessage={this.setErrorMessage}
        />
      );
    } else {
      currentView = (
        <React.Fragment>
        
        <div style={cartStyles}>
          <h3>Your Cart</h3>
          <CartList
            cartList={this.state.mainCartList}
            onOrderSelection={this.handleChangingSelectedOrder}
          />
          <PriceCalculator 
            cartList={this.state.mainCartList}
            itemData={this.state.itemData}
            />
        </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <Widget
          itemCount={this.state.mainCartList.length}
          onClickEvent={this.toggleCartVisibility}
        />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        {currentView}
      </React.Fragment>
    );
  }
}

CartControl = connect()(CartControl);

export default CartControl;


