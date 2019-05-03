import { fromJS } from 'immutable';
import {GET_TOKEN} from "./actions";

const initialState = fromJS({
    token: '',
    expires: new Date()
});

const auth = (state = initialState, action) => {
    switch (action.type) {
    case GET_TOKEN: {
        localStorage.setItem('token_user', fromJS(action.payload));
        return state.set('token', fromJS(action.payload.token)).set('expires', fromJS(action.payload.expires));
    }
    default:
        return state;
    }
};

export default auth;
