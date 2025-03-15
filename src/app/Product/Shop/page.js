'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllProducts } from '../../../api/productData';
import ProductCard from '../../../components/ProductCard';

function Shop() {
  // *set state for Products
  const [products, setProducts] = useState([]);

  // *function that makes the API call to get all Products
  const getAllTheProducts = () => {
    getAllProducts().then(setProducts);
  };

  // *API call to get allProducts on component to render
  useEffect(() => {
    getAllTheProducts();
  }, []);

  return (
    <div className="text-center my-4">
      <Link href="/products/new" passHref>
        <Button>Add a Product</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {products.map((product) => (
          <ProductCard key={product.id} ProductsObj={product} onUpdate={getAllTheProducts} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
