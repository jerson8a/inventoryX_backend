const { getAuth } = require('firebase-admin/auth');
const { admin } = require('./firebase');

async function createUserEmail (email, password) {
    try {
        return getAuth()
            .createUser({
                email,
                emailVerified: false,
                password,
                displayName: '',
                disabled: false,
            })
            .then((userRecord) => {
                return {
                    code: userRecord.uid, 
                    message: 'Successfully created new user',
                };
            })
            .catch((error) => {
                return {
                    code: '0',
                    message: error.errorInfo.message,
                }
            })
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    createUserEmail,
}
