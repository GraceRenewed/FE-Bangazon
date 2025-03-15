'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getAllUserProducts } from '../../api/productData';
import { useAuth } from '../../utils/context/authContext';
import ProductCard from '../../components/ProductCard';

export default function ProductsPage() {
  // set state for products
  const [products, setProducts] = useState([]);

  const { user } = useAuth();

  // fuction to get products
  const getAllTheProducts = () => {
    getAllUserProducts(user.uid).then(setProducts);
    console.log(user.uid);
  };

  // make api call to get products
  useEffect(() => {
    getAllTheProducts();
  }, [user]);

  return (
    <div className="text-center my-4">
      <Link href="/products/new" passHref>
        <Button>Add Product</Button>
      </Link>
      <div className="d-flex flex-wrap">{products.length === 0 ? <h2>You have not added any products</h2> : products.map((product) => <ProductCard key={product.id} productsObj={product} onUpdate={getAllTheProducts} />)}</div>
    </div>
  );
}
