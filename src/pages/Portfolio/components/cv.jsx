/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import cover from "../../../assets/images/cover.png";
import character from "../../../assets/images/user.png";
import Badge from "../../../assets/images/Badge.png";
import download from "../../../assets/images/download.png";
import send from "../../../assets/images/send.png";

import { useTranslation } from "react-i18next";

function UserCV() {
  const [t] = useTranslation();
  const lists = [
    { li: t("Ratings:"), span: t("4/5") },
    { li: t("Project Completion Rate:"), span: t("90.9%") },
    { li: t("Re-Employment Rate:"), span: t("77%") },
    { li: t("Time Delivery Rate:"), span: t("60%") },
    { li: t("Average Response Speed:"), span: t("1 hour") },
    { li: t("Completed Projects:"), span: 29 },
    { li: t("Working on projects:"), span: 1 },
  ];

  return (
    <section className="max-w-4xl m-auto">
      <div className="profile-card text-start  flex-wrap flex">
        <img className="img-responsive" src={cover} alt="" />
        <div className="profile-info text-center">
          <img
            className="profile-pic"
            src={character}
            alt=""
            style={{ position: "inherit", top: "-159px", left: "-1px" }}
          />

          <h1
            className="profile-title text-center"
            style={{ marginTop: "-111px" }}
          >
            User Name
          </h1>

          <h1
            className="profile-title text-center"
            style={{ fontSize: "20px", marginTop: "0.5rem" }}
          >
            {" "}
            IT Specialist
          </h1>
          <h1
            className="profile-title text-center"
            style={{ fontSize: "20px", marginTop: "0.5rem" }}
          >
            {" "}
            IT Specialist - Wey Company
          </h1>
        </div>

        <div className="col-12 d-flex justify-content-center flex-wrap flex gap-2 mt-4">
          <button
            className=" text-center text-white d-flex "
            style={{
              borderRadius: "50px ",
              backgroundColor: "rgb(0, 153, 171)",
              padding: "6px 21px",
              lineHeight: "normal",
              fontSize: "17px",
              marginRight: "15px",
            }}
          >
            {t("Download")}{" "}
            <img
              src={download}
              alt=""
              style={{ marginTop: "5px", marginLeft: "8px" }}
            />
          </button>
          <button
            className=" text-center text-white d-flex "
            style={{
              borderRadius: "50px ",
              backgroundColor: "rgb(0, 153, 171)",
              padding: "6px 21px",
              lineHeight: "normal",
              fontSize: "17px",
              marginRight: "15px",
            }}
          >
            {t("Send")}{" "}
            <img
              src={send}
              alt=""
              style={{ marginTop: "5px", marginLeft: "35px" }}
            />
          </button>
        </div>
      </div>

      <div className="projectCard contentRequest mb-3">
        <div className="add" style={{ padding: "15px 40px" }}>
          <h4 className="fw-700 text-grey-900 font-xs mt-1">
            {" "}
            {t("Statistics")}
          </h4>
          <ul className="front">
            {lists.map((list, index) => (
              <li className=" text-base	 text-grey-600 mb-2" key={index}>
                {list.li}
                <span> {list.span}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="projectCard contentRequest mb-3">
        <div className="add">
          <h4 className="fw-700 text-grey-900 font-xs mt-1">
            {" "}
            {t("About me")}
          </h4>
          <p className="text-base	 text-grey-700 py-3">
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
            vitae mattis tellus..
          </p>
        </div>
      </div>

      <div className="projectCard contentRequest mb-3">
        <div className="add" style={{ padding: "15px 40px" }}>
          <h4 className="fw-700 text-grey-900 font-xs mt-1"> {t("Skills")}</h4>
          <div className="singlePost">
            <div style={{ justifyContent: "space-between" }}>
              <button className="btn1">{t("Illustrator")}</button>

              <button className="btn2">{t("Photoshop")}</button>

              <button className="btn3">{t("Adobe Xd")}</button>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
                
                
                 @media (max-width: 500px) {
                  .profile-pic {
                    top: -95px !important;
                    max-width: 90px !important;
                    margin-bottom: 17px;
                    } 
                    .add{
                        padding: 15px 10px!important;

                    }
                    li{
                        font-size: 15px !important;

                    }
                 }

                  `}
      </style>
    </section>
  );
}

export default UserCV;
