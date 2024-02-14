import React from "react";
import profilePic from "../../assets/images/Picture.png";
import delet from "../../assets/images/delete.png";
import "./BoxNotification.scss";
import { BiBorderRadius } from "react-icons/bi";
import { useTranslation } from "react-i18next";
function BoxNotification() {
  const [t] = useTranslation();

  return (
    <>
      <div className="box__notification">
        <div className="box__notification__title rounded">
          <img src={profilePic} alt="profile " style={{ borderRadius: "2.25rem" }} />
          <div
            className="box__notification__title__info"
            style={{
              fontWeight: "700", color: "#0F1419"
            }}
          >
            <h4 className=" "> Darlene Robertson</h4>
            <span style={{ fontWeight: "400", color: "#0F1419" }} className="w-100 d-block">
              {" "}
              Tom  {t("is in a big hurry.")}
            </span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span
            style={{

              fontSize: "14px",
              fontWeight: "400",
              letterSpacing: "1px",
              color: "#AEAEB2",
            }}
          >
            10:32{t("am")}
          </span>
        </div>
      </div>
      <hr />
    </>
  );
}

export default BoxNotification;
