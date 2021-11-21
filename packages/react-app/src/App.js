import { useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import firebase from "./services/firebase";

import { setUserLogin } from "./store/user/userSlice";
import { useDispatch } from "react-redux";

import LandingPage from "@/pages/public/Landing";
import LoginPage from "@/pages/public/Login";
import PrivacyPage from "@/pages/public/Privacy";

import SearchPage from "@/pages/app/Search";
import CreateIdeaPage from "@/pages/app/CreateIdea";
import IdeaPage from "@/pages/app/Idea";
import ProfilePage from "@/pages/app/Profile";

import { AppHeader, PublicHeader, PublicFooter } from "@/components/layout";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        firebase
          .auth()
          .currentUser.getIdTokenResult()
          .then(function ({ claims }) {
            // console.log(claims);
            dispatch(
              setUserLogin({
                uid: claims.user_id,
              })
            );
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
  }, [dispatch]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route exact path={"/"} element={<LandingPage />} />
          <Route exact path={"/privacy"} element={<PrivacyPage />} />
        </Route>

        <Route exact path={"/login"} element={<LoginPage />} />

        <Route path="/app" element={<AppLayout />}>
          <Route exact path={"/app"} element={<SearchPage />} />
          <Route exact path={"/app/create"} element={<CreateIdeaPage />} />
          <Route exact path={"/app/idea/:id"} element={<IdeaPage />} />
          <Route exact path={"/app/profile/:id"} element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const PublicLayout = () => {
  return (
    <div>
      <PublicHeader />
      <Outlet />
      <PublicFooter />
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="bg-gray-200">
      <div className="sm:h-1/12">
        <AppHeader />
      </div>
      <div className="mt-4 sm:mt-0 sm:h-11/12 sm:overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};
