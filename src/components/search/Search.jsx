import { useState } from "react";
import { Input } from "../ui";
import { person } from "../../assets/images/icons";
import Avatar from "../ChatComponents/ChatList/Avatar";
import { recommendedUsers } from "./../../../public/fakeData";
import { Link } from "react-router-dom";
import Internshala from "../../assets/images/Internshala.png";
import hash from "../../assets/images/3333.png";
import Location from "../../assets/images/Location.png";
import { t } from "i18next";
import { useSelector } from "react-redux";
import { getDataSearch } from "../posts/getDataPost";
import SinglePost from "../singlePost/SinglePost";

export default function Search({ isFullScreen = false }) {
  const [selected, setSelected] = useState("all");
  const headersTitles = ["all", "user", "post", "videos", "research", "tag"];

  const fakeSearchData = [
    { name: "internshala", icon: person, type: "internshala" },
    { name: "#internshala", icon: person, type: "10.6K posts" },
  ];
  const chosenRecommendedUsers = recommendedUsers.slice(0, 2);
  const [filteringBy, setFilteringBy] = useState("all");
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;

  const { token } = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const { items, setPage, setItems, hasMore } = getDataSearch(
    1,
    token,
    "search-general",
    text,
    selected
  );
  // console.log(items);
  return (
    <div className="flex items-center flex-col gap-4">
      <div className="bg-[#F7F9FA] rounded-2xl sm:px-4 pt-4 shadow w-full max-w-4xl">
        <Input
          hasIcon={true}
          inputClassName="p-16"
          placeholder={t("search")}
          type={"search"}
          handleChange={(e) => setText(e.target.value)}
        />

        <ul className="flex justify-around sm:justify-start sm:gap-8 sm:ps-10">
          {headersTitles.map((header, index) => (
            <li
              className={`border-black ${
                selected === header ? "border-b-2 text-black" : "text-[#969696]"
              }`}
              key={index}
            >
              <button
                className="capitalize sm:px-6 pt-8 pb-2 "
                onClick={() => setSelected(header)}
              >
                {t(header)}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {items &&
        items.map((s, index) => (
          <>
            {s.category_id ? (
              <SinglePost key={s.id} data={s} />
            ) : (
              <div
                className="d-flex p-2 align-items-center gap-3 cursor-pointer w-100"
                key={index}
                onClick={() => navigate(`/profile/${s.user_name}`)}
              >
                {s?.profile?.image ? (
                  <img
                    src={`${URL}/storage/${s.profile.image}`}
                    alt=""
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                ) : (
                  <img
                    style={{ width: "40px" }}
                    className="rounded-full"
                    src={person}
                    alt="PFP"
                  />
                )}
                <h3 className="m-0 p-0">{s.first_name}</h3>
              </div>
            )}
          </>
        ))}
      <ul className="text-black w-full max-w-4xl grid gap-8">
        {fakeSearchData.map((label, index) => (
          <li
            key={index}
            style={{ display: selected === "top" ? "block" : "none" }}
          >
            <button>
              {chosenRecommendedUsers.map((user) => (
                <div
                  key={user.user_id}
                  className="flex w-80 justify-between items-center ps-2 border-b border-white py-4"
                >
                  <Link to={"/"} className="flex gap-3 text-black">
                    <img
                      className="w-12 h-12 rounded-full"
                      src={Internshala}
                      alt=""
                    />
                    <div>
                      <p className="capitalize font-black">
                        {user.first_name + " " + user.last_name}
                      </p>
                      <p className="text-gray-400 text-xs">
                        {"@" + user.user_name}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}

              <div className="flex w-80 justify-between items-center ps-2 border-b border-white py-4">
                <Link to={"/"} className="flex gap-3 text-black">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={Location}
                    alt=""
                  />
                  <div>
                    <p className="capitalize font-black"> internshala </p>
                    <p className="text-gray-400 text-xs">
                      Internshala,B-610,...
                    </p>
                  </div>
                </Link>
              </div>

              <div className="flex w-80 justify-between items-center ps-2 border-b border-white py-4">
                <Link to={"/"} className="flex gap-3 text-black">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={hash}
                    style={{ padding: "11px" }}
                    alt=""
                  />
                  <div>
                    <p className="capitalize font-black"> #internshala </p>
                    <p className="text-gray-400 text-xs">10.6K posts</p>
                  </div>
                </Link>
              </div>
            </button>
          </li>
        ))}

        <li style={{ display: selected === "accounts" ? "block" : "none" }}>
          <button>
            {chosenRecommendedUsers.map((user) => (
              <div
                key={user.user_id}
                className="flex w-80 justify-between items-center ps-2 border-b border-white py-4"
              >
                <Link to={"/"} className="flex gap-3 text-black">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={Internshala}
                    alt=""
                  />
                  <div>
                    <p className="capitalize font-black">
                      {user.first_name + " " + user.last_name}
                    </p>
                    <p className="text-gray-400 text-xs">
                      {"@" + user.username}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </button>
        </li>

        <li style={{ display: selected === "places" ? "block" : "none" }}>
          <button>
            <div className="flex w-80 justify-between items-center ps-2 border-b border-white py-4">
              <Link to={"/"} className="flex gap-3 text-black">
                <img className="w-12 h-12 rounded-full" src={Location} alt="" />
                <div>
                  <p className="capitalize font-black"> internshala </p>
                  <p className="text-gray-400 text-xs">Internshala,B-610,...</p>
                </div>
              </Link>
            </div>
          </button>
        </li>

        <li style={{ display: selected === "tags" ? "block" : "none" }}>
          <button>
            <div className="flex w-80 justify-between items-center ps-2 border-b border-white py-4">
              <Link to={"/"} className="flex gap-3 text-black">
                <img
                  className="w-12 h-12 rounded-full"
                  src={hash}
                  style={{ padding: "11px" }}
                  alt=""
                />
                <div>
                  <p className="capitalize font-black"> #internshala </p>
                  <p className="text-gray-400 text-xs">10.6K posts</p>
                </div>
              </Link>
            </div>
          </button>
        </li>

        {/* Add similar conditional rendering for other tabs */}
      </ul>
    </div>
  );
}
