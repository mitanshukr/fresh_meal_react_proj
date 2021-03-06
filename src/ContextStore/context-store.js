import { createContext, useReducer } from "react";

const cartContext = createContext({
  //optional: default value
  items: [],
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  let updatedItems = [...state.items];

  if (action.type === "ADD") {
    const updatingItemIndex = state.items.findIndex(
      (item) => action.data.id === item.id
    );

    if (updatingItemIndex >= 0) {
      console.log(updatedItems[updatingItemIndex].amount);
      console.log(action.data.amount);
      updatedItems[updatingItemIndex].amount += action.data.amount;
    } else {
      updatedItems.push(action.data);
      // updatedItems = state.items.concat(action.data);
    }

    const updatedTotalPrice =
      state.totalPrice + action.data.amount * action.data.price;

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE") {
    const updatingItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const updatedTotalPrice =
      state.totalPrice - updatedItems[updatingItemIndex].price;

    if (updatedItems[updatingItemIndex].amount > 1) {
      updatedItems[updatingItemIndex].amount--;
    } else {
      updatedItems.splice(updatingItemIndex, 1);
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCart = (item) => {
    dispatchCartAction({ type: "ADD", data: item });
  };

  const removeItemFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartInfo = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <cartContext.Provider value={cartInfo}>
      {props.children}
    </cartContext.Provider>
  );
};

export { cartContext, CartProvider };
