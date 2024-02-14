/* eslint-disable react/prop-types */
import "./userProfile.css";
import img from "../../../assets/images/drake.jpg";

import { AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";

function UserProfile({ infoActive, setInfoActive, setInfo }) {
  const toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  const themeColor = localStorage.getItem("themeColor");
  const [t] = useTranslation();

  return (
    <div
      className="main__userprofile"
      style={infoActive ? { right: "0" } : { right: "107%" }}
    >
      <AiOutlineArrowRight
        className={`font-xl text-current cursor-pointer backInfo ms-2 ${themeColor} `}
        onClick={() => {
          setInfo(false);
          setInfoActive(false);
        }}
      />
      <div className="p-3 text-center">
        <h3>{t("USERINFORMATION")}</h3>
      </div>
      <div className="profile__card user__profile__image">
        <div className="profile__image mb-3">
          <img src={img} />
        </div>
        <h4 className=" mb-2">Fernando Faucho</h4>
        <p className=" mb-3">{t("Delete Conversation")} </p>
      </div>
      <div className="profile__card">
        <div className="card__header" onClick={toggleInfo}>
          <h4>{t("Shared Photoes")}</h4>
          <i className="fa fa-angle-down"></i>
        </div>
        <div className="card w-100 shadow-xss rounded-xxl border-0 mt-3 mb-3">
          <div className="card-body d-block pt-0 pb-2">
            <div className="row">

              {[...Array(6)].map((_, index) => (
                <div className="w-2/4 mb-2 p-2 " key={index}>
                  <div data-lightbox="roadtrip">
                    <img
                      src={img}
                      alt=""
                      className="img-fluid rounded-3 w-100"
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
          <div className="card-body d-block w-100 pt-0">
            <div className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl">
              <i className="feather-external-link font-xss ms-2" /> {t("More")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
