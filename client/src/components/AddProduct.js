import React, { useState } from "react";
import { useEffect } from "react";
import M from "materialize-css";

export default function AddProduct(props) {
  // Validation pattern
  const pattern = {
    productName: /^[a-z\s\w]{8,15}$/i,
    productId: /^[\d]{5}$/,
    effectiveDate: /.+/
  };

  // Form fields
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");

  //use effect

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", function() {
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {
        autoClose: true,
        format: "mmddyyyy"
      });
    });
  });

  const // Handler for add product
    handleAddProduct = e => {
      e.preventDefault();
      let product = { productName, productId };
      props.addProduct(e, product);
    };

  // Validating the input field
  let validateInput = (field, regex) => {
    let inputHandle = document.getElementById(field.name);
    if (regex.test(field.value)) {
      inputHandle.className = "valid";
    } else {
      inputHandle.className = "invalid";
    }
  };

  // Default return
  return (
    <div className="container">
      <div className="row"></div>

      <h5 className="teal-text">Add Product</h5>
      <form>
        <div className="row">
          {/* PRODUCT NAME - ONLY WORDS AND SPACE*/}
          <div className="input-field col s12 m4 l4">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              name="productName"
              id="productName"
              onChange={e => {
                validateInput(e.target, pattern.productName);
                setProductName(e.target.value);
              }}
            />
            <p className="orange-text left-align">
              Should be between 8 to 15 characters
            </p>
          </div>

          {/* PRODUCT ID - ONLY NUMBERS */}
          <div className="input-field col s12 m4 l4">
            <input
              type="text"
              placeholder="Product Id"
              value={productId}
              name="productId"
              id="productId"
              onChange={e => {
                validateInput(e.target, pattern.productId);
                setProductId(e.target.value);
              }}
            />
            <p className="orange-text left-align">Should be 5 digit number</p>
          </div>

          {/* EFFECTIVE DATE - MANDATORY */}
          <div className="input-field col s12 m4 l4">
            <input
              type="text"
              placeholder="Effective Date"
              value={effectiveDate}
              name="effectiveDate"
              id="effectiveDate"
              className="datepicker"
              onChange={e => {
                validateInput(e.target, pattern.effectiveDate);
                setEffectiveDate(e.target.value);
              }}
            />
            <p className="orange-text left-align">Should be 5 digit number</p>
          </div>
        </div>
        <div className="row">
          <button className="btn" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
