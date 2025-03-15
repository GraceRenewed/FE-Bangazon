import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllCustomers = () =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/customers`, {
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

const getCustomerDetails = (userUid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/customers/${userUid}`, {
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

const createCustomer = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/customers`, {
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

const updateCustomer = (payload) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/customers/${payload.userUid}`, {
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

const deleteCustomer = (userUid) =>
  new Promise((resolve, reject) => {
    fetch(`${endpoint}/api/customers/${userUid}`, {
      method: 'DELETE',
      headers: {
        'Conent-Type': 'application/json',
      },
    })
      .then((data) => resolve(data))
      .catch(reject);
  });

export { getAllCustomers, getCustomerDetails, createCustomer, updateCustomer, deleteCustomer };
