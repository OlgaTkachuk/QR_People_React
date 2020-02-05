import {default as axios} from 'axios';

import {config} from '../config'
import {requestHeadersEnum} from '../constants'
import {checkIsUserLoggedGuard} from '../guards'

export const api = {
  createUser(userContext) {
    const userForCreate = objectBuilder(userContext);

    return axios.post(
      config.API_HOST,
      {
        query: `mutation {createUser(userInput: {${userForCreate}})}`
      }
    )
  },

  logoutUser() {
    const access_token = checkIsUserLoggedGuard();

    return axios.post(
      config.API_HOST,
      {
        query: `mutation {logout}`
      },
      {
        headers: {
          [requestHeadersEnum.AUTHORIZATION]: access_token
        }
      }
    )
  },

  authUser(userCredentials) {
    const optimazeObject = objectBuilder(userCredentials);

    return axios.post(
      config.API_HOST,
      {
        query: `
      mutation { login(credentials: {
        ${optimazeObject}
      }) {
          access_token,
          refresh_token
        }
      }
      `
      })
  }
};

function objectBuilder(nonGraphObject) {
  let str = '';

  const keys = Object.keys(nonGraphObject);

  keys.forEach(key => {
    str += `${key}: "${nonGraphObject[key]}", `
  });

  return str;
}
