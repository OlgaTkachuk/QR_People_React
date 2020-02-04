import {config} from '../config'
import {tokenEnum, requestHeadersEnum} from '../constants'

import {default as axios} from 'axios';

export const api = {
  createUser(userContext) {
    const userForCreate = objectBuilder(userContext);

    return axios.post(config.API_HOST,
      `mutation {
                createUser(userInput: ${userForCreate})
            }`)
  },

  logoutUser() {
    const access_token = localStorage.getItem(tokenEnum.ACCESS_TOKEN);

    if (!access_token) {
      throw new Error('No token')
    }

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
