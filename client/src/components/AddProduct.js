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
      <div className="row"></div>
      <div className="row center-align">
        <div className="col s10 l6 m8 card offset-l3 offset-m2 offset-s1">
          <h4 className="teal-text">Add Product</h4>
          <form>
            <div className="input-field col s6 offset-s3">
              <input
                type="text"
                placeholder="Product Name"
                value={productName}
                name="productName"
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
