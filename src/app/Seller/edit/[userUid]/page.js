'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SellerProfileForm from '../../../../components/SellerProfileForm';
import { getSellerDetails } from '../../../../api/sellerData';

// setup function that allows a Seller to be edited
export default function EditSeller({ params }) {
  const [editItem, setEditItem] = useState({});
  // grabs the userUid
  const { userUid } = params;

  // makes a call to the API to get the Venue data
  useEffect(() => {
    getSellerDetails(userUid).then(setEditItem);
  }, [userUid]);

  // pass object to form
  return <SellerProfileForm obj={editItem} />;
}

EditSeller.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
