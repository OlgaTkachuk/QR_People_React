import {ActionTypeEnum} from '../constants';

const toggleAuth = () => ({
    isLogged: false
});

const auth = (state, action) => {
    switch (action.type) {
        case ActionTypeEnum.LOGIN:
            return toggleAuth().isLogged = true;
        case ActionTypeEnum.LOGOUT:
            return toggleAuth().isLogged = false;
        default:
            return state;
    }
};


export default auth
