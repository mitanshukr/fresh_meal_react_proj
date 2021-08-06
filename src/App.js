import { useState } from "react";

import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import Meals from "./Components/Meals/Meals";
import PromoBanner from "./Components/PromoBanner/PromoBanner";
import { CartProvider } from "./ContextStore/context-store";

function App() {
  const [isCartVisible, setCartVisibility] = useState(false);

  const hideCartHandler = (event) => {
    setCartVisibility(false);
  };

  const showCartHandler = (event) => {
    setCartVisibility(true);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {isCartVisible && <Cart onClose={hideCartHandler} />}
      <main>
        <PromoBanner />
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
