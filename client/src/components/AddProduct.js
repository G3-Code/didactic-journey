import React, { useState } from "react";

export default function AddProduct(props) {
  // Validation pattern
  const pattern = {
    productName: /^[a-z\s\w]{8,15}$/i,
    productId: /^[\d]{5}$/,
    effectiveDate: /.+/,
    productType: /^(Convenience|Shopping|Speciality|Unsought)$/
  };

  // Form fields
  const [productName, setProductName] = useState("");
  const [productId, setProductId] = useState("");
  const [effectiveDate, setEffectiveDate] = useState("");
  const [productType, setProductType] = useState("default");
  let productTypes = ["Convenience", "Shopping", "Speciality", "Unsought"];

  const // Handler for add product
    handleAddProduct = e => {
      e.preventDefault();
      let product = { productName, productId, effectiveDate, productType };
      let validNodes = document.querySelectorAll(".valid");
      let inputNodes = document.querySelectorAll(".prod-input");
      if (validNodes.length === inputNodes.length) {
        // next step
        props.addProduct(e, product);
      } else {
        // display error
        inputNodes.forEach(input => {
          if (!input.classList.contains("valid")) {
            input.classList.add("invalid");
          }
        });
      }
    };

  // Validating the input field
  let validateInput = (field, regex) => {
    let inputHandle = document.getElementById(field.name);
    if (regex.test(field.value)) {
      inputHandle.classList.remove("invalid");
      inputHandle.classList.add("valid");
    } else {
      inputHandle.classList.remove("valid");
      inputHandle.classList.add("invalid");
    }
  };

  // Default return
  return (
    <div className="container">
      <div className="row"></div>

      <h5 className="teal-text">Add Product</h5>
      <form>
        {/* ROW 1 */}
        <div className="row">
          {/* PRODUCT NAME - ONLY WORDS AND SPACE*/}
          <div className="input-field col s12 m4 l4">
            <input
              type="text"
              placeholder="Product Name"
              value={productName}
              name="productName"
              id="productName"
              className="prod-input"
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
              className="prod-input"
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
              type="date"
              placeholder="Effective Date"
              value={effectiveDate}
              name="effectiveDate"
              id="effectiveDate"
              className="prod-input"
              onChange={e => {
                validateInput(e.target, pattern.effectiveDate);
                setEffectiveDate(e.target.value);
              }}
            />
            <p className="orange-text left-align">Should be 5 digit number</p>
          </div>
        </div>
        {/* ROW 2 */}
        <div className="row">
          <div className="input-field col s12 l4 m4">
            <select
              name="productType"
              id="productType"
              defaultValue={productType}
              className="browser-default prod-input"
              onChange={e => {
                validateInput(e.target, pattern.productType);
                setProductType(e.target.value);
              }}
            >
              <option value="default">Choose Product Type</option>
              {productTypes.map((prodType, index) => (
                <option key={index} value={prodType}>
                  {prodType}
                </option>
              ))}
            </select>
            <p className="orange-text left-align">
              Please select a Product Type
            </p>
          </div>

          <div className="input-field col s12 l4 m4">
            <div className="switch prod-input">
              <label>
                Off
                <input type="checkbox" />
                <span className="lever"></span>
                On
              </label>
            </div>
            <p className="orange-text left-align">
              Please select a Product Type
            </p>
          </div>
        </div>
        {/* BUTTON ROW - LAST */}
        <div className="row">
          <button className="btn" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}
