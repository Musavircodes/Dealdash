import React, { useState, useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductGrid = ({ products }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true); // New state
  const maxItemsInRows = 10;

  const searchValue = useSelector((state: RootState) => state.search.value);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredProducts = products.filter((product: { title: string }) =>
    product.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const rows = Math.ceil(maxItemsInRows / 2);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  useEffect(() => {
    setIsLoading(false); // Once component is mounted, set isLoading to false
  }, []);

  const renderRows = () => {
    const rowsToRender = [];
    for (let i = 0; i < rows; i++) {
      const startIdx = i * 5;
      const endIdx = Math.min(startIdx + 5, currentItems.length);
      const cardsInRow = currentItems.slice(startIdx, endIdx);
      if (cardsInRow.length > 0) {
        rowsToRender.push(
          <div key={i} className="row row-cols-2 row-cols-md-5 p-3">
            {cardsInRow.map((product: any, index: any) => (
              <div key={index} className="col mb-4">
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/product-details/${product.id}`}
                >
                  {" "}
                  <div className="card h-100 product-card">
                    <img
                      src={product.thumbnail}
                      className="card-img-top"
                      alt={product.title}
                      style={{ height: "150px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title" style={{ fontSize: "1.2rem" }}>
                        {product.title}
                      </h5>
                    </div>
                    <div className="d-flex justify-content-between p-2">
                      <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        Price: ${product.price}
                      </p>
                      <p className="card-text" style={{ fontSize: "0.9rem" }}>
                        Rating: {product.rating}
                      </p>
                    </div>
                    <button className="btn btn-secondary mt-auto ">
                      Explore
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        );
      }
    }
    return rowsToRender;
  };

  return (
    <div className="pagination-container">
      {isLoading ? null : filteredProducts.length === 0 ? (
        <div className="d-flex justify-content-center align-items-center p-5">
          <h3>No Products Found</h3>
        </div>
      ) : (
        <>
          {renderRows()}
          <div className="d-flex justify-content-center">
            <Pagination>
              {Array.from({ length: totalPages }, (_, i) => (
                <Pagination.Item
                  key={i}
                  active={currentPage === i + 1}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductGrid;

interface RootState {
  search: {
    value: string;
  };
}
