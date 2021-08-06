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
  if (action.type === "ADD") {
    const updatingItemIndex = state.items.findIndex(
      (item) => action.data.id === item.id
    );
    let updatedItems = [...state.items];

    if (updatingItemIndex >= 0) {
      updatedItems[updatingItemIndex].amount += +action.data.amount;
    } else {
      // updatedItems = state.items.concat(action.data);
      updatedItems.push(action.data);
    }

    const updatedTotalPrice =
      state.totalPrice + action.data.amount * action.data.price;

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

  const removeItemFromCart = () => {};

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
