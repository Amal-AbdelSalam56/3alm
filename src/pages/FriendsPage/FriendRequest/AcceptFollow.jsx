/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FiTrash2 } from "react-icons/fi";

function AcceptFollow({ e }) {
  const [follow, setFollow] = useState(false);
  const [t] = useTranslation();

  return (
    <>
      {follow ? (
        <>
          {" "}
          <div className="card-body pt-0 pe-4 ps-4 pb-4 gap-2 ">
            <button
              onClick={() => {
                setFollow(false);
                //   createAccept();
              }}
              className="font-xss bg-primary-gradiant ms-2 text-white text-center font-xssss align-items-center"
              style={{ padding: " 7px 80px", borderRadius: "0.5rem" }}
            >
              <span> {t("unfriend")}</span>
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="card-body pt-0 pe-4 ps-4 pb-4 gap-2 ">
            <button
              onClick={() => {
                setFollow(true);
                // createAccept();
              }}
              className="font-xss bg-primary-gradiant text-white text-center font-xssss align-items-center"
              style={{ padding: " 7px 58px", borderRadius: "0.5rem" }}
            >
              <span> {t("Confirm")}</span>
            </button>
          </div>
          <a
            href="#"
            className=" font-xs text-center font-xssss fw-600 rounded-2"
            style={{
              color: "#EC5252",
              backgroundColor: "#FFEFEC",
              height: "38px",
              padding: "4px 8px",
            }}
          >
            <FiTrash2 />
          </a>
        </>
      )}
    </>
  );
}

export default AcceptFollow;
