import { user } from "/public/fakeData";
import {
  close1,
  edit,
  flags,
  person,
  pin,
  storage,
  trash,
} from "../../assets/images/icons";
import { dots } from "../../assets/icons";
import { Gallery, InteractionBar, PostDetails } from "../";
import { useEffect, useRef, useState } from "react";
import { AudioPlayer, Dropdown } from "../ui";
import VideoPlayer from "../ui/videoPlayer/VideoPlayer";
import { useSelector } from "react-redux";
import Files from "../Files/Files";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar"; // للعربية
function PostHeader({ data, isFullScreen = false, closeModal, notPar }) {
  const URL = import.meta.env.VITE_REACT_APP_API_KEY;
  const { user } = useSelector((state) => state.auth);
  const [textWithLineBreak, setTextWithLineBreak] = useState("");

  useEffect(() => {
    // فصل النص إلى كلمات
    if (data?.text) {
      const words = data?.text?.split(" ");

      // تحقق من طول كل كلمة وتطبيق line-break: anywhere إذا كانت أطول من الطول المحدد
      const formattedText = words.map((word, index) => {
        const isWordTooLong = word.length > 10; // قم بتحديد الطول الذي تريده
        return isWordTooLong ? (
          <span key={index} style={{ lineBreak: "anywhere" }}>
            {word}{" "}
          </span>
        ) : (
          `${word} `
        );
      });

      setTextWithLineBreak(formattedText);
    }
  }, [data?.text]);
  const dropdownData = [{ name: "report post", image: flags, value: "report" }];
  const dropdownDataMe = [
    { name: "delete post", image: trash, value: "delete" },
    { name: "edit post", image: edit, value: "edit" },
    { name: "pin to your profile", image: pin, value: "pin" },
    { name: "archive post", image: storage, value: "archive" },
  ];
  const myUser = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const [t, i18n] = useTranslation();

  // console.log("User Data:", user.privacy);
  const privacy = user.privacy;

  const calculateTimeAgo = (commentDate) => {
    const currentDate = new Date();
    const commentDateTime = new Date(commentDate);
    const timeDifference = currentDate - commentDateTime;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
      if (days == 1) {
        if (i18n.language == "en") {
          return days + t(" Day");
        } else {
          return days + t(" Day");
        }
      } else {
        if (i18n.language == "en") {
          return days + t(" Days");
        } else {
          return days + t(" Days");
        }
      }
    } else if (hours > 0) {
      if (hours == 1) {
        if (i18n.language == "en") {
          return hours + t(" Hour");
        } else {
          return hours + t(" Hour");
        }
        // return hours + t(" Hour") ;
      } else {
        if (i18n.language == "en") {
          return hours + t(" Hours");
        } else {
          return hours + t(" Hours");
        }
        // return hours + t(" Hours") ;
      }
    } else if (minutes > 0) {
      if (minutes == 1) {
        if (i18n.language == "en") {
          return minutes + t(" Minute");
        } else {
          return minutes + t(" Minute");
        }
        // return minutes + t(" Minute") ;
      } else {
        if (i18n.language == "en") {
          return minutes + t(" Minutes");
        } else {
          return minutes + t(" Minutes");
        }
        // return minutes + t(" Minutes") ;
      }
    } else {
      return t(" just now");
    }
  };

  // const words = textWithLineBreak?.split(" ");
  // const coloredText =
  //   textWithLineBreak?.length > 1 &&
  //   textWithLineBreak.map((word, index) => {
  //     if (word.startsWith("#")) {
  //       return (
  //         <span style={{ color: "red" }} key={index}>
  //           {word}{" "}
  //         </span>
  //       );
  //     }
  //     return <span key={index}>{word} </span>;
  //   });
  moment.locale("ar");
  const arabicDate = moment(data?.created_at)
    .locale("ar")
    .format(`  h:mm:ss , YYYY`);
  // تنسيق العربية

  // تنسيق التاريخ والوقت بالإنجليزية
  const englishDate = data?.created_at?.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="sm:flex flex-row-reverse w-full justify-between">
      <div className="flex justify-end items-center gap-4">
        {data.post_news ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("News")}
          </p>
        ) : data.post_expirment ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Add a Science Experiment")}
          </p>
        ) : data.post_document ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Document Type")}
          </p>
        ) : data.post_trainer ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Request For Volunteers or Trainees")}
          </p>
        ) : data.post_scholarship ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Scholarship Announcement")}
          </p>
        ) : data.post_project ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Project Funding")}
          </p>
        ) : data.post_course ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Announcing Course")}
          </p>
        ) : data.post_service ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Request for a scientific service")}
          </p>
        ) : data.post_donation ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Donations")}
          </p>
        ) : data.post_essay ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Essay Title")}
          </p>
        ) : data.post_code ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Code Type")}
          </p>
        ) : data.post_research ? (
          <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
            {t("Scientific Research Summary")}
          </p>
        ) : (
          data.post_suggest && (
            <p className="text-white bg-[#7CC9D1] px-6 py-2 h-10 rounded-b-full">
              {t("Suggest")}
            </p>
          )
        )}
        {/* <button className="h-full" onClick={() => {}}></button> */}
        {!notPar && (
          <Dropdown
            buttonData={<img className="w-5" src={dots} alt="" />}
            data={user?.id == data?.user?.id ? dropdownDataMe : dropdownData}
            post={data}
          />
        )}

        {isFullScreen && (
          <button className="h-full" onClick={closeModal}>
            <img className="w-5" src={close1} alt="" />
          </button>
        )}
      </div>

      <div className="flex gap-2 pt-2">
        <button
          className="w-12 h-12 p-0 rounded-full"
          onClick={() => navigate(`/profile/${data.user.user_name}`)}
        >
          <img
            className="w-full h-full"
            src={user.user_img ? user.user_img : person}
            alt=""
          />
        </button>
        <div>
          <p
            className="flex gap-1 capitalize font-black"
            onClick={() => navigate(`/profile/${data.user.user_name}`)}
          >
            {data.user.first_name} {data.user.last_name}
            <span className="font-medium text-gray-400">
              {data?.user?.user_name}
            </span>
            <span className="hidden sm:block text-gray-400">
              {/* {data.post_data.post_time} */}.{" "}
              {calculateTimeAgo(data.created_at)}
              {/* {arabicDate} */}
            </span>
          </p>

          {/* handle the category mark on the post  */}

          <p className="text-gray-400 flex gap-1">
            {t("Posted in")} {arabicDate}
          </p>

          {/* handle the text post  */}

          {data?.text && (
            <p style={{ marginTop: "30px" }}>
              {/* {t(data?.text)}  */}
              {textWithLineBreak}
              {/* {coloredText} */}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
