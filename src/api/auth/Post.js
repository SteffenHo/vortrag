
const getUserToken = async (username, password) => {
    // API
    setTimeout(() => ({
        value: {
            token: '',
            expires: new Date(),
        },
        status: 200,
    }), 2000);
};


export {
    getUserToken,
};
