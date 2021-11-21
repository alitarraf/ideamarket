const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// const serviceAccount = require("./unlock-integration.config.json");
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

//expose getLockFirebaseToken and createMessageToken as you would any other function

const {
  getLockFirebaseToken,
  createMessageToken,
} = require("@novuminsights/unlock-protocol-firebase/lib/server");

module.exports = {
  getLockFirebaseToken,
  createMessageToken,
};
