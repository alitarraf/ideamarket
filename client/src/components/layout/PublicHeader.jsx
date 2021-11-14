import { Link } from "react-router-dom";
import { LogoName } from "@/components/logo";

const PublicHeader = () => {
  return (
    <div className="my-4">
      <nav
        className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/">
              <LogoName />
            </Link>
          </div>
        </div>
        <div className="block text-right">
          <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
            <Link
              to="/login"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              Log in
            </Link>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default PublicHeader;
