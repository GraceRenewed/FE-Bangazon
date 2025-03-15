'use client';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCustomerDetails } from '../../../../api/customerData';
import CustomerProfileForm from '../../../../components/CustomerProfileForm';

export default function EditCustomer({ params }) {
  const [editCustomer, setEditCustomer] = useState({});
  const { userUid } = params;

  useEffect(() => {
    getCustomerDetails(userUid).then(setEditCustomer);
  }, [userUid]);

  return <CustomerProfileForm obj={editCustomer} />;
}

EditCustomer.propTypes = {
  params: PropTypes.objectOf({}).isRequired,
};
