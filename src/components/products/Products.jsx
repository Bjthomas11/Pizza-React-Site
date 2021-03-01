import React from "react";

import "./products.scss";

const Products = ({ title, data }) => {
  return (
    <div className="products-container">
      <p className="title">{title}</p>
      <div className="products-inner-container">
        {data.map((pizza, i) => (
          <div className="card" key={i}>
            <img src={pizza.img} alt={pizza.alt} />
            <div className="content">
              <p className="name">{pizza.name}</p>
              <p className="desc">{pizza.desc}</p>
              <p className="price">{pizza.price}</p>
              <button>{pizza.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
