import {getUserToken} from "../../api/auth/Post";

export const GET_TOKEN = 'GET_TOKEN';
export const getToken = (token, expires) => ({
    type: GET_TOKEN,
    payload: {token, expires},
    });

export const receiveTokenFromServer = (username, password) => async (dispatch) => {
    console.log('login', {username, password});
    const { value } = await getUserToken(username, password);
    const { token, expires } = value;

    dispatch(getToken(token, expires));
};
