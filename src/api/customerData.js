import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

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

export default getCustomerDetails;
