'use client';

import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

function Home({ obj }) {
  const router = useRouter();

  const handleSellerNavigation = () => {
    if (obj.userUid) {
      router.push(`/seller/edit/${obj.userUid}`);
    } else {
      router.push('/seller/new');
    }
  };

  const handleCustomerNavigation = () => {
    if (obj.userUid) {
      router.push(`/customer/edit/${obj.userUid}`);
    } else {
      router.push('/customer/new');
    }
  };

  return (
    <div>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h2>Welcome to Your Pet Store!</h2>
        <h3>What would you like to do today?</h3>
      </div>

      <div className="text-center my-4">
        <Button onClick={handleCustomerNavigation}>{obj.userUid ? 'Update Customer Account' : 'Create Seller Account'}</Button>

        <Button onClick={handleSellerNavigation}>{obj.userUid ? 'Update Seller Account' : 'Create Seller Account'}</Button>
      </div>
    </div>
  );
}

Home.propTypes = {
  obj: PropTypes.shape({
    userUid: PropTypes.string,
  }),
};

export default Home;
