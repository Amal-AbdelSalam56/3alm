import { Link } from "react-router-dom";
import {
  options2,
  person,
  search2,
  verify,
  videoCall,
} from "../../assets/images/icons";
import { recommendedUsers, friends } from "/public/fakeData";
import { t } from "i18next";

export default function ComplementaryAside() {
  const chosenRecommendedUsers = recommendedUsers.slice(0, 2);

  return (
    <div className="sticky top-24 overflow-y-scroll no-scrollbar max-h-screen xl:w-fit w-full">
      <div className="hidden lg:grid gap-4 w-fit h-fit">
        {/* recommended Users*/}
        <div className="bg-blue-50 py-4 px-2 rounded-2xl">
          <h4 className="px-2 text-black border-b border-white pb-3 font-black">
            {t("Who to follow")}
          </h4>
          {chosenRecommendedUsers.map((user) => (
            <div
              key={user.user_id}
              className="flex w-80 justify-between items-center ps-2 border-b border-white py-4"
            >
              <Link to={"/"} className="flex gap-3 text-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.user_img ? user.user_img : person}
                  alt=""
                />
                <div>
                  <p className="capitalize font-black">
                    {user.first_name + " " + user.last_name}
                  </p>
                  <p className="text-gray-400 text-xs">{"@" + user.username}</p>
                </div>
              </Link>
              <button
                className="w-fit h-fit px-4 py-1 bg-white border border-current font-bold rounded-full capitalize"
                children={t("Follow")}
              />
            </div>
          ))}
          <button
            className="w-full flex justify-start pt-3 px-2 border-t border-white h-fit font-black capitalize"
            onClick={() => {}}
          >
            {t("Show more")}
          </button>
        </div>

        {/* Terms and conditions */}
        <p className="text-gray-400 text-sm py-2">
          {t(
            "Terms of Service Privacy Policy Cookie Policy Ads info More © 2023 3lm, Inc."
          )}
        </p>

        {/* chosen user of the week */}
        <div className="bg-blue-50">
          <div className="flex justify-between p-5 bg-yellow-600 rounded-t-2xl text-white border-b border-white pb-3 font-black">
            <p>{t("Who to follow")}</p>

            <img src={verify} alt="" />
          </div>

          <div className="flex w-80 justify-between items-center ps-2 py-4">
            <Link
              to={"/"}
              key={chosenRecommendedUsers[0].user_id}
              className="flex gap-3 text-black"
            >
              <img
                className="w-12 h-12 rounded-full"
                src={
                  chosenRecommendedUsers[0].user_img
                    ? chosenRecommendedUsers[0].user_img
                    : person
                }
                alt=""
              />

              <div>
                <p className="capitalize font-black">
                  {chosenRecommendedUsers[0].first_name +
                    " " +
                    chosenRecommendedUsers[0].last_name}
                </p>

                <p className="text-gray-400 text-xs">
                  {"@" + chosenRecommendedUsers[0].username}
                </p>
              </div>
            </Link>

            <button
              className="w-fit h-fit px-4 py-1 bg-white border border-current font-bold rounded-full capitalize"
              children={t("Follow")}
            />
          </div>
        </div>

        {/* active friends */}
        <div className="grid gap-4 w-11/12 mt-4 py-4 border-t text-black border-black">
          <div className="flex justify-between">
            <h5 className="capitalize font-black">{t("Active")}</h5>

            <div className="flex gap-4">
              {/* <button>
                <img src={videoCall} alt="" />
              </button>

              <button>
                <img src={search2} alt="" />
              </button> */}

              <button>
                <img src={options2} alt="" />
              </button>
            </div>
          </div>

          <div className="grid gap-4 overflow-y-scroll no-scrollbar max-h-96">
            {friends.map((friend) => (
              <button className="flex items-center gap-2" key={friend.user_id}>
                <img
                  className="w-8 h-8 rounded-full"
                  src={friend.user_img}
                  alt=""
                />
                <p>{friend.first_name + " " + friend.last_name}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
