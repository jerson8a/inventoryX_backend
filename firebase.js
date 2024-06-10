var admin = require("firebase-admin");
var serviceAccount = require("./ServiceAccount");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount.serviceAccountCnf)
});


/* inventory-x-7eeb2-firebase-adminsdk-bnptt-e361549587 */

module.exports = {
    admin
}