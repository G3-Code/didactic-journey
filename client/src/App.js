import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";
import SearchProduct from "./components/SearchProduct";

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/addProduct" render={props => <AddProduct {...props} />} />
      <Route path="/listProduct" render={props => <ListProduct {...props} />} />
      <Route
        path="/searchProduct"
        render={props => <SearchProduct {...props} />}
      />
    </div>
  );
}

export default App;
