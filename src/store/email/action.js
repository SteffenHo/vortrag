import { getEmailAddresses } from './selector';

export const ADD_ADDRESS = 'ADD_ADDRESS';
export const onChangeAddresses = list => ({
    type: ADD_ADDRESS,
    payload: list,
});

export const addAddress = email => async (dispatch, getState) => {
    const state = getState();
    const addresses = getEmailAddresses(state);
    dispatch(onChangeAddresses(addresses.push(email)));
};
