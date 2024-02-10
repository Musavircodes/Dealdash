import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ products }: any) => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const dispatch = useDispatch();

  const product = products.find(
    (product: any) => product.id.toString() === productId
  );

  if (!product) {
    navigate("/");
    return null;
  }
  const handleAddToCart = () => {
    console.log("Adding to cart:", product);
    dispatch(addToCart(product));
  };

  return (
    <div className="container p-0" style={{ backgroundColor: "#fff" }}>
      <div className="row m-0">
        <h2
          className="p-0 m-0 py-2 text-center"
          style={{ backgroundColor: "#fff" }}
        >
          {product.title}
        </h2>
        <div className="col-md-12 p-0">
          <Carousel>
            {product.images.map((image: string, index: number) => (
              <Carousel.Item key={index}>
                <div
                  style={{
                    backgroundColor: "white",
                    textAlign: "center",
                    maxHeight: "400px",
                  }}
                >
                  <img
                    className="d-block w-100 "
                    src={image}
                    alt={`Slide ${index + 1}`}
                    style={{
                      maxHeight: "400px",
                      objectFit: "contain",
                      verticalAlign: "middle",
                    }}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div
          className="col-md-12"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
          }}
        >
          <div className="d-flex flex-column   justify-content-center align-items-center">
            <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
              {product.description}
            </p>
            <div>
              <h4>Price: ${product.price}</h4>
              <h4>Rating: {product.rating}</h4>
            </div>
          </div>
          <div className="d-flex justify-content-between pt-4">
            <button
              className="btn btn-secondary ml-2"
              onClick={() => navigate("/")}
            >
              Go Back
            </button>

            <Button
              variant="warning"
              style={{ backgroundColor: "yellow", color: "black" }}
              onClick={handleAddToCart}
            >
              <FontAwesomeIcon icon={faShoppingCart} className="me-1" /> Add to
              Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
