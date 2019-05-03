export const getAuth = state => state.auth;
export const getUserToken = state => getAuth(state).get('token');
