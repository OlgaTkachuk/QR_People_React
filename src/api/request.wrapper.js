import {config} from '../config'

import {default as axios} from 'axios';

export const api = {
  createUser(userContext) {
    return axios.post(config.API_HOST,
      `mutation {
                createUser(userInput: ${userContext})
            }`)
  },

  authUser(userCredentials) {

    const optimazeObject = objectBuilder(userCredentials);

    return axios.post(config.API_HOST,
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
