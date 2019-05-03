const textstrings = {
    signIn: {
        username: 'Benutzername',
        password: 'Passwort',
        login: 'Anmelden',
    },
};

export const getTextstring = (keyArray) => {
    let stringArray = textstrings;
    for (let i = 0, len = keyArray.length; i < len; i += 1) {
        if (!stringArray[keyArray[i]]) {
            return null;
        }
        stringArray = stringArray[keyArray[i]];
    }
    return stringArray;
};

