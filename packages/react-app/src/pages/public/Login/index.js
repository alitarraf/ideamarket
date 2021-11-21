
import { Link } from "react-router-dom";
import { LoginInstructions } from "@/components/login";
import { LogoName } from "@/components/logo";
// import { ethers } from "ethers";
import firebaseApp from "@/services/firebase";
import "firebase/auth";
import "firebase/functions";
import { signInWithWeb3 } from "@novuminsights/unlock-protocol-firebase/lib/browser";

const LoginPage = () => {
  const handleLogin = async () => {
    console.log("logingin in");
    const { ethereum } = window;
    if (ethereum) {
      console.log("connected");
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(accounts);

      // const provider = new ethers.providers.Web3Provider(ethereum);
      // console.log(provider);
      // const signer = provider.getSigner(accounts[0]);
      // console.log(signer);
    } else {
      console.log("no wallet detected");
    }
  };
  const handleTestUnlock = () => {
    console.log("test unlock");
    signInWithWeb3(firebaseApp);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
          <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/">
                <LogoName />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="border-2 py-1 px-2 rounded uppercase"
          onClick={handleLogin}
        >
          test metamask login
        </button>
        <button
          className="border-2 py-1 px-2 rounded uppercase bg-blue-400 text-white"
          onClick={handleTestUnlock}
        >
          test unlock login
        </button>
      </div>
      <LoginInstructions />
    </div>
  );
};

export default LoginPage;

