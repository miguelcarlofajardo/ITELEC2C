import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import React, { useState } from "react";

function Product(props) {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="col-md-3">
      <div className="product-card">
        <div className="product-card-img">
          <label className="stock bg-success">In Stock</label>
          <img src={props.motorObj.picture} alt="Motorcycle" />
        </div>
        <div className="product-card-body">
          <p className="product-brand">{props.motorObj.brand}</p>
          <h5 className="product-name">
            <a href=""> {props.motorObj.title} </a>
          </h5>
          <div>
            <span className="selling-price">${props.motorObj.price}</span>
            <span className="original-price">$7999999</span>
          </div>
          <div className="mt-2">
            <a href="" className="btn btn1">
              Add To Cart
            </a>

            <button
              type="button"
              className="btn btn1"
              onClick={toggleSelection}
            >
              {" "}
              {/**/}
              {isSelected ? <FaHeart /> : <CiHeart />}
            </button>

            <a href="" className="btn btn1">
              {" "}
              View{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
