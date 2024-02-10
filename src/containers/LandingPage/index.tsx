import React, { useEffect, useState } from "react";
import ProductGrid from "../../components/Products";
import SlideShow from "../../components/SlideShow";

const Landing = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();

        const slicedProducts = data.products.slice(0, 9);
        setProducts(data.products);
        setFilteredProducts(slicedProducts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-0 container landing-pg">
      <SlideShow data={filteredProducts} />
      <ProductGrid products={products} />
    </div>
  );
};

export default Landing;
