'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createSeller, updateSeller } from '../api/sellerData';

// clears out the form after the user submits the form
const initialState = {
  sellerUserName: '',
  email: '',
  imageUrl: '',
  city: '',
  stateOrCountry: '',
};

// pulls in user and object details
function SellerProfileForm({ obj = initialState }) {
  const { user } = useAuth();
  const [sellerDetails, setSellerDetails] = useState(initialState);
  const router = useRouter();

  // brings venue data in for editing the venue
  useEffect(() => {
    if (obj.userUid) setSellerDetails(obj);
  }, [obj]);

  // Grants access to the event object, destructing the name and the value of the form input
  const handleSellerUpdate = (e) => {
    const { name, value } = e.target;
    // calling setVenueDetails modifying prevState and spreading it
    setSellerDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // when submit button is pressed this function runs and prevents page from reloading
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...sellerDetails, userUid: user.userUid };
    // if the object already has an id then the updateVenues function is called router pushes the updated information to the venues page-else it creates a new venue
    if (obj.id) {
      updateSeller(payload).then(() => router.push(`/api/sellers`));
    } else {
      createSeller(payload).then(() => {
        router.push(`/api/sellers`);
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="text-black">
      <h2 className="text-white mt-5">{obj.userUid ? 'Update' : 'Create'} Seller Account</h2>

      <FloatingLabel controlId="floatingInput1" label="Seller User Name" className="mb-3">
        <Form.Control type="text" placeholder="User Name" name="sellerUserName" value={sellerDetails.sellerUserName} onChange={handleSellerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="email" className="mb-3">
        <Form.Control type="email" placeholder="E-mail" name="email" value={sellerDetails.email} onChange={handleSellerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput3" label="Seller Image" className="mb-3">
        <Form.Control type="url" placeholder="Enter a store image url" name="imageUrl" value={sellerDetails.imageUrl} onChange={handleSellerUpdate} />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="City" className="mb-3">
        <Form.Control type="text" placeholder="Enter your city" name="city" value={sellerDetails.city} onChange={handleSellerUpdate} required />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput4" label="State or Country" className="mb-3">
        <Form.Control type="text" placeholder="Enter your state or Country" name="stateOrCountry" value={sellerDetails.stateOrCountry} onChange={handleSellerUpdate} required />
      </FloatingLabel>

      <Button type="submit">{obj.userUid ? 'Update' : 'Create'} Seller Profile </Button>
    </Form>
  );
}

SellerProfileForm.propTypes = {
  obj: PropTypes.shape({
    sellerUserName: PropTypes.string,
    email: PropTypes.string,
    imageUrl: PropTypes.string,
    city: PropTypes.string,
    stateOrCountry: PropTypes.string,
    userUid: PropTypes.string,
  }),
};

export default SellerProfileForm;
