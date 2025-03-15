import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getSellerDetails = (userUid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/sellers/${userUid}`, {
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

const createSeller = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/sellers`, {
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

const updateSeller = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/sellers/${payload.userUid}`, {
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

const deleteSeller = (userUid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/sellers/${userUid}`, {
      method: 'DELETE',
      headers: {
        'Conent-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getSellerDetails, createSeller, updateSeller, deleteSeller };
