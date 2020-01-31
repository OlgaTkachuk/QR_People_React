import {config} from '../config'

import {default as axios} from 'axios';

export const api = {
  createUser(userContext) {
    return axios.post(config.API_HOST,
      `mutation {
                createUser(userInput: ${userContext})
            }`)
  },

  authUser(userCredentials, infoToReturn) {
    return axios.post(config.API_HOST,
      `
      mutation {
       login(credentials: ${userCredentials}),
       ${infoToReturn}
      }
      `)
  }
}
