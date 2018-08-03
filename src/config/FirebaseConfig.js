const admin = require('firebase-admin');
const serviceAccount = require('../../serviceAccountKey.json');
const config = {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://shipdn-59257.firebaseio.com"
};
admin.initializeApp(config);
const getDatabase = function () {
    return admin.database();
};
module.exports.admin = admin;
module.exports.getDatabase = getDatabase;
return module.exports;