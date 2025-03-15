'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createProduct, updateProduct } from '../api/productData';

// clears out the form after the user submits the form
const initialState = {
  sellerUserUid: '',
  name: '',
  quantity: '',
  price: '',
  description: '',
  imageUrl: '',
};
// pulls in user and object details
function ProductForm({ obj = initialState }) {
  const { user } = useAuth();
  const [productDetails, setProductDetails] = useState(initialState);
  const router = useRouter();

  // brings product data in for editing the product
  useEffect(() => {
    if (obj.id) setProductDetails(obj);
  }, [obj]);

  // Grants access to the event object, destructing the name and the value of the form input
  const handleProductUpdate = (e) => {
    const { name, value } = e.target;
    // calling setVenueProduct
    setProductDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function is run and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...productDetails, uid: user.uid };
    // if the object already has an id then the updateProducts function is called router pushes the updated information to the products page-else it creates a new product
    if (obj.id) {
      updateProduct(payload).then(() => router.push(`products/`));
    } else {
      createProduct(payload).then(() => {
        router.push(`/products/`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Product</h2>

      <FloatingLabel controlId="floatingInput1" label="name" className="mb-3">
        <Form.Control type="text" placeholder="name" name="name" value={productDetails.name} onChange={handleProductUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="quantity" className="mb-3">
        <Form.Control type="number" placeholder="Quantity" name="quantity" value={productDetails.quantity} onChange={handleProductUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="description" className="mb-3">
        <Form.Control type="text" placeholder="Description" name="description" value={productDetails.description} onChange={handleProductUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="price" className="mb-3">
        <Form.Control type="number" placeholder="Price" name="price" value={productDetails.price} onChange={handleProductUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="imageUrl" className="mb-3">
        <Form.Control type="string" placeholder="Image Url" name="imageUrl" value={productDetails.price} onChange={handleProductUpdate} required />
      </FloatingLabel>

      <Button type="submit">{obj.userUid ? 'Update' : 'Create'} Product</Button>
    </Form>
  );
}

ProductForm.propTypes = {
  obj: PropTypes.shape({
    sellerUserUid: PropTypes.string,
    name: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
  }),
};

export default ProductForm;
