import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllProducts = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const getSingleProduct = (userUid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/${userUid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const getAllUserProducts = (userUid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/users/${userUid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          resolve(Object.values(data));
        } else {
          resolve([]);
        }
      })
      .catch(reject);
  });

const createProduct = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

const updateProduct = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/products/${payload.userUid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllProducts, createProduct, getSingleProduct, getAllUserProducts, updateProduct };
