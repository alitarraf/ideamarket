import { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { LogoName } from "@/components/logo";
import { Address } from "@/components/elements";
import { selectCurrentUser, setSignOut } from "@/store/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import firebaseApp from "@/services/firebase";
import { getAuth, signOut } from "firebase/auth";
import { signInWithWeb3 } from "@/utils/login/index.ts";
import { ethers } from "ethers";
import Davatar from "@davatar/react";

const auth = getAuth();

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AppHeader = () => {
  const [provider, setProvider] = useState(null);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const loginUser = async () => {
    if (provider) {
      signInWithWeb3(firebaseApp);
    } else {
      alert("Please install MetaMask to be able to Login");
    }
  };

  const logoutUser = async () => {
    navigate("/");
    signOut(auth);
    dispatch(setSignOut());
  };

  useEffect(() => {
    const { ethereum } = window;
    if (ethereum) {
      setProvider(new ethers.providers.Web3Provider(ethereum));
    }
  }, []);

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex px-2 lg:px-0">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/app">
                    <LogoName />
                  </Link>
                </div>
              </div>
              {/* <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end"></div> */}

              {currentUser.uid ? (
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <div className="flex items-center lg:hidden">
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="hidden lg:ml-4 lg:flex lg:items-center">
                    <button
                      type="button"
                      className="flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    <Menu as="div" className="ml-4 relative flex-shrink-0">
                      <div>
                        <Menu.Button className="bg-white rounded-full flex text-sm focus:outline-none">
                          <span className="sr-only">Open user menu</span>
                          {provider && (
                            <Davatar
                              size={36}
                              provider={provider}
                              address={currentUser.uid}
                            />
                          )}
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/app/profile/1"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                onClick={() => logoutUser()}
                                type="button"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                                )}
                              >
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                  <button
                    onClick={() => {
                      loginUser();
                    }}
                    className=" justify-center items-center px-2 rounded-md focus:outline-none font-medium border-2 h-10 w-20 hover:bg-gray-600 hover:text-white"
                  >
                    Login
                  </button>
                </div>
              )}
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  {provider && (
                    <Davatar
                      size={36}
                      provider={provider}
                      address={currentUser.uid}
                    />
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">
                    <Address address={currentUser.uid} shortened />
                  </div>
                  <div className="text-sm font-medium text-gray-500"></div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/app/profile/1"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Your Profile
                </Disclosure.Button>
                <Disclosure.Button
                  as="a"
                  href="#"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign out
                </Disclosure.Button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default AppHeader;
