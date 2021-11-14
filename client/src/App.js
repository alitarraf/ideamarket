import { Route, Routes, Outlet } from "react-router-dom";

import LandingPage from "@/pages/public/Landing";
import LoginPage from "@/pages/public/Login";
import PrivacyPage from "@/pages/public/Privacy";

import SearchPage from "@/pages/app/Search";
import CreateIdeaPage from "@/pages/app/CreateIdea";
import IdeaPage from "@/pages/app/Idea";
import ProfilePage from "@/pages/app/Profile";

import { AppHeader, PublicHeader, PublicFooter } from "@/components/layout";

function App() {
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
          <Route exact path={"/app/profile"} element={<ProfilePage />} />
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
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
};
