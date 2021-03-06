import {default as axios} from 'axios';

import {config} from '../config'
import {requestHeadersEnum, tokenEnum} from '../constants'
import {checkIsUserLoggedGuard} from '../guards'

export const api = {
  createUser(userContext) {
    const userForCreate = objectBuilder(userContext);

    return axios.post(
      config.API_HOST,
      {
        query: `mutation {createUser(userInput: ${userForCreate})}`
      }
    )
  },

  addPerson(personContext) {
    const person = objectBuilder(personContext);

    return axios.post(
      config.API_HOST,
      {
        query: `mutation {createPerson(personInput:
        ${person}) {
          name
        }
        }`
      },
      {
        headers: { // TODO check token with helper
          [requestHeadersEnum.AUTHORIZATION]: localStorage.getItem(tokenEnum.ACCESS_TOKEN)
        }
      }
    )
  },

  editPersons(personArray) {
    let persons = '';

    if (personArray.length) {
      personArray.forEach(person => {
        delete person._id;
        const validPerson = objectBuilder(person);
        persons += validPerson + ', '
      })
    }

    console.log(persons);

    console.log(`mutation {editPerson(personInput: [${persons}]) {
               name,
               related_persons {
                 name,
                 _id
               }
             }
            }`);

    return axios.post(
      config.API_HOST,
      {
        query: `mutation {editPerson(personInput: [${persons}]) {
           name,
           related_persons {
             name,
             _id
           }
         }
        }`
      },
      {
        headers: { // TODO check token with helper
          [requestHeadersEnum.AUTHORIZATION]: localStorage.getItem(tokenEnum.ACCESS_TOKEN)
        }
      }
    )
  },

  getPersonalInfoByToken(token) {
    return axios.post(
      config.API_HOST,
      {
        query: `
            query {
              userByToken
              {
                _id,
                name,
                 surname,
                 phone,
                 email,
                 city,
                 role_id,
                 related_persons {
                   _id
                   name,
               surname,
                   description,
                  medical_info,
                  city
                },
                 max_persons,
                 created_at
               }
             }`
      },
      {
        headers: {
          [requestHeadersEnum.AUTHORIZATION]: token
        }
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
      mutation { login(credentials: 
        ${optimazeObject}) {
          access_token,
          refresh_token
        }
      }
      `
      })
  }
};

function objectBuilder(nonGraphObject) { // TODO Пофіксити калхоз
  let str = '{';

  const keys = Object.keys(nonGraphObject);

  keys.forEach(key => {
    str += `${key}: "${nonGraphObject[key]}", `
  });

  str += '}';

  return str;
}
