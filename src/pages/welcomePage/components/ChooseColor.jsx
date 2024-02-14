import { useState } from "react";
import { Button } from "../../../components/ui";
import { check } from "/src//assets/icons";
import { useNavigate } from "react-router-dom";
import { BsCheck2 } from "react-icons/bs";
import { t } from "i18next";
import "./language.scss";
export default function ChooseColor({ themeColor, setThemecolor }) {
  const colors = [
    "#D91E1E",
    "#C2CD3A",
    "#26D623",
    "#1067CC",
    "#8A19CF",
    "#0099AB",
  ];
  const [checked, setChecked] = useState("#0099AB");
  const navigate = useNavigate();
  const handleNextClick = () => {
    // Handle next button click
    // You can use the selectedLanguage state here
    // if (selectedLanguage) {
    // Navigate to the home page or your desired destination
    navigate("/");
    // }
  };
  return (
    // <div className="flex flex-col justify-center items-center sm:text-center gap-20 m-2  md:p-7  ">
    //   <div>
    //     <p className="text-3xl pb-12">
    //       {"Please answer those Questions To get more details" + " .."}
    //     </p>
    //     <p className="text-xl">
    //       {"What language do you prefer"}
    //       {" ?"}
    //     </p>
    //   </div>
    //   <div className="flex flex-row flex-wrap flex-1 justify-center items-center sm:gap-8 gap-4">
    //     {colors.map((button, index) => (
    //       <button
    //         key={index}
    //         className="flex flex-col justify-center items-center gap-4 border shadow-lg rounded-3xl w-32 h-32"
    //         style={{
    //           backgroundColor: button,
    //         }}
    //         onClick={() => {
    //           setChecked(button);
    //         }}
    //       >
    //         {checked === button && (
    //           <img className="w-16 h-16" src={check} alt="" />
    //         )}
    //       </button>
    //     ))}
    //   </div>
    //   <div className="flex sm:flex-row flex-col justify-center sm:justify-between items-center gap-8">
    //     <Button
    //       className="px-14 capitalize rounded-lg border-0"
    //       backgroundColor="#B9BCBE"
    //       children="back"
    //     />
    //     <Button
    //       className="px-14 capitalize rounded-lg"
    //       children="next"
    //       onClick={handleNextClick}
    //     />
    //   </div>
    // </div>
    <div className="languagePage">
      <div className="cardLanguage p-4">
        <p>{t("Please answer those Questions To get more details ..")}</p>
        <h3>{t("What color do you prefer ?")}</h3>
        <div
          className="d-flex w-100 align-items-center justify-content-center flex-wrap gap-5"
          dir="ltr"
        >
          <div
            className="ColorCardOne"
            style={{ backgroundColor: "#ff3b30" }}
            onClick={() => {
              setThemecolor("color-theme-red");
              localStorage.setItem("themeColor", "color-theme-red");
            }}
          >
            {" "}
            {themeColor === "color-theme-red" && (
              <BsCheck2 className="ti-check" />
            )}
          </div>

          <div
            className="ColorCardOne"
            style={{ backgroundColor: "#132977" }}
            onClick={() => {
              setThemecolor("color-theme-blue");
              localStorage.setItem("themeColor", "color-theme-blue");
            }}
          >
            {" "}
            {themeColor === "color-theme-blue" && (
              <BsCheck2 className="ti-check" />
            )}
          </div>
          <div
            className="ColorCardOne"
            style={{ backgroundColor: "#ff2d55" }}
            onClick={() => {
              setThemecolor("color-theme-pink");
              localStorage.setItem("themeColor", "color-theme-pink");
            }}
          >
            {" "}
            {themeColor === "color-theme-pink" && (
              <BsCheck2 className="ti-check" />
            )}
          </div>
          <div
            className="ColorCardOne"
            style={{ backgroundColor: "#ffcc00" }}
            onClick={() => {
              setThemecolor("color-theme-yellow");
              localStorage.setItem("themeColor", "color-theme-yellow");
            }}
          >
            {themeColor === "color-theme-yellow" && (
              <BsCheck2 className="ti-check" />
            )}
          </div>
          <div
            className="ColorCardOne"
            style={{ backgroundColor: "#D2691E" }}
            onClick={() => {
              setThemecolor("color-theme-brown");
              localStorage.setItem("themeColor", "color-theme-brown");
            }}
          >
            {themeColor === "color-theme-brown" && (
              <BsCheck2 className="ti-check" />
            )}
          </div>
          <div
            className="ColorCardOne"
            style={{ backgroundColor: "#0099A8" }}
            onClick={() => {
              setThemecolor("color-theme-cadetblue");
              localStorage.setItem("themeColor", "color-theme-cadetblue");
            }}
          >
            {" "}
            {themeColor === "color-theme-cadetblue" && (
              <BsCheck2 className="ti-check" />
            )}
          </div>
        </div>
        <div className="d-flex buttonsLang justify-content-between">
          <button
            className={`next ${themeColor} bg-current2`}
            onClick={() => navigate("/language")}
          >
            {t("Back")}
          </button>
          <button
            className={`next ${themeColor} bg-current2`}
            onClick={() => navigate("/")}
          >
            {t("Finish")}
          </button>
        </div>
      </div>
    </div>
  );
}
