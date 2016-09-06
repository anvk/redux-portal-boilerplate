import Promise from 'promise';
import {
  getExpiryTime,
  ROLE_ADMIN,
  ROLE_USER
} from '../reducers/auth.js';

//-------------------------------------------------------------//
//    This is just a stub with some hardcoded users            //
//-------------------------------------------------------------//
const users = [
  {
    email: 'alexey.novak.mail@gmail.com',
    username: 'anvk',
    password: 'user',
    name: 'Alexey Novak (User)',
    expiry: undefined,
    authRole: ROLE_USER,
    jwt: '123456'
  },
  {
    email: 'alexey.novak.mail@gmail.com',
    username: 'anvk',
    password: 'admin',
    name: 'Alexey Novak (Admin)',
    expiry: undefined,
    authRole: ROLE_ADMIN,
    jwt: '123456'
  }
];

export function authenticate(email = '', password = '') {
  return new Promise((resolve, reject) => {

    //-------------------------------------------------------------//
    //    Your code with user check against API goes here          //
    //-------------------------------------------------------------//

    const user = users.find(user => {
      return (
        (
          user.email.toLowerCase() === email.toLowerCase() ||
          user.username === email
        )
        && user.password === password
      );
    });

    if (!user) {
      return reject('login failed');
    }

    // TBD: Put a delay FOR NOW to see button interaction
    setTimeout(() => resolve({ ...user, expiry: getExpiryTime() }), 1000);
  });
}
