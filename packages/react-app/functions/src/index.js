// const functions = require("firebase-functions");
const admin = require("firebase-admin");

const serviceAccount = require("./../tidai-app-firebase-adminsdk-m6s1m-5548916642.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// expose getLockFirebaseToken and createMessageToken as you would any other function

const {
  getLockFirebaseToken,
  createMessageToken,
} = require("@novuminsights/unlock-protocol-firebase/lib/server");

module.exports = {
  getLockFirebaseToken,
  createMessageToken,
};
