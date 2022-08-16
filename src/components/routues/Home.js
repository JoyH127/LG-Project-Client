import { useEffect, useState } from "react";
import ProductCard from "./ProductList";
export default function Home() {
  return (
    <>
      <div>
        <p>product list</p>
        <ProductCard />
      </div>
    </>
  );
}
