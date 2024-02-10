import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./containers/LandingPage";
import Layout from "./containers/Layout/layout";
import ProductDetails from "./containers/Products";

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Routes>
      <Route
        path="/Dealdash/"
        element={
          <Layout>
            <Landing />
          </Layout>
        }
      />
      <Route
        path="/product-details/:productId"
        element={
          <Layout>
            <ProductDetails products={products} />
          </Layout>
        }
      />
    </Routes>
  );
};

export default App;
