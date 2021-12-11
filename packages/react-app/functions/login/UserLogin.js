const functions = require("firebase-functions");
const { getAuth } = require("firebase-admin/auth");

const {
  createMessage,
  getUnlockConfig,
  createToken,
  verifyMessage,
  // AccountClaimReader,
  // LockContractClient,
} = require("./helpers");

const config = functions.config();
const secret = config.unlock.secret;
const unlockConfig = getUnlockConfig();
const network =
  (config.unlock ? config.unlock.network : false) ||
  unlockConfig.default_network;
console.info("Using network:", network, "for unlock");
// const networkUnlockConfig = unlockConfig.networks[network];
// const defaultClaims = unlockConfig.default_claims;

// const lockContractClient = new LockContractClient(
//   networkUnlockConfig.provider_url
// );

// const lockClaimMap = networkUnlockConfig.locks;
// const accountClaimReader = new AccountClaimReader(
//   lockContractClient,
//   lockClaimMap,
//   defaultClaims
// );

const verifyWalletOwnership = (address, messageToken, signature) => {
  const message = createMessage(messageToken, address);
  const recoveredAddress = verifyMessage(message, signature);
  // console.log(
  //   "recoveredAddress:",
  //   recoveredAddress,
  //   "address:",
  //   address,
  //   address === recoveredAddress
  // );
  return address.toLowerCase() === recoveredAddress?.toLowerCase();
};

const getLockFirebaseToken = functions.https.onCall(
  async ({ account, signature }, _) => {
    const token = createToken(account, secret);
    if (!verifyWalletOwnership(account, token, signature)) {
      throw new functions.https.HttpsError(
        "internal",
        "Encountered as issue with verification of the Metamask account"
      );
    }
    // const claims = await accountClaimReader.getAccountClaims(account);
    const claims = { wallet_owner: true };
    return await getAuth().createCustomToken(account, claims);
  }
);

const createMessageToken = functions.https.onCall(async ({ account }, _) => {
  return createToken(account, secret);
});

module.exports = {
  getLockFirebaseToken,
  createMessageToken,
};
