import {tokenEnum} from '../constants'

export const checkIsUserLoggedGuard = () => {
  const isTokenPresent = localStorage.getItem(tokenEnum.ACCESS_TOKEN);

  if (!isTokenPresent) {
    alert('ERROR DIALOG WINDOW');
    return  false
  }

  return isTokenPresent
};
