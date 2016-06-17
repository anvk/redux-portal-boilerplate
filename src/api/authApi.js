import Promise from 'promise';

export const ROLE_ADMIN = 1;
const minutes = 10;

const response = {
  email: 'abovebluesky@gmail.com',
  name: 'Alexey Novak',
  expiry: undefined,
  authRole: ROLE_ADMIN,
  jwt: '123456'
};

export function authenticate(email, password) {
  return new Promise((resolve, reject) => {
    if (email !== 'test' || password !== 'test') {
      return reject('login failed');
    }

    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + minutes);

    resolve({
      ...response,
      expiry
    });
  });
}
