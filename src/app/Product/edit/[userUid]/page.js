'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProductForm from '../../../../components/CreateProductForm';
import { getSingleProduct } from '../../../../api/productData';

// setup function that allows a product to be edited
export default function EditProduct({ params }) {
  const [editItem, setEditItem] = useState({});
  // grabs the id
  const { userUid } = params;

  // makes a call to the API to get the product data
  useEffect(() => {
    getSingleProduct(userUid).then(setEditItem);
  }, [userUid]);

  // pass object to form
  return <ProductForm obj={editItem} />;
}

EditProduct.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
