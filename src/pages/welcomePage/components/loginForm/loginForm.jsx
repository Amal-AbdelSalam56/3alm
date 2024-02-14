import { Button, Input } from "../../../../components/ui";
import { google } from "../../../../assets/images/icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginSocialGoogle } from "reactjs-social-login";
import "./loginForm.scss";
import React from "react";
import axios from "axios";
import { t } from "i18next";
import { loginUser } from "../../../../rtk/slices/authSlice";
import StaticSection from "../staticSection/staticSection";

export default function LoginForm({ pickRegister }) {
  const [isRemembered, setIsRemembered] = useState(
    !!localStorage.getItem("remembered")
  );

  const [email, setEmail] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData")).email
      : ""
  );

  const [password, setPassword] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData")).password
      : ""
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, error } = useSelector((state) => state.auth);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (error) navigate("/login");
    // redirect authenticated user to profile screen
    if (user) navigate("/home");
  }, [navigate, user, error]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = {
      email,
      password,
    };
    console.log(user);
    setLoading(true);
    dispatch(loginUser({ user, setLoading }));
    // try {
    // } finally {
    setLoading(false);
    // }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   let user = {
  //     email,
  //     password,
  //   };

  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       "https://3lm.wearher-from-mimi.com/api/login",
  //       user,
  //       config
  //     );

  //     console.log(response.data.msg);

  //     navigate("/home");
  //   } catch (error) {
  //     // Handle errors
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    if (isRemembered) {
      const rememberData = JSON.parse(localStorage.getItem("loginData"));
      setTimeout(() => {
        setEmail(rememberData.email);
        setPassword(rememberData.password);
      }, 500);
    }
  }, [isRemembered]);
  
  const [isRegistering, setIsRegistering] = useState(false);
  const sectionText = t("WELCOME BACK!");
  return (
    <section className={`welcomePageWrapper `}>
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

          <div className="LoginFormWrapper">
            <form
              className="LoginForm"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <p className="LoginForm__header">{t("Login to your Account")}</p>

              <Input
                label={t("Email")}
                inputID="loginEmail"
                type="text"
                name="email"
                className="p-2"
                placeholder={t("Email address")}
                value={email}
                required={true}
                handleChange={(e) => setEmail(e.target.value)}
              />

              <Input
                label={t("Password")}
                inputID="loginPassword"
                type="password"
                name="password"
                className="p-2"
                placeholder={t("Password")}
                value={password}
                required={true}
                handleChange={(e) => setPassword(e.target.value)}
              />

              <div className="options">
                <Input
                  label={t("remember me?")}
                  inputID="remember"
                  type="checkbox"
                  name="remember"
                  className="p-2"
                  checked={isRemembered}
                  onChange={() => {
                    setIsRemembered(!isRemembered);
                  }}
                />
                <Link to="/">{t("forgot password?")}</Link>
              </div>
              <div className="w-full">
                {loading ? (
                  <Button className="w-full p-2" children={t("Log in")} />
                ) : (
                  <Button className="w-full p-2" children={t("Log in")} />
                )}
              </div>
            </form>

            <LoginSocialGoogle
              className="w-full"
              client_id={
                "103849065619-02aba1s3mfaium8commo7668jo9febof.apps.googleusercontent.com"
              }
              scope="openid profile email"
              discoveryDocs="claims_supported"
              access_type="offline"
              onResolve={({ provider, data }) => {
                dispatch(loginGoogle(data));
                console.log(provider, data);
              }}
              onReject={(err) => {
                console.log(err);
              }}
            >
              <Button
                className="flex w-full justify-center items-center p-2"
                backgroundColor="#233142"
              >
                <img src={google} alt="" />
                <p>{t("Continue with Google")}</p>
              </Button>
            </LoginSocialGoogle>

            <p className="footer">
              {t("Don't have an account?")}
              <span onClick={() => navigate("/register")}>{t("Sign Up")}</span>
            </p>
          </div>
        </>
      </div>
    </section>
  );
}
