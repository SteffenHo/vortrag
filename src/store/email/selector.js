const getEmail = state => state.email;
const getEmailAddresses = state => getEmail(state).get('addresses');

export {
    getEmail,
    getEmailAddresses,
};
