import { useState } from "react";
import { Button, Modal } from "../ui";
import { cloud } from "../../assets/icons";
import { recommendedUserImage } from "../../assets/images";
import { t } from "i18next";

export default function PostResearch({ data, category }) {
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
      
      <div className="my-4 p-4">
        <div className="flex gap-2 items-center">
          {data.title ? (
            <>
              <h3 className="font-black text-xl text-[#0099ab] d-flex align-items-center gap-3">
                {t("Document Type")} :
              </h3>
              <span> {data.title}</span>
            </>
          ) : (
            <h3 className="font-black text-xl text-[#0099ab]">{fakeTitle}</h3>
          )}

          {data.date && (
            <p>
              {"("}
              {data.date}
              {")"}
            </p>
          )}
        </div>

        {data.authors && (
          <div className="flex items-center gap-2 pt-4">
            <p className="text-[#0099ab] font-black">{"Authors" + ":"}</p>

            <div className="flex items-center gap-2">
              <p>{data?.authors}</p>
            </div>
          </div>
        )}

        {data.summary && (
          <div className="my-4 ">
            <p
              className="text-[#0099ab] font-black"
              style={{ color: "#0099AB" }}
            >
              {t("summary")}:
            </p>
            <p className=" p-1 text-ellipsis bg-gradient-to-b ">
              {mineDescription}
            </p>
          </div>
        )}
        {data.importance && (
          <div className="my-4 d-flex align-items-center gap-1">
            <p
              className="text-[#0099ab] font-black"
              style={{ color: "#0099AB" }}
            >
              {t("Importance")} :
            </p>
            <p className=" p-1 text-ellipsis bg-gradient-to-b ">
              {data.importance}
            </p>
          </div>
        )}

        {data.url ? (
          <a className="flex gap-2 pb-3" href={data?.url} role="button">
            <img src={cloud} alt="" />
            <p className="capitalize underline text-[#0099ab]">
              {"click here"}
            </p>
          </a>
        ) : (
          <></>
        )}

        {data.summary.length > 400 && (
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
        )}
      </div>
    </>
  );
}
