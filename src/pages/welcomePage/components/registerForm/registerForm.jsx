import { useEffect, useState } from "react";
import { Button, Input } from "../../../../components/ui";
import { close } from "../../../../assets/images/icons";
import "./RegisterForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { t } from "i18next";
import StaticSection from "../staticSection/staticSection";

export default function RegisterForm({ pickLogin }) {
  const [userName, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let user = {
      user_name: userName,
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      password: password,
      password_confirmation: password_confirmation,
    };

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setLoading(true);

      // Send data to the backend using axios
      const response = await axios.post(`${URL}/api/register`, user, config);

      console.log(response.data.msg);

      navigate("/checkcode", { state: { email } });
    } catch (error) {
      // Handle errors
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const [hasUppercase, setHasUppercase] = useState(false);
  const [hasLowercase, setHasLowercase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const validatePassword = (value) => {
    const hasUppercaseLetter = /[A-Z]/.test(value);
    const hasLowercaseLetter = /[a-z]/.test(value);
    const hasNumberDigit = /[0-9]/.test(value);

    setHasUppercase(hasUppercaseLetter);
    setHasLowercase(hasLowercaseLetter);
    setHasNumber(hasNumberDigit);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const [conditions, setConditions] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const sectionText = t("JOIN US NOW");

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

          <div className="RegisterFormWrapper">
            <form
              className="registerForm"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <p className="registerForm__header">
                {t("Login to your Account")}
              </p>

              <Input
                label={t("User Name")}
                inputID="username"
                type="text"
                name="username"
                placeholder={"ex.moAli@12"}
                className="p-2"
                required={true}
                value={userName}
                handleChange={(e) => setUserName(e.target.value)}
              />
              <div className="registerForm__row">
                <Input
                  label={t("First name")}
                  inputID="first_name"
                  type="text"
                  name="first_name"
                  placeholder={"ex.ali"}
                  className="p-2"
                  required={true}
                  value={first_name}
                  handleChange={(e) => setFirstName(e.target.value)}
                />

                <Input
                  label={t("Last name")}
                  inputID="last_name"
                  type="text"
                  name="last_name"
                  placeholder={"ex.mohamed"}
                  className="p-2"
                  required={true}
                  value={last_name}
                  handleChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="registerForm__row">
                <Input
                  label={t("Email")}
                  inputID="email"
                  type="email"
                  name="email"
                  placeholder={"ex.ali@gmail.com"}
                  className="p-2"
                  required={true}
                  value={email}
                  handleChange={(e) => setEmail(e.target.value)}
                />

                <Input
                  label={t("Phone number")}
                  inputID="phone"
                  type="tel"
                  name="phone"
                  className="p-2"
                  required={true}
                  value={phone}
                  handleChange={(e) => setPhone(e.target.value)}
                />
              </div>

              <Input
                label={t("Password")}
                inputID="loginPassword"
                type="password"
                name="password"
                placeholder={"Password"}
                className="p-2"
                required={true}
                value={password}
                handleChange={handlePasswordChange}
              />

              <Input
                label={t("Confirm password")}
                inputID="password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder={"Password"}
                className="p-2"
                required={true}
                value={password_confirmation}
                handleChange={(e) => setPassword_confirmation(e.target.value)}
              />

              <div className="registerForm__validation p-5">
                {!hasUppercase && (
                  <div className="conditions">
                    <img src={close} alt="" />
                    <p>{t("doesn`t contain a capital letter")}</p>
                  </div>
                )}

                {!hasLowercase && (
                  <div className="conditions">
                    <img src={close} alt="" />
                    <p>{t("doesn`t contain a small letter")}</p>
                  </div>
                )}

                {!hasNumber && (
                  <div className="conditions">
                    <img src={close} alt="" />
                    <p>{t("doesn`t contain a number")}</p>
                  </div>
                )}

                <div className="flex justify-start">
                  <Input
                    label={t(
                      "I agree to the terms and conditions and privacy policy"
                    )}
                    inputID="conditions"
                    type="checkbox"
                    className="p-2"
                    name="conditions"
                    onClick={() => setConditions(!conditions)}
                  />
                </div>
              </div>

              {loading ? (
                <Button
                  children={t("Sign Up")}
                  type="submit"
                  className="p-2 rounded-xl"
                />
              ) : (
                <Button
                  children={t("Sign Up")}
                  type="submit"
                  className="p-2 rounded-xl"
                />
              )}
            </form>

            <p className="footer">
              {t("Have an account?")}{" "}
              <span onClick={pickLogin}> {t("Log in")} </span>
            </p>
          </div>
        </>
      </div>
    </section>
  );
}
