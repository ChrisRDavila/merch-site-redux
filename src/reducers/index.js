import cartOpenReducer from './cart-open-reducer';
import cartControlReducer from './cart-control-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  cartOpen: cartOpenReducer,
  mainCartList: cartControlReducer
});

export default rootReducer;