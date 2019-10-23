import React, { useState } from "react";

export default function AddProduct() {
  const [productName, setProductName] = useState("");

  const handleChange = e => {
    e.persist();
    switch (e.target.name) {
      case "productName": {
        setProductName(e.target.value);
        break;
      }
      default: {
        console.log(e.target.name);
      }
    }
  };
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s12 l4 m6 card offset-l4">
          <h4 className="teal-text">Add Product</h4>
          <form>
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              name="productName"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
