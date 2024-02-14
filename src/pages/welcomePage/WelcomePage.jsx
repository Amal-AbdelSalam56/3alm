import { useState } from "react";
import {
  StaticSection,
  ActionSection,
  RegisterForm,
  LoginForm,
  ForgetPassword,
  ChooseLanguage,
  ChooseColor,
} from "./components";
import CheckYourEmail from "./components/CheckYourEmail";
import ResetYourPassword from "./components/ResetYourPassword";
import PasswordChanged from "./components/PasswordChanged";
import "./WelcomePage.scss";
import { t } from "i18next";

export default function WelcomePage() {
  const lang = localStorage.getItem("direction");
  const [currentState, setCurrentState] = useState("action");
  const [isRegistering, setIsRegistering] = useState(false);
  // const [currentState, setCurrentState] = useState("login");

  const sectionText =
    currentState === "login" ? t("WELCOME BACK!") : t("JOIN US NOW");

  const pickLogin = () => {
    setCurrentState("login");
  };

  const pickRegister = () => {
    setCurrentState("register");
  };

  return (
    <section className={`welcomePageWrapper ${isRegistering ? "" : ""}`}>
      {/* <PasswordChanged /> */}

      <div
        className={`welcomePage grid rounded-[3rem] shadow-2xl ${
          isRegistering ? "grid-cols-1 sm:w-3/4 " : "grid-cols-2"
        }`}
      >
        <>
          {isRegistering ? <></> : <StaticSection sectionText={sectionText} />}

          <>
            {/* not connected to the routs yet yet */}
            {/* <ForgetPassword /> */}
            {/* <CheckYourEmail /> */}
            {/* <ResetYourPassword /> */}
            {/* <ChooseLanguage /> */}
            {/* <ChooseColor /> */}
          </>

          <>
            {currentState === "action" && (
              <ActionSection
                pickLogin={pickLogin}
                pickRegister={pickRegister}
              />
            )}
            {currentState === "login" && (
              <LoginForm pickRegister={pickRegister} />
            )}
            {currentState === "register" && (
              <RegisterForm
                pickLogin={pickLogin}
                setIsRegistering={setIsRegistering}
              />
            )}
          </>
        </>
      </div>
    </section>
  );
}
