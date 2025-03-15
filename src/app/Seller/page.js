'use client';

import React, { useEffect, useState } from 'react';
import { getAllSellers } from '../../api/sellerData';
import SellerCard from '../../components/SellerCard';

export default function SellersPage() {
  // *set state for events
  const [sellers, setSellers] = useState([]);

  // *function to get all events
  const getAllTheSellers = () => {
    getAllSellers().then(setSellers);
  };

  // *make api call to get events
  useEffect(() => {
    getAllTheSellers();
  }, []);

  return (
    <div className="text-center my-4">
      <div className="d-flex flex-wrap">{sellers.length === 0 ? <h2>We do not have any sellers yet</h2> : sellers.map((seller) => <SellerCard key={seller.userUid} sellerObj={seller} onUpdate={getAllTheSellers} />)}</div>
    </div>
  );
}
