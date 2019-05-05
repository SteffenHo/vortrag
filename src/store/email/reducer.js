import { fromJS, List } from 'immutable';
import { ADD_ADDRESS } from './action';

const initialState = fromJS({
    addresses: new List(),
});

const email = (state = initialState, action) => {
    switch (action.type) {
    case ADD_ADDRESS: {
        return state.set('addresses', action.payload);
    }
    default:
        return state;
    }
};

export default email;
