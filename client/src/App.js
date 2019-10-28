import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";
import Header from "./components/Header";
import { Route, withRouter } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import ListProduct from "./components/ListProduct";
import SearchProduct from "./components/SearchProduct";
import { connect } from "react-redux";

class App extends React.Component {
  // This is the add product handler
  handleAddProduct = (e, product) => {
    e.preventDefault();
    console.log(product);
  };

  // Default render method
  render() {
    return (
      <div>
        <Header />
        <Route
          path="/addProduct"
          render={props => (
            <AddProduct {...props} addProduct={this.handleAddProduct} />
          )}
        />
        <Route
          path="/listProduct"
          render={props => <ListProduct {...props} />}
        />
        <Route
          path="/searchProduct"
          render={props => <SearchProduct {...props} />}
        />
      </div>
    );
  }
}

export default withRouter(connect(null)(App));
