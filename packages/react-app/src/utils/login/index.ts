import { getFunctions, httpsCallable } from "firebase/functions";
import { getAuth, signInWithCustomToken } from "firebase/auth";
declare let window: any;
let _web3: any;

function createMessage(messageToken: string, userAccount: string) {
  const token = `Using special token: ${messageToken}`;
  return `Tidai wants you to sign in with your Ethereum account: ${userAccount}\n\n${token}\n\nURI: https://communft.web.app/\nVersion: 1\nNonce: upb3hamw`;
}

// Sign-In With Ethereum Example Statement

// URI: https://login.xyz
// Version: 1
// Nonce: upb3hamw
// Issued At: 2021-12-08T21:28:36.977Z
// Expiration Time: 2021-12-10T21:28:36.971Z
// Chain ID: 4

async function getCloudFunction(app: any, name: string) {
  const functions = getFunctions(app);
  return httpsCallable(functions, name);
}

async function getFirebaseToken(app: {}, userAccount: string) {
  const createMessageToken = await getCloudFunction(app, "createMessageToken");
  const messageTokenPromise = createMessageToken({ account: userAccount });
  const getLockFirebaseToken = await getCloudFunction(
    app,
    "getLockFirebaseToken"
  );
  const messageToken: any = (await messageTokenPromise).data;
  const signature = await sign(userAccount, messageToken);
  return getLockFirebaseToken({ account: userAccount, signature });
}

async function sign(userAccount: string, messageToken: string) {
  // console.log("**********SIGN FUNCTION**********");
  const message = createMessage(messageToken, userAccount);
  // console.log(message);
  return _web3.request({
    method: "personal_sign",
    params: [userAccount, message],
  });
}

async function getSelectedAddress() {
  if (!_web3.selectedAddress) {
    await window.ethereum.request({
      method: "eth_requestAccounts",
    });
  }
  return _web3.selectedAddress;
}

export async function signInWithWeb3(app: any) {
  _web3 = (window as any).ethereum;
  if (!_web3)
    throw new Error(
      "No provider found. " +
        "Please install a provider (e.g. Metamask) or user an Ethereum capable browser."
    );
  const userAccount = await getSelectedAddress();
  if (!userAccount) throw new Error("No selected Address");
  const firebaseToken: any = await getFirebaseToken(app, userAccount);
  const auth = getAuth(app);
  return signInWithCustomToken(auth, firebaseToken.data);
}
