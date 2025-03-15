'use client';

import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
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
        <Link href="/customer/new/shop" passHref>
          <Button>Shop</Button>
        </Link>
        <Link href="/seller/new/sell" passHref>
          <Button>Sell</Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
