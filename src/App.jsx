/* eslint-disable no-undef */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WelcomePage } from "./pages";
import { useState } from "react";
import Settings from "./components/Settings/Settings";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import Chat from "./pages/Chat/Chat";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import Portfolio from "./pages/Portfolio/Portfolio";
import Jobs from "./pages/Jobs/Jobs";
import Contects from "./components/Contects/Contects";
import PortfolioJob from "./components/PortfolioJob/PortfolioJob";
import UserCV from "./pages/Portfolio/components/cv";
import Videos from "./pages/videos/videosheader";
import HomePage from "./pages/homePage/HomePage";
import "./App.scss";
import ReelsPage from "./pages/reels/reelsPage/ReelsPage";
import Researches from "./pages/Portfolio/components/researches";
import SkillesInfo from "./pages/Portfolio/components/SkillesInfo";
import {
  ChooseColor,
  ChooseLanguage,
  LoginForm,
  RegisterForm,
} from "./pages/welcomePage/components";
import Notifcations from "./pages/notifications/notifications";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import CheckYourEmail from "./pages/welcomePage/components/CheckYourEmail";

function App() {
  const { user } = useSelector((state) => state.auth);

  // this is going to a stor we r just testing
  const [direction, setDirection] = useState("ltr");
  const [color, setColor] = useState("teal");
  localStorage.setItem("direction", direction);
  localStorage.setItem("color", color);
  // this is going to a stor we r just testing
  if (!localStorage.getItem("themeColor")) {
    localStorage.setItem("themeColor", "color-theme-cadetblue");
  }
  const [themeColor, setThemecolor] = useState(
    localStorage.getItem("themeColor") || "color-theme-cadetblue"
  );
  return (
    <BrowserRouter>
      <div className={`app ${color}`}>
        <ToastContainer position="top-right" />

        <Routes>
          {/* <Route path="/" element={<WelcomePage />} /> */}

          {/* <Route path="/" element={<Settings />} /> */}

          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/friends" element={<FriendsPage />} /> */}
          {/* <Route path="/" element={<Portfolio />} /> */}
          {/* <Route path="/userCV" element={<UserCV />} /> */}
          {/* <Route path="/skillesInfo" element={<SkillesInfo />} /> */}
          {/* <Route path="/researches" element={<Researches />} /> */}
          {/* <Route path="/" element={<Jobs />} /> */}
          {/* <Route path="/contect" element={<Contects />} /> */}
          {/* <Route path="/portfolioJob" element={<PortfolioJob />} /> */}
          {/* <Route path="/" element={<Videos />} /> */}
          <Route path="/reals" element={<ReelsPage />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <WelcomePage />}
          />
          <Route path="/language" element={<ChooseLanguage />} />
          <Route path="/color" element={<ChooseColor />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/checkcode" element={<CheckYourEmail />} />
          <Route
            path="/chooseColor"
            element={
              <ChooseColor
                setThemecolor={setThemecolor}
                themeColor={themeColor}
              />
            }
          />
          <Route path="/profile/posts/:id" element={<Portfolio />} />
          {/* <Route path="/notifcations" element={<Notifcations />} /> */}
          {/* <Route path="/register" element={<RegisterForm />} /> */}

          <Route path="/:name" element={user ? <HomePage /> : <LoginForm />} />
          <Route
            path="/profile/:id"
            element={user ? <Portfolio /> : <LoginForm />}
          />
          <Route path="/" element={user ? <HomePage /> : <WelcomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
