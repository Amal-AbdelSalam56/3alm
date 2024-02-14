import { useState } from "react";
import { Button, Modal } from "../ui";
import { cloud } from "../../assets/icons";
import { recommendedUserImage } from "../../assets/images";

export default function PostDetailsNews({ data, category }) {
  const mineDescription = data.details.substring(0, 400);
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
          {data.header ? (
            <h3 className="font-black text-xl text-[#0099ab]">
              {data.news_title}
            </h3>
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
              <img
                className="w-6 rounded-full"
                src={recommendedUserImage}
                alt=""
              />
              <p>{"Dr.Mamon "}</p>
            </div>

            <div className="flex items-center gap-2">
              <img
                className="w-6 rounded-full"
                src={recommendedUserImage}
                alt=""
              />
              <p>{"Dr.Mamon "}</p>
            </div>
          </div>
        )}

        {data.details && (
          <p className="my-4 p-1 text-ellipsis bg-gradient-to-b from-black to-slate-200 text-transparent bg-clip-text">
            {mineDescription}
          </p>
        )}

        {data.file ? (
          <a className="flex gap-2 pb-3" href={data?.url} role="button">
            <img src={cloud} alt="" />
            <p className="capitalize underline text-[#0099ab]">
              {"click here"}
            </p>
          </a>
        ) : (
          <a className="flex gap-2 pb-3" href="" role="button">
            <img src={cloud} alt="" />
            <p className="capitalize underline text-[#0099ab]">
              {"click here"}
            </p>
          </a>
        )}

        {data.details.length > 400 && (
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
