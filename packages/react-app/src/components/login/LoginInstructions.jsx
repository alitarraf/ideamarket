import { Link } from "react-router-dom";
import firebaseApp from "@/services/firebase";
import { signInWithWeb3 } from "@/utils/login/index.ts";

const LoginInstructions = () => {
  const login = () => {
    signInWithWeb3(firebaseApp);
  };
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        {/* <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            How to Login
          </h2>
        </div> */}
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div
            onClick={() => login()}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-md align-center cursor-pointer"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">
                    Login with MetaMask
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {/* {post.description} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Link to="/app">
            <div className="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-md align-center cursor-pointer">
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Or Just Check Out Ideas
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {/* {post.description} */}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginInstructions;
