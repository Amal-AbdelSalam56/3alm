import { useState } from "react";
import { Button, Modal } from "../ui";
import { cloud } from "../../assets/icons";
import { recommendedUserImage } from "../../assets/images";
import { t } from "i18next";

export default function PostCourse({ data, category }) {
  const mineDescription = data?.summary?.substring(0, 400);
  const [showMore, setShowMore] = useState(false);

  const fakeTitle = "IT'S GONNA RAIN TODAY";
  const fakeDate = "31/10/2023";
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handelClick = () => {
    navigate(`/singlePost/${target.id}`);
  };
  return (
    <>
      
      <div className="p-4">
        {data?.organization && (
          <div className="flex align-items-center gap-2 pt-4">
            <h3 className="font-black text-xl text-[#0099ab] d-flex align-items-center gap-3">
              {t("Organization")} :
            </h3>

            <div className="flex items-center gap-2">
              <p>{data?.organization}</p>
            </div>
          </div>
        )}
        {data?.name && (
          <div className="flex items-center gap-2 pt-3">
            <p className="text-[#0099ab] font-black">
              {t("Course") + " :"}
            </p>

            <div className="flex items-center gap-2">
              <p>{data?.name}</p>
            </div>
          </div>
        )}
        {data.details && (
          <div className="my-2 ">
            <p className="text-[#0099ab] font-black">{t("Details")}:</p>
            <p className=" p-1 text-ellipsis bg-gradient-to-b to-slate-200">
              {data?.details}
            </p>
          </div>
        )}
        <div className="my-2 ">
          {data?.price && (
            <div className="flex items-center gap-2 pt-3">
              <p className="text-[#0099ab] font-black">{t("Price") + " :"}</p>

              <div className="flex items-center gap-2">
                <p>{data?.price}</p>
              </div>
            </div>
          )}
          {data?.email && (
            <div className="flex items-center gap-2 pt-3">
              <p className="text-[#0099ab] font-black">{t("Email") + " :"}</p>

              <div className="flex items-center gap-2">
                <p>{data?.email}</p>
              </div>
            </div>
          )}
          {data?.conditions && (
            <div className="flex items-center gap-2 pt-3">
              <p className="text-[#0099ab] font-black">{"Conditions" + " :"}</p>

              <div className="flex items-center gap-2">
                <p>{data?.conditions}</p>
              </div>
            </div>
          )}

          {data.authors && (
            <div className="flex items-center gap-2 pt-4">
              <p className="text-[#0099ab] font-black">{"Authors" + " :"}</p>

              <div className="flex items-center gap-2">
                <p>{data?.authors}</p>
              </div>
            </div>
          )}
          {data.importance && (
            <div className="flex items-center gap-2 pt-4">
              <p className="text-[#0099ab] font-black">{"Importance" + " :"}</p>

              <div className="flex items-center gap-2">
                <p>{data?.importance}</p>
              </div>
            </div>
          )}

          {data.deadline && (
            <div className="my-4 d-flex align-items-center gap-1">
              <span className="d-block fs-5" style={{ color: "#0099AB" }}>
                {t("Deadline")} :
              </span>
              <p className=" p-1 text-ellipsis bg-gradient-to-b  to-slate-200 ">
                {data.deadline}
              </p>
            </div>
          )}

          {data.references ? (
            <a
              className="flex gap-2 my-3 pb-3"
              href={data?.references}
              role="button"
              target="_blank"
            >
              <img src={cloud} alt="" />
              <p className="capitalize underline text-[#0099ab]">
                {"click here"}
              </p>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}
