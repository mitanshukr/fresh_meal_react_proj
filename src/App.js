import { Fragment } from "react";
import "./App.css";

import Header from "./Components/Layout/Header";
import PromoBanner from "./Components/PromoBanner/PromoBanner";

function App() {
  return (
    <Fragment>
      <Header />
      <PromoBanner />
    </Fragment>
  );
}

export default App;
