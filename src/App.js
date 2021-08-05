import { Fragment } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import PromoBanner from "./Components/PromoBanner/PromoBanner";

function App() {
  return (
    <Fragment>
      <Header />
      <Cart />
      <main>
        <PromoBanner />
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
