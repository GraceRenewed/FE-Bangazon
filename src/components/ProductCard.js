'use client';

import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
// import Link from 'next/link';
// import { useAuth } from '../utils/context/authContext';

function ProductCard({ productsObj }) {
  // const { user } = useAuth();

  // * For getting user owned products
  // const isOwner = !productsObj.id || productsObjObj.userUid === user.userUid;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={productsObj.imageUrl} style={{ height: '100px' }} />
      <Card.Body>
        <Card.Title>{productsObj.name}</Card.Title>
        <Card.Text>{productsObj.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

ProductCard.propTypes = {
  productsObj: PropTypes.shape({
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    description: PropTypes.string,
    quantity: PropTypes.number,
    price: PropTypes.number,
    seller: PropTypes.string,
    id: PropTypes.number,
    userUid: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
