import { useState } from "react";
import { Button, Modal } from "../ui";
import { cloud } from "../../assets/icons";
import { recommendedUserImage } from "../../assets/images";
import { t } from "i18next";

export default function PostExpirment({ data, category }) {
  const mineDescription = data?.summary?.substring(0, 400);
  const [showMore, setShowMore] = useState(false);

  const fakeTitle = "IT'S GONNA RAIN TODAY";
  const fakeDate = "31/10/2023";
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const handelClick = () => {
    navigate(`/singlePost/${target.id}`);
  };
  return (
    <div className="p-4">
      <div className=" pt-4">
        {data?.title && (
          <h3 className="font-black text-xl text-[#0099ab] d-flex align-items-center gap-3">
            {data?.title}
          </h3>
        )}
      </div>
      <div className="my-2 ">
        <div className="flex gap-2 items-center">
          {data.documentation_type && (
            <>
              <h3 className="font-black text-xl text-[#0099ab] d-flex align-items-center gap-3">
                {t("Document Type")} :
              </h3>
              <span> {data.documentation_type}</span>
            </>
          )}

          {data.date && (
            <p>
              {"("}
              {data.date}
              {")"}
            </p>
          )}
        </div>

        {data?.tools && (
          <div className="flex items-center gap-2 pt-4">
            <p className="text-[#0099ab] font-black">{"Tools" + " :"}</p>

            <div className="flex items-center gap-2">
              <p>{data?.tools}</p>
            </div>
          </div>
        )}
        {data?.steps && (
          <div className="flex items-center gap-2 pt-4">
            <p className="text-[#0099ab] font-black">{"Steps" + " :"}</p>

            <div className="flex items-center gap-2">
              <p>{data?.steps}</p>
            </div>
          </div>
        )}
        {data.discussion && (
          <div className="my-4 ">
            <span className="d-block fs-5" style={{ color: "#0099AB" }}>
              {t("Discussion")}:
            </span>
            <p className=" p-1 text-ellipsis bg-gradient-to-b from-black to-slate-200 text-transparent bg-clip-text">
              {data?.discussion}
            </p>
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
            <p className=" p-1 text-ellipsis bg-gradient-to-b from-black to-slate-200 text-transparent bg-clip-text">
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

        {/* {data.details.length > 400 && (
          <>
            <Button
              className="capitalize w-full"
              children={"reed more" + " " + category}
              onClick={() => {
                setShowMore(true);
              }}
            />
            <Modal
              isOpen={showMore}
              title={fakeTitle}
              // title={data.title}
              closeModal={() => {
                setShowMore(false);
              }}
              children={<p className="p-4">{data.description}</p>}
            />
          </>
        )} */}
      </div>
    </div>
  );
}
