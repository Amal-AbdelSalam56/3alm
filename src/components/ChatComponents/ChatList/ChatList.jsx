/* eslint-disable react/prop-types */

import "./chatList.scss";
import ChatListItems from "./ChatListItems";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";


function ChatList({
  setChatActive,
  setActive,
  menuAuctive,
}) {
  const allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: true,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 8,
      name: "Autumn Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet David",
      active: false,
      isOnline: true,
    },
  ];


  const [t] = useTranslation();
  return (
    <div
      className={
        menuAuctive ? "main__chatlist active" : "main__chatlist "
      }
    >
      <div className="top d-flex align-items-center justify-content-between mb-3 mt-3">

        <Link style={{ margin: "0 27px", fontSize: "35px" }}
          to="/home"
          className="d-center"
          onClick={() => setActive("Home")}
        >
          <AiOutlineHome
            className="cursor-pointer"
          />
        </Link>



        <div className="chatList__search mb-3" style={{ height: "28px", marginRight: "15px" }}>

          <div className="search_wrap input-with-icon" style={{ display: "flex" }}>
            <IoSearch
              className="font-xl cursor-pointer input-icon"
            />
            <input
              type="text"
              className="p-2"
              placeholder={t("search")}
              required
            />

          </div>
        </div>

      </div>

      <div className="chatlist__items">
        {allChatUsers.map((item, index) => {
          return (
            <ChatListItems
              setChatActive={setChatActive}
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ChatList;
