/* eslint-disable no-unused-vars */
/* eslint-disable */
import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(
        photoResponse.body,
        userResponse.firstName,
        userResponse.lastName
      );
    })
    .catch(error => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;
