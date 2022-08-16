import { useEffect, useState } from "react";
import Search from "./Search";
import ProductCard from "./ProductList";
export default function Home() {
  return (
    <><Search />
      <div>
        <ProductCard />
      </div>
    </>
  );
}
