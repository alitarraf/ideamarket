const { Contract, ethers, Signer } = require("ethers");
const { Provider } = require("@ethersproject/abstract-provider");
const configPath = `./unlock-integration.config.json`;

const createMessage = (messageToken, userAccount) => {
  const token = `Using special token: ${messageToken}`;
  return `Tidai wants you to sign in with your Ethereum account: ${userAccount}\n\n${token}\n\nURI: https://communft.web.app/\nVersion: 1\nNonce: upb3hamw`;
};

const getUnlockConfig = () => {
  return require(configPath);
};

const createToken = (account, secret) => {
  const message = ethers.utils.hashMessage(`${account}::${secret}`);
  // console.log(`createToken(${account}, ${secret}) -> ${message}`);
  return message;
};

const verifyMessage = (message, signature) => {
  try {
    return ethers.utils.verifyMessage(message, signature);
  } catch (e) {
    console.error(e);
  }
};

class AccountClaimReader {
  constructor(lockContractClient, lockClaimMap, defaultClaims) {
    this.lockContractClient = lockContractClient;
    this.lockClaimMap = lockClaimMap;
    this.defaultClaims = defaultClaims || [];
  }
  async getAccountClaims(account) {
    const locks = Object.keys(this.lockClaimMap);
    const accountLocks = await this.#getAccountHasValidKeys(account, locks);
    const lockClaims = accountLocks.flatMap((lock) => this.lockClaimMap[lock]);
    const claims = [...this.defaultClaims, ...lockClaims];
    return Object.fromEntries(claims.map((claim) => [claim, true]));
  }

  #getAccountHasValidKeys(account, locks) {
    return this.lockContractClient.accountHasValidKeys(account, locks);
  }

  async #accountHasValidKey(account, lock) {
    return await this.lockContractClient.accountHasValidKey(account, lock);
  }
}

class LockContractClient {
  provider = Signer | Provider;
  constructor(providerNetwork, providerOptions) {
    this.provider = ethers.getDefaultProvider(providerNetwork, providerOptions);
  }
  async accountHasValidKey(account, lockAddress) {
    const lockContract = this.#getLockContract(lockAddress);
    return await lockContract.getHasValidKey(account);
  }
  async accountHasValidKeys(account, lockAddresses) {
    const promises = lockAddresses.map((lock) =>
      this.accountHasValidKey(account, lock)
    );
    const results = await Promise.all(promises);
    return lockAddresses.filter((_, index) => results[index]);
  }
  #getLockContract(lockAddress) {
    return new Contract(
      lockAddress,
      ["function getHasValidKey(address _owner) constant view returns (bool)"],
      this.provider
    );
  }
}

module.exports = {
  createMessage,
  getUnlockConfig,
  createToken,
  verifyMessage,
  AccountClaimReader,
  LockContractClient,
};
