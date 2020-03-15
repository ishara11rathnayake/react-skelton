import React, { useReducer } from "react";
const axios = require("axios");

const Product = () => {
  const [product, setProduct] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      name: "",
      price: ""
    }
  );

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/products", {
        name: product.name,
        price: product.price
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleChange = e => {
    const product1 = e.target.name;
    const newValue = e.target.value;
    setProduct({ [product1]: newValue });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={e => handleChange(e)}
          />
        </label>
        <label>
          Price:
          <input
            type="text"
            value={product.price}
            name="price"
            onChange={e => handleChange(e)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Product;
