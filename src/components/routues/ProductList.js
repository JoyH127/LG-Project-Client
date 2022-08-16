import React from "react";
import { useEffect, useState } from "react";
import apiUrl from "../../apiConfig";
import axios from "axios";
import ProductCard from "./ProductCard";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const fetchProduct = async () => {
    try {
      const response = await axios(`${apiUrl}/product`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const renderProduct = () => {
    return products.map((product, index) => {
      const { model_code, model_name, user_friednly_name, model_desc, msrp } =
        product;
      return (
        <ProductCard
          model_code={model_code}
          model_name={model_name}
          user_friendly_name={user_friednly_name}
          model_desc={model_desc}
          msrp={msrp}
        />
      );
    });
  };

  console.log(products);
  return (
    <>
      <div className="container">{renderProduct()}</div>
    </>
  );
}
