import { useState } from "react";
import "./Contects.scss";
import { useTranslation } from "react-i18next";
// import Modal from "@mui/material/Modal";
import Picture from "../../assets/images/Picture.png";
import close1 from "../../assets/images/x.png";
import { AiOutlineCloudDownload } from "react-icons/ai";
import filter from "../../assets/images/filter.png";
import { Modal } from "../ui";

function Contects() {
  // const [active, setActive] = useState("Home");
  // const [activeRightbar, setActiveRightbar] = useState(false);
  const [activeOffer, setActiveOffer] = useState(false);
  const [menuPost, setMenuPost] = useState(false);
  const [modalOpened, setModalOpened] = useState(false);
  const [t] = useTranslation();
  const [myfile, setmyFile] = useState("");
  const [showFile, setShowFile] = useState();

  const groups = [
    {
      label: t("Delivery Term"),
      type: "text",
      placeholder: t("Delivery Term"),
    },
    { label: t("Offer Value"), type: "text", placeholder: t("Offer Value") },
    { label: t("Your dues"), type: "text", placeholder: t("Your dues") },

    { label: t("Details"), type: "textarea", placeholder: t("Details") },
  ];

  const lists = [
    { li: t("Date Of Publication"), span: t("منذ 6 دقائق") },
    { li: t("Budget"), span: t("50$ - 100$") },
    { li: t("Implementation Period"), span: t("1 يوم") },
    { li: t("averageOffers"), span: t("70$") },
    { li: t("numberOfOffers"), span: 2 },
  ];

  return (
    <>
      <div className="sectionCenter max-w-4xl m-auto">
        <div className="contents">
          <div className="contentRequest" style={{ margin: "30px 5px" }}>
            <div className="add">
              <p
                style={{
                  color: "#25324B",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <img src={Picture} alt="" />
                {t("Brand Designer")}
              </p>
              <p
                className="sm:px-14"
                style={{
                  color: "#7C8493",
                  marginTop: "-14",
                }}
              >
                I need a designer to make two logos and branding
              </p>
              <div className="singlePost py-4 flex-wrap">
                <div className="sm:px-12 pb-2 sm:pb-0">
                  <button className="btn1">{t("Illustrator")}</button>

                  <button className="btn2">{t("Photoshop")}</button>

                  <button className="btn3">{t("Adobe Xd")}</button>
                </div>

                <button className="btn4" onClick={() => setModalOpened(true)}>
                  {t("Add Your Offer")}
                </button>
              </div>
            </div>
          </div>

          <div className="projectCard contentRequest">
            <div className="add" style={{ padding: "15px 40px" }}>
              <h4 className="fw-700 text-grey-900 font-xs mt-1">
                {t("Project Card")}
              </h4>
              <ul>
                {lists.map((list, index) => (
                  <li
                    className=" font-sm fw-500 mt-1 lh-3 text-grey-600"
                    key={index}
                  >
                    {list.li}
                    <span> {list.span}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="projectCard contentRequest">
            <div className="add" style={{ padding: "15px 40px" }}>
              <h4 className="fw-700 text-grey-900 font-xs mt-1">
                {t("projectDescription")}
              </h4>
              <p className="font-sm fw-500 mt-1 lh-3 text-grey-700">
                Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                massa mi. Aliquam in hendrerit urna. Pellentesque sit amet
                sapien fringilla, mattis ligula consectetur, ultrices mauris.
                Maecenas vitae mattis tellus..
              </p>
            </div>
          </div>

          <div className="projectCard contentRequest">
            <div className="add" style={{ padding: "15px 40px" }}>
              <h4 className="fw-700 text-grey-900 font-xs mt-1">
                {t("Required Skills")}
              </h4>
              <div className="singlePost">
                <div style={{ justifyContent: "space-between" }}>
                  <button className="btn1">{t("Illustrator")}</button>

                  <button className="btn2">{t("Photoshop")}</button>

                  <button className="btn3">{t("Adobe Xd")}</button>
                </div>
              </div>
            </div>
          </div>

          <div className="projectCard contentRequest">
            <div className="add" style={{ padding: "15px 40px" }}>
              <div
                className="d-flex top justify-content-between mb-3 flex-wrap"
                style={{
                  borderBottom: "1px solid rgba(153, 153, 153, 0.5019607843)",
                }}
              >
                <h3 className="fw-700 text-grey-900 font-xs mt-1">
                  {t("offersSubmitted")}
                </h3>
                <button
                  className="bg-primary-gradiant text-white position-relative"
                  onClick={() => setMenuPost(!menuPost)}
                >
                  <img className="filtericon" src={filter} alt="" />
                  {/* {
                    <div
                      className={
                        // menuPost
                        //   ?
                        "dropdown-menu-post card "
                        // : "dropdown-menu-post card active"
                      }
                    >
                      <ul className="d-flex flex-column rounded-xxxl">
                        <li className="fw-700 text-grey-900 font-sms d-flex gap-3 p-2 cursor-pointer ">
                          {t("themostrecent")}
                        </li>
                        <li className="fw-700 text-grey-900 font-sms d-flex gap-3 p-2 cursor-pointer ">
                          {t("oldest")}
                        </li>
                        <li className="fw-700 text-grey-900 font-sms d-flex gap-3 p-2 cursor-pointer ">
                          {t("faster")}
                        </li>
                        <li className="fw-700 text-grey-900 font-sms d-flex gap-3 p-2 cursor-pointer ">
                          {t("cheapest")}
                        </li>
                      </ul>
                    </div>
                  } */}
                </button>
              </div>
              {[...Array(3)].map((_, index) => (
                <div
                  className="info mb-3"
                  key={index}
                  style={{
                    borderBottom: "1px solid rgba(153, 153, 153, 0.5019607843)",
                  }}
                >
                  <div className="card-body p-0 d-flex">
                    <figure className="avatar ms-3">
                      <img
                        src={Picture}
                        alt=""
                        className="shadow-sm rounded-circle w45"
                      />
                    </figure>
                    <h5 className="fw-700 text-grey-900 font-sm mt-1">
                      Anthony Daugloi
                      <span className="d-block font-sm fw-500 mt-1 lh-3 text-grey-500">
                        {t("ago")} 2 {t("hour")}
                      </span>
                    </h5>
                  </div>
                  <div className="card-body p-0 ms-lg-5">
                    <p className="fw-500 text-grey-500 lh-26 font-sm w-100 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi nulla dolor,Proin blandit ac massa sed rhoncus
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalOpened}
        closeModal={() => setModalOpened(false)}
        title={t("Add Your Offer")}
      >
        <form className="formAddContent ">
          {groups.map((group, index) => (
            <div className="group" key={index}>
              <label className="font-bold text-gray-900 text-xs mt-1">
                {group.label}
              </label>
              {group.type === "textarea" ? (
                <textarea type="text" placeholder={group.placeholder} />
              ) : (
                <input type={group.type} placeholder={group.placeholder} />
              )}
            </div>
          ))}

          <div className="d-block mb-3" style={{ textAlign: "end" }}>
            <button className="modelbtn">{t("Add")}</button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default Contects;
