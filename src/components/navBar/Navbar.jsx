import { Link, useNavigate, useParams } from "react-router-dom";
import {
  chat,
  close1,
  menu,
  notifications,
  options,
  person,
  plus,
  search,
  tick,
} from "../../assets/images/icons";
import { Dropdown, Input, Modal, SwitchButton } from "../ui";
import { useEffect, useState } from "react";
import Aside from "../aside/Aside";
import { friends } from "../../../public/fakeData";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const navigate = useNavigate();
  const pageName = useParams().name;
  const [currentPage, setCurrentPage] = useState();

  useEffect(() => {
    pageName ? setCurrentPage(pageName) : setCurrentPage("home");
  }, [pageName]);

  const [showSideMenu, setShowSideMenu] = useState(false);
  const closeSideMenu = () => {
    setShowSideMenu(false);
  };
  const openSideMenu = () => {
    setShowSideMenu(true);
  };

  const [selected, setSelected] = useState("#0099AB");

  const colors = [
    "#D91E1E",
    "#C2CD3A",
    "#26D623",
    "#1067CC",
    "#8A19CF",
    "#685628",
    "#FFAA06",
    "#000000",
    "#41DBDB",
    "#2D7621",
    "#81A5A3",
    "#0099AB",
    "#FF00B8",
    "#112A84",
  ];

  const [t, i18n] = useTranslation();

  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.classList.remove("en");
    } else {
      document.body.classList.add("en");
    }
    // console.log(active, "active");
  }, [i18n.language]);
  const handleLanguageToggle = (enabled) => {
    if (enabled) {
      i18n.changeLanguage("en");
      document.body.classList.add("en");
      localStorage.setItem("lang", "en");
    } else {
      i18n.changeLanguage("ar");
      document.body.classList.remove("en");
      localStorage.setItem("lang", "ar");
    }
  };

  return (
    <>
      <nav className="flex justify-between items-center z-10 sm:px-10 px-4 sticky top-0 bg-white h-16 sm:h-24">
        <div className="flex justify-between w-1/3">
          <div className="flex gap-2 items-center">
            <button className="sm:hidden w-9 h-9" onClick={openSideMenu}>
              <img src={menu} alt="" />
            </button>

            <p className="sm:hidden text-black font-black capitalize">
              {t(currentPage)}
            </p>

            <Link className="hidden sm:block w-20">
              <img className="w-full" src="/public/favicon.svg" alt="" />
            </Link>
          </div>

          <div className="hidden sm:flex justify-center items-center font-black capitalize">
            {currentPage !== "home" && (
              <button
                className=""
                onClick={() => {
                  navigate(-1);
                }}
              >
                <svg
                  width="59"
                  height="24"
                  viewBox="0 0 59 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 10.9999H7.41399L11.707 6.70687C12.097 6.31687 12.097 5.68388 11.707 5.29288C11.317 4.90188 10.684 4.90288 10.293 5.29288L4.29299 11.2929C3.90299 11.6829 3.90299 12.3159 4.29299 12.7069L10.293 18.7069C10.488 18.9019 10.743 18.9999 11 18.9999C11.257 18.9999 11.512 18.9019 11.707 18.7069C12.097 18.3169 12.097 17.6839 11.707 17.2929L7.41399 12.9999H20C20.553 12.9999 21 12.5529 21 11.9999C21 11.4469 20.553 10.9999 20 10.9999Z"
                    fill="#0099AB"
                  />
                </svg>
              </button>
            )}
            <p>{t(currentPage)}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <Dropdown
            normalMenu={false}
            width="w-96"
            buttonData={
              <div className="hidden sm:flex justify-center items-center rounded-full w-9 h-9 bg-gray-100 ">
                <img src={options} alt="" />
              </div>
            }
            Children={
              <div className="grid gap-4 p-8 text-black">
                <h3 className="font-bold text-lg capitalize">
                  {t("Settings")}
                </h3>
                <p className="font-bold">{t("Choose Color Theme")}</p>
                <div className="grid gap-4 grid-cols-7">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className="bg-[${color}] w-10 h-10 relative rounded-full flex justify-center items-center"
                      onClick={() => {
                        setSelected(color);
                      }}
                      style={{
                        backgroundColor: color,
                      }}
                    >
                      {color === selected && <img src={tick} alt="" />}
                    </button>
                  ))}
                </div>
                <ul className="grid gap-4 my-2">
                  <li className="flex justify-between items-center">
                    <p className="font-bold capitalize">{t("menu position")}</p>
                    <SwitchButton />
                  </li>
                  <li className="flex justify-between items-center">
                    <p className="font-bold capitalize">{t("dark mode")}</p>
                    <SwitchButton />
                  </li>
                  <li className="flex justify-between items-center">
                    <p className="font-bold capitalize">
                      {i18n.language === "en" ? "english" : "العربيه"}
                    </p>
                    <SwitchButton
                      className={i18n.language === "en" ? "active" : ""}
                      onClick={handleLanguageToggle}
                      check={i18n.language === "en" ? true : false}
                    />
                  </li>
                </ul>
              </div>
            }
          />

          <Dropdown
            normalMenu={false}
            width="w-96"
            buttonData={
              <div className="hidden sm:flex justify-center items-center rounded-full w-9 h-9 bg-gray-100">
                <img src={chat} alt="" />
              </div>
            }
            Children={
              <div className="">
                <div className="flex gap-2 w-full p-2 ">
                  <Input
                    type="search"
                    className="w-full"
                    placeholder="Search chat"
                  />
                  <button className="w-16 flex justify-center items-center bg-[#F2F4F6] rounded-lg">
                    <img src={plus} alt="" />
                  </button>
                </div>
                <ul className="grid gap-4 text-black">
                  {friends.slice(0, 4).map((friend) => (
                    <button
                      className="flex gap-2 py-4 px-4"
                      key={friend.user_id}
                    >
                      <img
                        className="w-9 h-9 rounded-full"
                        src={friend.user_img}
                        alt=""
                      />
                      <div>
                        <div className="flex justify-between">
                          <p>{friend.first_name + " " + friend.last_name}</p>
                          <p>{friend.time}</p>
                        </div>
                        <p className="text-left w-full">{friend.massage}</p>
                      </div>
                    </button>
                  ))}
                </ul>
              </div>
            }
          />

          <Dropdown
            normalMenu={false}
            width="w-96"
            buttonData={
              <div className="hidden sm:flex justify-center items-center rounded-full w-9 h-9 bg-gray-100">
                <img src={notifications} alt="" />
              </div>
            }
            Children={
              <div className="grid gap-4 p-8">
                <div className="flex justify-between">
                  <p className="font-bold text-lg capitalize text-black">
                    {"Notifications"}
                  </p>
                  <button onClick={() => {
                    navigate("/notifcations");
                  }}>{"Show All"}</button>
                </div>
                <ul className="grid gap-6 text-black w-full">
                  {friends.slice(0, 4).map((friend) => (
                    <button className="flex gap-2" key={friend.user_id}>
                      <img
                        className="w-9 h-9 rounded-full"
                        src={friend.user_img}
                        alt=""
                      />

                      <div className="text-start">
                        <p className="">
                          {friend.first_name + " " + friend.last_name}
                        </p>
                        <p className="">{"Tom is in a big hurry."}</p>
                      </div>

                      <p className="text-end">{friend.time}</p>
                    </button>
                  ))}
                </ul>
              </div>
            }
          />

          <button className="sm:hidden" onClick={() => { }}>
            <img src={search} alt="" />
          </button>

          <button
            className="flex justify-center items-center rounded-full w-9 h-9"
            onClick={() => { }}
          >
            <img
              src={person}
              alt=""
              onClick={() => {
                navigate("/portfolio");
              }}
            />
          </button>
        </div>
      </nav>

      <Modal
        isOpen={showSideMenu}
        closeModal={closeSideMenu}
        height="h-screen"
        hasCloseButton
        children={
          <>
            <button
              className="absolute z-20 right-1 top-1"
              onClick={closeSideMenu}
            >
              <img src={close1} alt="" />
            </button>
            <Aside isOpen={showSideMenu} close={closeSideMenu} />
          </>
        }
      />
    </>
  );
}
