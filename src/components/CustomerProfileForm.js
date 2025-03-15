'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createCustomer, updateCustomer } from '../api/customerData';

// clears out the form after the user submits the form
const initialState = {
  customerUserName: '',
  imageUrl: '',
  firstName: '',
  lastName: '',
  email: '',
  address: '',
  city: '',
  state: '',
  zip: '',
};

// pulls in user and object details
function CustomerProfileForm({ obj = initialState }) {
  const { user } = useAuth();
  const [customerDetails, setCustomerDetails] = useState(initialState);
  const router = useRouter();

  // brings venue data in for editing the customer
  useEffect(() => {
    if (obj.userUid) setCustomerDetails(obj);
  }, [obj]);

  // Grants access to the customer object, destructing the name and the value of the form input
  const handleCustomerUpdate = (e) => {
    const { name, value } = e.target;
    // calling setCustomerDetails modifying prevState and spreading it
    setCustomerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function runs and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...customerDetails, userUid: user.userUid };
    // if the object already has an id then the updateCustomer function is called router pushes the updated information to the customer page-else it creates a new customer
    if (obj.id) {
      updateCustomer(payload).then(() => router.push(`/api/customers/`));
    } else {
      createCustomer(payload).then(() => {
        router.push(`/api/customers/`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.userUid ? 'Update' : 'Create'} Customer Account</h2>

      <FloatingLabel controlId="floatingInput1" label="Customer User Name" className="mb-3">
        <Form.Control type="text" placeholder="User Name" name="customerUserName" value={customerDetails.customerUserName} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Customer Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter a user image url" name="imageUrl" value={customerDetails.imageUrl} onChange={handleCustomerUpdate} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="First Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter your first name" name="firstName" value={customerDetails.firstName} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Last Name" className="mb-3">
        <Form.Control type="text" placeholder="Enter your last name" name="lastName" value={customerDetails.lastName} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="email" className="mb-3">
        <Form.Control type="email" placeholder="E-mail" name="email" value={customerDetails.email} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Address" className="mb-3">
        <Form.Control type="text" placeholder="Enter your address" name="address" value={customerDetails.address} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="City" className="mb-3">
        <Form.Control type="text" placeholder="Enter your city" name="city" value={customerDetails.city} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="State" className="mb-3">
        <Form.Control type="text" placeholder="Enter your state" name="state" value={customerDetails.state} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="Zip Code" className="mb-3">
        <Form.Control type="number" placeholder="Enter your zip code" name="zip" value={customerDetails.zip} onChange={handleCustomerUpdate} required />
      </FloatingLabel>

      <Button type="submit">{obj.userUid ? 'Update' : 'Create'} Customer Profile </Button>
    </Form>
  );
}

CustomerProfileForm.propTypes = {
  obj: PropTypes.shape({
    customerUserName: PropTypes.string,
    imageUrl: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.number,
    userUid: PropTypes.string,
  }),
};

export default CustomerProfileForm;
