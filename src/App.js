import { Fragment, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import PromoBanner from "./Components/PromoBanner/PromoBanner";

function App() {
  const [isCartVisible, setCartVisibility] = useState(false);

  const hideCartHandler = (event) => {
    setCartVisibility(false);
  };

  const showCartHandler = (event) => {
    setCartVisibility(true);
  };

  return (
    <Fragment>
      <Header onShowCart={showCartHandler} />
      {isCartVisible && <Cart onClose={hideCartHandler} />}
      <main>
        <PromoBanner />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
