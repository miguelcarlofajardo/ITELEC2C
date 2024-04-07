import Product from "./Product";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import motorcycleProducts from "./motorData";
import "@fortawesome/fontawesome-free/css/all.min.css";

function ProductList() {
  const motors = motorcycleProducts;

  return (
    <div className="py-3 py-md-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4 className="mb-4">Our Products</h4>
          </div>
          {/* add product here */}
          {motors.map((motor) => (
            <Product motorObj={motor} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
