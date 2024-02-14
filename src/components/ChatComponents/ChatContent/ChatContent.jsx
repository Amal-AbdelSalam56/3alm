/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import "./chatContent.css";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import { BsEmojiSmile } from "react-icons/bs";
import data from "@emoji-mart/data";
import { Picker } from 'emoji-mart';
import { IoSend } from "react-icons/io5";
import {
  AiOutlineArrowRight,
  AiOutlinePlus,
} from "react-icons/ai";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoSearch } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";



function ChatContent({
  setInfo,
  info,
  chatActive,
  setChatActive,
  setInfoActive,
}) {
  const chatItms = [
    {
      key: 1,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
    {
      key: 8,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 9,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 10,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 11,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },

    {
      key: 12,
      image:
        "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
      type: "",
      msg: "Hi Tim, How are you?",
    },
  ];

  // const themeColor = localStorage.getItem("themeColor");

  const [showEmoji, setShowEmoji] = useState(false);
  const [text, setText] = useState("");

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);


  const emojiRef = useRef();

  const handleClick = (e) => {
    if (emojiRef.current.contains(e.target)) {
      // inside click
      return;
    } else {
      setShowEmoji(false);
    }
    // outside click
  };

  const [t] = useTranslation();

  return (
    <div
      className="main__chatcontent"
      style={chatActive ? { left: "0" } : { left: "107%" }}
    >
      <div className="content__header card">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="current-chatting-user">
            <AiOutlineArrowRight
              className="font-xl cursor-pointer backChat ms-2 "
              onClick={() => setChatActive(false)}
            />
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <div className="name-user">
              <p>Tim Hover</p>
              <span className="seen">last seen 5 mins ago </span>
            </div>

          </div>
          <div className="d-flex align-items-center gap-3">
            {/* <FaPhone
              className="font-xl cursor-pointer"
            /> */}
            <IoSearch
              className="font-xl cursor-pointer"
            />
            <IoMdInformationCircleOutline
              className="font-xl cursor-pointer "
              onClick={() => {
                setInfoActive(true);
                setInfo(!info);
              }}
            />
            <BsThreeDotsVertical
              className="font-xl cursor-pointer "
            />
          </div>
        </div>
      </div>
      <div className="content__body">
        <div className="chat__items">
          {chatItms.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={index}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
        </div>
      </div>
      <div className="content__footer  position-relative d-flex justify-content-between align-items-center">
        <div className="sendNewMessage d-flex  align-items-center">
          <div
            className="addFiles d-flex align-items-center gap-2"
            ref={emojiRef}
          >
            <input type="file" className="d-none" id="file" />
            <label htmlFor="file">
              <AiOutlinePlus
                className="cursor-pointer font-lg"
                htmlFor="file"
              />
            </label>
            <BsEmojiSmile
              onClick={() => setShowEmoji(true)}
              className="cursor-pointer font-lg"
            />
            {showEmoji && (
              <div className="position-absolute right-2 emoji-box" style={{ right: "0px", bottom: "60px", display: "block" }} ref={emojiRef}>
                <Picker
                  data={data}
                  emojiSize={20}
                  emojiButtonSize={28}
                  onEmojiSelect={addEmoji}
                  maxFrequentRows={0}
                />
              </div>
            )}
          </div>

          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t("Message")}
            className="w-full bg-transparent outline-none resize-none text-sm"
            cols="30"
            rows="2"
          ></input>
        </div>
        <div className="send">
          <IoSend className="font-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
