import { Link } from "react-router-dom";
import { LoginInstructions } from "@/components/login";
import { LogoName } from "@/components/logo";

const LoginPage = () => {
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
      <LoginInstructions />
    </div>
  );
};

export default LoginPage;
