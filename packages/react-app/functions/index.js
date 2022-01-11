const { initializeApp } = require("firebase-admin/app");
const app = initializeApp({
  serviceAccountId: "tidai-app@appspot.gserviceaccount.com",
});

module.exports = {
  // user login and creation
  ...require("./login/UserLogin"),
  ...require("./login/UserCreated"),
};
